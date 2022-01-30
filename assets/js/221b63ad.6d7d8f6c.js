"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[166],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4531:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"Metrics"},c="Metrics",l={unversionedId:"config/metrics",id:"config/metrics",title:"Metrics",description:"FeatureImportances",source:"@site/docs/config/metrics.mdx",sourceDirName:"config",slug:"/config/metrics",permalink:"/fseval/docs/config/metrics",editUrl:"https://github.com/dunnkers/fseval/tree/website/docs/config/metrics.mdx",tags:[],version:"current",frontMatter:{title:"Metrics"},sidebar:"tutorialSidebar",previous:{title:"Callbacks",permalink:"/fseval/docs/config/callbacks"},next:{title:"fseval.types.CacheUsage",permalink:"/fseval/docs/types/CacheUsage"}},p=[{value:"FeatureImportances",id:"featureimportances",children:[],level:2},{value:"RankingScores",id:"rankingscores",children:[],level:2},{value:"ValidationScores",id:"validationscores",children:[],level:2},{value:"\u2699\ufe0f Custom Metrics",id:"\ufe0f-custom-metrics",children:[],level:2}],u={toc:p};function m(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metrics"},"Metrics"),(0,i.kt)("h2",{id:"featureimportances"},"FeatureImportances"),(0,i.kt)("p",null,"\u2705 ","\xa0"," ",(0,i.kt)("strong",{parentName:"p"},"Enabled by default"),"."),(0,i.kt)("p",null,"Exports whatever your ranker sets as ",(0,i.kt)("inlineCode",{parentName:"p"},"feature_importances_")," to a table. This can be CSV, SQL, or a WandB table, depending on what is configured as a Callback."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"feature_importances")," table:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"feature importances table",src:n(4348).Z,width:"486",height:"576"})),(0,i.kt)("h2",{id:"rankingscores"},"RankingScores"),(0,i.kt)("p",null,"\u2705 ","\xa0"," ",(0,i.kt)("strong",{parentName:"p"},"Enabled by default"),"."),(0,i.kt)("p",null,"Exports the time it took to fit the ranking, in a ",(0,i.kt)("inlineCode",{parentName:"p"},"fit_time")," variable."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ranking_scores")," table:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ranking scores table",src:n(4759).Z,width:"271",height:"91"})),(0,i.kt)("h2",{id:"validationscores"},"ValidationScores"),(0,i.kt)("p",null,"\u2705 ","\xa0"," ",(0,i.kt)("strong",{parentName:"p"},"Enabled by default"),"."),(0,i.kt)("p",null,"Exports the validation scores to a table. Stores whatever results came out of the validation estimator's ",(0,i.kt)("inlineCode",{parentName:"p"},"score()")," function. The results are stored per ",(0,i.kt)("inlineCode",{parentName:"p"},"n_features_to_select")," metric."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"validation_scores")," table:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"validation scores table",src:n(6995).Z,width:"494",height:"572"})),(0,i.kt)("h2",{id:"\ufe0f-custom-metrics"},"\u2699\ufe0f Custom Metrics"),(0,i.kt)("p",null,"To add your own custom metric, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractMetric")," interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class AbstractMetric:\n    def score_bootstrap(\n        self,\n        ranker: AbstractEstimator,\n        validator: AbstractEstimator,\n        callbacks: Callback,\n        scores: Dict,\n        **kwargs,\n    ) -> Dict:\n        """Aggregated metrics for the bootstrapped pipeline."""\n        ...\n\n    def score_pipeline(self, scores: Dict, callbacks: Callback, **kwargs) -> Dict:\n        """Aggregated metrics for the pipeline."""\n        ...\n\n    def score_ranking(\n        self,\n        scores: Union[Dict, pd.DataFrame],\n        ranker: AbstractEstimator,\n        bootstrap_state: int,\n        callbacks: Callback,\n        feature_importances: Optional[np.ndarray] = None,\n    ) -> Union[Dict, pd.DataFrame]:\n        """Metrics for validating a feature ranking, e.g. using a ground-truth."""\n        ...\n\n    def score_support(\n        self,\n        scores: Union[Dict, pd.DataFrame],\n        validator: AbstractEstimator,\n        X,\n        y,\n        callbacks: Callback,\n        **kwargs,\n    ) -> Union[Dict, pd.DataFrame]:\n        """Metrics for validating a feature support vector. e.g., this is an array\n        indicating yes/no which features to include in a feature subset. The array is\n        validated by running the validation estimator on this feature subset."""\n        ...\n\n    def score_dataset(\n        self, scores: Union[Dict, pd.DataFrame], callbacks: Callback, **kwargs\n    ) -> Union[Dict, pd.DataFrame]:\n        """Aggregated metrics for all feature subsets. e.g. 50 feature subsets for\n        p >= 50."""\n        ...\n\n    def score_subset(\n        self,\n        scores: Union[Dict, pd.DataFrame],\n        validator: AbstractEstimator,\n        X,\n        y,\n        callbacks: Callback,\n        **kwargs,\n    ) -> Union[Dict, pd.DataFrame]:\n        """Metrics for validation estimator. Validates 1 feature subset."""\n        ...\n')),(0,i.kt)("p",null,"For example, this is how the ",(0,i.kt)("inlineCode",{parentName:"p"},"RankingScores")," metric is implemented:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Dict\n\nfrom fseval.types import AbstractEstimator, AbstractMetric, Callback\n\n\nclass UploadRankingScores(AbstractMetric):\n    def score_bootstrap(\n        self,\n        ranker: AbstractEstimator,\n        validator: AbstractEstimator,\n        callbacks: Callback,\n        scores: Dict,\n        **kwargs,\n    ) -> Dict:\n        ranking_scores = scores["ranking"]\n\n        ## upload ranking scores\n        callbacks.on_table(ranking_scores, "ranking_scores")\n\n        return scores\n\n')),(0,i.kt)("p",null,"With its according config file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/metrics/ranking_scores.yaml"',title:'"conf/metrics/ranking_scores.yaml"'},"# @package metrics\nranking_scores:\n  _target_: fseval.metrics.ranking_scores.UploadRankingScores\n")),(0,i.kt)("p",null,"And can then be activated on the commandline with ",(0,i.kt)("inlineCode",{parentName:"p"},"+metrics='[ranking_scores]'"),"."))}m.isMDXComponent=!0},4348:function(e,t,n){t.Z=n.p+"assets/images/feature_importances-130a1b3ce457a6c27f8edbc76b16ab18.png"},4759:function(e,t,n){t.Z=n.p+"assets/images/ranking_scores-8aeb9da4d78bf48278b95e05b45508ba.png"},6995:function(e,t,n){t.Z=n.p+"assets/images/validation_scores-c8b17b95e21db1628f74164bb7500c43.png"}}]);