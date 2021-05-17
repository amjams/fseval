import logging
from dataclasses import dataclass, field
from enum import Enum
from functools import reduce
from typing import Any, Dict, List, Optional

import numpy as np
from fseval.base import Task
from hydra.core.config_store import ConfigStore
from omegaconf import II, MISSING
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.utils import resample

logger = logging.getLogger(__name__)


@dataclass
class ResampleConfig:
    _target_: str = "fseval.pipeline.resample.Resample"
    name: str = MISSING
    replace: bool = False
    sample_size: Any = None  # float [0.0 to 1.0] or int [1 to n_samples]
    random_state: Optional[int] = None
    stratify: Optional[List] = None


class Resample(ResampleConfig, BaseEstimator, TransformerMixin):
    n_samples: Optional[int] = None
    frac_samples: Optional[float] = None

    @classmethod
    def _get_config_names(cls):
        config = super()._get_config_names()
        config.remove("sample_size")
        config.append("n_samples")
        config.append("frac_samples")
        return config

    def fit(self, *arrays, y=None):
        return self

    def transform(self, *arrays):
        # assume arrays have equal amount of samples. `resample` also checks.
        n = len(arrays[0])

        if isinstance(self.sample_size, int):
            self.n_samples = self.sample_size
        elif isinstance(self.sample_size, float):
            self.n_samples = round(n * self.sample_size)
        else:  # use all samples when no `sample_size` given
            self.n_samples = n
        self.frac_samples = self.n_samples / n

        samples = resample(
            *arrays,
            replace=self.replace,
            random_state=self.random_state,
            stratify=self.stratify,
            n_samples=self.n_samples,
        )

        with_or_without = "with" if self.replace else "without"
        logger.info(
            f"took {self.n_samples} samples {with_or_without} replacement"
            + f" (total samples: n={n})"
        )

        return samples
