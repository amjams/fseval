from enum import Enum
from typing import Any, Dict, List, Optional

import numpy as np
from hydra.utils import instantiate
from omegaconf import MISSING, DictConfig, OmegaConf
from sklearn.base import BaseEstimator
from sklearn.metrics import accuracy_score, r2_score

from fseval.config import EstimatorConfig, Task


class Configurable(BaseEstimator):
    @classmethod
    def _get_config_names(cls) -> List:
        """Get config names for this configurable estimator"""
        return super()._get_param_names()

    def _omitted_values(self) -> List:
        return [MISSING, None]

    def get_config(self, deep: bool = True) -> Dict:
        keys = self._get_config_names()
        values = [getattr(self, key) for key in keys]
        out = dict()
        for key, value in zip(keys, values):
            if value in self._omitted_values():
                continue
            if deep and hasattr(value, "get_config"):
                out[key] = value.get_config()
            elif deep and hasattr(value, "get_params"):
                out[key] = value.get_params()
            elif isinstance(value, Enum):
                out[key] = value.name
            # TODO recurse with dict keys/values
            elif isinstance(value, DictConfig):
                out[key] = OmegaConf.to_container(value)
            elif hasattr(value, "__dict__"):
                out[key] = value.__dict__
            else:
                out[key] = value

        return out


def instantiate_estimator(
    name: str,
    task: Task,
    classifier: Optional[EstimatorConfig] = None,
    regressor: Optional[EstimatorConfig] = None,
):
    estimators = dict(classification=classifier, regression=regressor)
    estimator = estimators[task.name]
    assert (
        estimator is not None
    ), f"selected estimator does not support {task.name} datasets!"
    return instantiate(estimator, name=name)


class ConfigurableEstimator(Configurable):
    @classmethod
    def _get_config_names(cls) -> List:
        params = super()._get_config_names()
        assert (
            "classifier" in params and "regressor" in params
        ), "configurable estimator has no classifier and regressor fields"
        params.remove("classifier")
        params.remove("regressor")
        params.append("estimator")
        return params

    @property
    def estimator(self) -> Any:
        # choose estimator according to task (classifier or regressor)
        estimators = dict(classification=self.classifier, regression=self.regressor)
        estimator = estimators[self.task.name]

        # make sure ranker has the correct estimator defined
        assert (
            estimator is not None
        ), f"{self.name} does not support {self.task.name} datasets!"

        return estimator

    def fit(self, X: List[List[float]], y: List) -> None:
        target_is_multivariate = np.ndim(y) > 1
        if target_is_multivariate:
            multivariate_configs = dict(
                classification=self.multivariate_clf, regression=self.multivariate_reg
            )
            estimator_has_multivariate_support = multivariate_configs[self.task.name]

            assert (
                estimator_has_multivariate_support
            ), f"{self.name} estimator does not support multivariate datasets."

        self.estimator.fit(X, y)

    def predict(self, X: List[List[float]] = None) -> List:
        return self.estimator.predict(X)

    def predict_proba(self, X: List[List[float]] = None) -> np.ndarray:
        return self.estimator.predict_proba(X)

    def score(self, X: List[List[float]], y: List, sample_weight=None) -> float:
        return self.estimator.score(X, y, sample_weight=sample_weight)

    @property
    def _estimator_type(self):
        estimator_types = dict(classification="classifier", regression="regressor")
        return estimator_types[self.task.name]

    def _more_tags(self):
        return {"requires_y": True}

    @property
    def feature_importances_(self) -> np.ndarray:
        return self.estimator.feature_importances_
