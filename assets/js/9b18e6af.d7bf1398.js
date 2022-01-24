"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88],{8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),r=a(7294),l=a(2389),o=a(9443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(3616),d=a(6010),u="tabItem_vU9c";function p(e){var t,a,l,o=e.lazy,p=e.block,c=e.defaultValue,m=e.values,g=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=i(),y=v.tabGroupChoices,C=v.setTabGroupChoices,w=(0,r.useState)(N),_=w[0],O=w[1],S=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var T=y[g];null!=T&&T!==_&&h.some((function(e){return e.value===T}))&&O(T)}var x=function(e){var t=e.currentTarget,a=S.indexOf(t),n=h[a].value;n!==_&&(E(t),O(n),null!=g&&C(g,n))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=S.indexOf(e.currentTarget)+1;a=S[n]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;a=S[r]||S[S.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":p},f)},h.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return S.push(e)},onKeyDown:Z,onFocus:x,onClick:x},l,{className:(0,d.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function c(e){var t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},5404:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=(a(6396),a(8215),a(9055),["components"]),i={sidebar_position:7,title:"fseval.config.StorageConfig"},s="StorageConfig",d={unversionedId:"config/StorageConfig",id:"config/StorageConfig",title:"fseval.config.StorageConfig",description:"Allows you to define a storage for loading and saving cached estimators, among other",source:"@site/docs/config/StorageConfig.mdx",sourceDirName:"config",slug:"/config/StorageConfig",permalink:"/fseval/docs/config/StorageConfig",editUrl:"https://github.com/dunnkers/fseval/tree/website/docs/config/StorageConfig.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"fseval.config.StorageConfig"},sidebar:"tutorialSidebar",previous:{title:"fseval.config.EstimatorConfig",permalink:"/fseval/docs/config/EstimatorConfig"},next:{title:"Callbacks",permalink:"/fseval/docs/config/callbacks"}},u=[{value:"Available storages",id:"available-storages",children:[{value:"Local",id:"local",children:[],level:3},{value:"Weights and Biases",id:"weights-and-biases",children:[],level:3},{value:"Mock",id:"mock",children:[],level:3}],level:2}],p={toc:u};function c(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"storageconfig"},"StorageConfig"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class fseval.config.StorageConfig(\n    load_dir: Optional[str]=None,\n    save_dir: Optional[str]=None,\n)\n")),(0,l.kt)("p",null,"Allows you to define a storage for loading and saving cached estimators, among other\nfiles, like the hydra and fseval configuration in YAML."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"load_dir")," : Optional","[str]"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines a path to load files from. Must point to exactly the directory containing the files, i.e. you should not point to a higher-level directory than where the files are. Path can be relative or absolute, but an absolute path is recommended.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"save_dir")," : Optional","[str]"),(0,l.kt)("td",{parentName:"tr",align:null},"The directory to save files to. Can be relative or absolute.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"available-storages"},"Available storages"),(0,l.kt)("h3",{id:"local"},"Local"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class fseval.config.storage.LocalStorageConfig(\n    load_dir: Optional[str]=None, \n    save_dir: Optional[str]=None,\n)\n")),(0,l.kt)("p",null,"Saves files to a local directory."),(0,l.kt)("p",null,"Assuming your rankers and validators ",(0,l.kt)("inlineCode",{parentName:"p"},"save_cache")," is configured to ",(0,l.kt)("inlineCode",{parentName:"p"},"CacheUsage.allow"),", the fitted estimators will be saved in the local hydra directory. That is, they will be saved as ",(0,l.kt)("inlineCode",{parentName:"p"},".pickle")," files, with an appropriate name. In a different run, you can set ",(0,l.kt)("inlineCode",{parentName:"p"},"load_dir")," to this directory to load the fitted estimators again. Example:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"local storage example",src:a(9791).Z}),"\n",(0,l.kt)("img",{alt:"local storage hydra dir example",src:a(4746).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"load_dir")," : str"),(0,l.kt)("td",{parentName:"tr",align:null},"The directory to load files from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"save_dir")," : str"),(0,l.kt)("td",{parentName:"tr",align:null},"The directory to save files to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Use with ",(0,l.kt)("inlineCode",{parentName:"p"},"storage=local"),"."),(0,l.kt)("h3",{id:"weights-and-biases"},"Weights and Biases"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class fseval.config.storage.WandbStorageConfig(\n    load_dir: Optional[str]=None, \n    save_dir: Optional[str]=None, \n    entity: Optional[str]=None, \n    project: Optional[str]=None, \n    run_id: Optional[str]=None, \n    save_policy: Optional[str]="live",\n)\n')),(0,l.kt)("p",null,"Storage for Weights and Biases (wandb), allowing users to save- and restore files to the service."),(0,l.kt)("p",null,"Like local storage, estimator caches are saved, as well as the entire YAML config of the run. Example:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"example of wandb storage files",src:a(6873).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"load_dir")," : Optional","[str]"),(0,l.kt)("td",{parentName:"tr",align:null},"when set, an attempt is made to load from the designated local directory first, before downloading the data off of wandb. Can be used to perform faster loads or prevent being rate-limited on wandb.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"save_dir")," : Optional","[str]"),(0,l.kt)("td",{parentName:"tr",align:null},"when set, uses this directory to save files, instead of the usual wandb run directory, under the ",(0,l.kt)("inlineCode",{parentName:"td"},"files")," subdirectory.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"entity")," : Optional","[str]"),(0,l.kt)("td",{parentName:"tr",align:null},"allows you to recover from a specific entity, instead of using the entity that is set for the 'current' run.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"project")," : Optional","[str]"),(0,l.kt)("td",{parentName:"tr",align:null},"recover from a specific project.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"run_id")," : Optional","[str]"),(0,l.kt)("td",{parentName:"tr",align:null},"recover from a specific run id.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"save_policy")," : str"),(0,l.kt)("td",{parentName:"tr",align:null},"policy for ",(0,l.kt)("inlineCode",{parentName:"td"},"wandb.save"),". Can be 'live', 'now' or 'end'. Determines at which point of the run the file is uploaded. Defaults to \"live\".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Use with ",(0,l.kt)("inlineCode",{parentName:"p"},"storage=wandb"),". Make sure you are logged into the wandb CLI."),(0,l.kt)("h3",{id:"mock"},"Mock"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class fseval.config.storage.MockStorageConfig(\n    load_dir: Optional[str]=None, \n    save_dir: Optional[str]=None,\n)\n")),(0,l.kt)("p",null,"Disables storage."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"load_dir")," : str"),(0,l.kt)("td",{parentName:"tr",align:null},"The directory to load files from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"save_dir")," : str"),(0,l.kt)("td",{parentName:"tr",align:null},"The directory to save files to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Use with ",(0,l.kt)("inlineCode",{parentName:"p"},"storage=mock"),"."))}c.isMDXComponent=!0},9791:function(e,t,a){t.Z=a.p+"assets/images/local-e427734bc487334cabae582fb14af4a9.png"},4746:function(e,t,a){t.Z=a.p+"assets/images/local_hydra_dir-b9128bce7b90f2a42ba471bf7a77351a.png"},6873:function(e,t,a){t.Z=a.p+"assets/images/wandb-d87a183fb6621fb700756e61ab7f66ba.png"}}]);