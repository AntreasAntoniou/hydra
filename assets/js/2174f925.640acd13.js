"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5421],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return m},MDXProvider:function(){return p},mdx:function(){return h},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=a.createContext({}),d=function(e){return function(n){var t=s(n.components);return a.createElement(e,o({},n,{components:t}))}},s=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(t),p=i,f=d["".concat(r,".").concat(p)]||d[p]||u[p]||o;return t?a.createElement(f,l(l({ref:n},m),{},{components:t})):a.createElement(f,l({ref:n},m))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return c},T:function(){return m}});var a=t(87462),i=t(67294),o=t(39960),r=t(52263),l=t(80907);function c(e){return i.createElement(o.default,(0,a.Z)({},e,{to:(n=e.to,c=(0,l.useActiveVersion)(),(0,r.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==c?void 0:c.name)?t:"current"]+n),target:"_blank"}));var n,t,c}function m(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return i.createElement(c,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},20514:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=t(93899),l=["components"],c={id:"compose_api",title:"Compose API",sidebar_label:"Compose API"},m=void 0,d={unversionedId:"advanced/compose_api",id:"version-1.1/advanced/compose_api",title:"Compose API",description:"The compose API can compose a config similarly to @hydra.main() anywhere in the code.",source:"@site/versioned_docs/version-1.1/advanced/compose_api.md",sourceDirName:"advanced",slug:"/advanced/compose_api",permalink:"/docs/advanced/compose_api",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/compose_api.md",tags:[],version:"1.1",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1652375133,formattedLastUpdatedAt:"5/12/2022",frontMatter:{id:"compose_api",title:"Compose API",sidebar_label:"Compose API"},sidebar:"version-1.1/docs",previous:{title:"Structured Configs example",permalink:"/docs/advanced/instantiate_objects/structured_config"},next:{title:"Config Search Path",permalink:"/docs/advanced/search_path"}},s=[{value:"When to use the Compose API",id:"when-to-use-the-compose-api",children:[],level:3},{value:"Initialization methods",id:"initialization-methods",children:[],level:3},{value:"Code example",id:"code-example",children:[],level:3},{value:"API Documentation",id:"api-documentation",children:[],level:3}],p={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The compose API can compose a config similarly to ",(0,o.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," anywhere in the code.",(0,o.mdx)("br",{parentName:"p"}),"\n","Prior to calling compose(), you have to initialize Hydra: This can be done by using the standard ",(0,o.mdx)("inlineCode",{parentName:"p"},"@hydra.main()"),"\nor by calling one of the initialization methods listed below."),(0,o.mdx)("h3",{id:"when-to-use-the-compose-api"},"When to use the Compose API"),(0,o.mdx)("p",null,"The Compose API is useful when ",(0,o.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," is not applicable.\nFor example:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Inside a Jupyter notebook (",(0,o.mdx)("a",{parentName:"li",href:"/docs/advanced/jupyter_notebooks"},"Example"),")"),(0,o.mdx)("li",{parentName:"ul"},"Inside a unit test (",(0,o.mdx)("a",{parentName:"li",href:"/docs/advanced/unit_testing"},"Example"),")"),(0,o.mdx)("li",{parentName:"ul"},"In parts of your application that does not have access to the command line (",(0,o.mdx)(r.Z,{to:"examples/advanced/ad_hoc_composition",mdxType:"GithubLink"},"Example"),")."),(0,o.mdx)("li",{parentName:"ul"},"To compose multiple configuration objects (",(0,o.mdx)(r.Z,{to:"examples/advanced/ray_example/ray_compose_example.py",mdxType:"GithubLink"},"Example with Ray"),").")),(0,o.mdx)("div",{class:"alert alert--info",role:"alert"},"Please avoid using the Compose API in cases where ",(0,o.mdx)("b",null,"@hydra.main()")," can be used. Doing so forfeits many of the benefits of Hydra (e.g., Tab completion, Multirun, Working directory management, Logging management and more)"),(0,o.mdx)("h3",{id:"initialization-methods"},"Initialization methods"),(0,o.mdx)("p",null,"There are 3 initialization methods:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"initialize()"),": Initialize with a config path relative to the caller"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"initialize_config_module()")," : Initialize with config_module (absolute)"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"initialize_config_dir()")," : Initialize with a config_dir on the file system (absolute)")),(0,o.mdx)("p",null,"All 3 can be used as methods or contexts.\nWhen used as methods, they are initializing Hydra globally and should only be called once.\nWhen used as contexts, they are initializing Hydra within the context can be used multiple times."),(0,o.mdx)("h3",{id:"code-example"},"Code example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'from hydra import compose, initialize\nfrom omegaconf import OmegaConf\n\nif __name__ == "__main__":\n    # context initialization\n    with initialize(config_path="conf", job_name="test_app"):\n        cfg = compose(config_name="config", overrides=["db=mysql", "db.user=me"])\n        print(OmegaConf.to_yaml(cfg))\n\n    # global initialization\n    initialize(config_path="conf", job_name="test_app")\n    cfg = compose(config_name="config", overrides=["db=mysql", "db.user=me"])\n    print(OmegaConf.to_yaml(cfg))\n')),(0,o.mdx)("h3",{id:"api-documentation"},"API Documentation"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Compose API"',title:'"Compose','API"':!0},'def compose(\n    config_name: Optional[str] = None,\n    overrides: List[str] = [],\n    return_hydra_config: bool = False,\n) -> DictConfig:\n    """\n    :param config_name: the name of the config\n           (usually the file name without the .yaml extension)\n    :param overrides: list of overrides for config file\n    :param return_hydra_config: True to return the hydra config node in the result\n    :return: the composed config\n    """\n')),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Relative initialization"',title:'"Relative','initialization"':!0},'def initialize(\n    config_path: Optional[str] = None,\n    job_name: Optional[str] = "app",\n    caller_stack_depth: int = 1,\n) -> None:\n    """\n    Initializes Hydra and add the config_path to the config search path.\n    config_path is relative to the parent of the caller.\n    Hydra detects the caller type automatically at runtime.\n\n    Supported callers:\n    - Python scripts\n    - Python modules\n    - Unit tests\n    - Jupyter notebooks.\n    :param config_path: path relative to the parent of the caller\n    :param job_name: the value for hydra.job.name (By default it is automatically detected based on the caller)\n    :param caller_stack_depth: stack depth of the caller, defaults to 1 (direct caller).\n    """\n')),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Initialzing with config module"',title:'"Initialzing',with:!0,config:!0,'module"':!0},'def initialize_config_module(config_module: str, job_name: str = "app") -> None:\n    """\n    Initializes Hydra and add the config_module to the config search path.\n    The config module must be importable (an __init__.py must exist at its top level)\n    :param config_module: absolute module name, for example "foo.bar.conf".\n    :param job_name: the value for hydra.job.name (default is \'app\')\n    """\n')),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Initialzing with config directory"',title:'"Initialzing',with:!0,config:!0,'directory"':!0},'def initialize_config_dir(config_dir: str, job_name: str = "app") -> None:\n    """\n    Initializes Hydra and add an absolute config dir to the to the config search path.\n    The config_dir is always a path on the file system and is must be an absolute path.\n    Relative paths will result in an error.\n    :param config_dir: absolute file system path\n    :param job_name: the value for hydra.job.name (default is \'app\')\n    """\n')))}u.isMDXComponent=!0}}]);