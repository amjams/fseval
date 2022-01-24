"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7988:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"Callbacks"},s="Callbacks",p={unversionedId:"config/callbacks",id:"config/callbacks",title:"Callbacks",description:"To SQL",source:"@site/docs/config/callbacks.mdx",sourceDirName:"config",slug:"/config/callbacks",permalink:"/fseval/docs/config/callbacks",editUrl:"https://github.com/dunnkers/fseval/tree/website/docs/config/callbacks.mdx",tags:[],version:"current",frontMatter:{title:"Callbacks"},sidebar:"tutorialSidebar",previous:{title:"fseval.config.StorageConfig",permalink:"/fseval/docs/config/StorageConfig"},next:{title:"Metrics",permalink:"/fseval/docs/config/metrics"}},c=[{value:"To SQL",id:"to-sql",children:[{value:"<code>EngineConfig</code>",id:"engineconfig",children:[],level:3}],level:2},{value:"To CSV",id:"to-csv",children:[],level:2},{value:"To Weights and Biases",id:"to-weights-and-biases",children:[],level:2},{value:"\u2699\ufe0f Custom Callbacks",id:"\ufe0f-custom-callbacks",children:[],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"callbacks"},"Callbacks"),(0,l.kt)("h2",{id:"to-sql"},"To SQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class fseval.config.callbacks.ToSQLCallback(\n    engine_config: EngineConfig=MISSING,\n    if_table_exists: str="append"\n)\n')),(0,l.kt)("p",null,"SQL support for fseval. Uploads general information on the experiment to a ",(0,l.kt)("inlineCode",{parentName:"p"},"experiments")," table and provides a hook for uploading custom tables."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"engine")," : ",(0,l.kt)("a",{parentName:"td",href:"#engineconfig"},"EngineConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"All keyword arguments to pass to SQLAlchemy's ",(0,l.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},(0,l.kt)("inlineCode",{parentName:"a"},"create_engine"))," function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"if_table_exists")," : str"),(0,l.kt)("td",{parentName:"tr",align:null},"What to do when a table of the specified name already exists. Can be 'fail', 'replace' or 'append'. By default is 'append'. For more info, see the ",(0,l.kt)("a",{parentName:"td",href:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_sql.html"},"Pandas.DataFrame#to_sql")," function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"engineconfig"},(0,l.kt)("inlineCode",{parentName:"h3"},"EngineConfig")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class EngineConfig(\n    url: str=MISSING\n)\n")),(0,l.kt)("p",null,"A type definition whatever we are passing to SQLAlchemy's ",(0,l.kt)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"create_engine")," function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"url")," : str"),(0,l.kt)("td",{parentName:"tr",align:null},"The database URL. Is of type RFC-1738, e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"dialect+driver://username:password@host:port/database")," See the SQLAlchemy documentation for more information; ",(0,l.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls"},"https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"to-csv"},"To CSV"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class fseval.config.callbacks.ToCSVCallback(\n    dir: str=MISSING,\n    mode: str="a",\n)\n')),(0,l.kt)("p",null,"CSV support for fseval. Uploads general information on the experiment to a ",(0,l.kt)("inlineCode",{parentName:"p"},"experiments")," table and provides a hook for uploading custom tables."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dir")," : str"),(0,l.kt)("td",{parentName:"tr",align:null},"The directory to save all CSV files to. For example, in this directory a file ",(0,l.kt)("inlineCode",{parentName:"td"},"experiments.csv")," will be created, containing the config of all experiments that were run.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode")," : str"),(0,l.kt)("td",{parentName:"tr",align:null},'Whether to overwrite or append. Use "a" for appending and "w" for overwriting.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"to-weights-and-biases"},"To Weights and Biases"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class fseval.config.callbacks.ToWandbCallback(\n    log_metrics: bool=True,\n    wandb_init_kwargs: Dict[str, Any]=field(default_factory=lambda: {}),\n)\n")),(0,l.kt)("p",null,"Support for exporting the job config and result tables to Weights and Biases."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"log_metrics")," : bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to log metrics. In the case of a resumation run, a user might probably not want to log metrics, but just update the tables instead.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wandb_init_kwargs")," : Dict","[str, Any]"),(0,l.kt)("td",{parentName:"tr",align:null},"Any additional settings to be passed to ",(0,l.kt)("inlineCode",{parentName:"td"},"wandb.init()"),". See the function signature for details; ",(0,l.kt)("a",{parentName:"td",href:"https://docs.wandb.ai/ref/python/init"},"https://docs.wandb.ai/ref/python/init"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"\ufe0f-custom-callbacks"},"\u2699\ufe0f Custom Callbacks"),(0,l.kt)("p",null,"..."))}m.isMDXComponent=!0}}]);