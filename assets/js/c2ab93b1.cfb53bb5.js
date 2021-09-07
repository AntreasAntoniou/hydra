(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8403],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4355:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],l={id:"terminology",title:"Terminology"},p=void 0,c={unversionedId:"terminology",id:"version-1.0/terminology",isDocsHomePage:!1,title:"Terminology",description:"Overview",source:"@site/versioned_docs/version-1.0/terminology.md",sourceDirName:".",slug:"/terminology",permalink:"/docs/1.0/terminology",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/terminology.md",version:"1.0",lastUpdatedBy:"Eli Simhayev",lastUpdatedAt:1631034118,formattedLastUpdatedAt:"9/7/2021",frontMatter:{id:"terminology",title:"Terminology"},sidebar:"version-1.0/docs",previous:{title:"Getting started",permalink:"/docs/1.0/intro"},next:{title:"Tutorials intro",permalink:"/docs/1.0/tutorials/intro"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Input Configs",id:"input-configs",children:[{value:"Primary Config",id:"primary-config",children:[]},{value:"Structured Config",id:"structured-config",children:[]},{value:"Defaults List",id:"defaults-list",children:[]},{value:"Config Group",id:"config-group",children:[]},{value:"Config Group Option",id:"config-group-option",children:[]},{value:"Config Node",id:"config-node",children:[]},{value:"Package",id:"package",children:[]},{value:"Package directive",id:"package-directive",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Output Config Object",id:"output-config-object",children:[]},{value:"Misc",id:"misc",children:[{value:"Config Search Path",id:"config-search-path",children:[]},{value:"Plugins",id:"plugins",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This page describes some of the common concepts in Hydra.\nMost of the concepts are described in much more details throughout the documentation."),(0,r.kt)("h2",{id:"input-configs"},"Input Configs"),(0,r.kt)("p",null,"Input configs are used to construct the config object used by the application.",(0,r.kt)("br",{parentName:"p"}),"\n","Supported input configs are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Config Files (",(0,r.kt)("a",{parentName:"li",href:"https://yaml.org/"},"YAML")," files)"),(0,r.kt)("li",{parentName:"ul"},"Command line arguments"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#structured-config"},"Structured Configs")," (Python ",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/dataclasses.html"},"@dataclasses"),")")),(0,r.kt)("h3",{id:"primary-config"},"Primary Config"),(0,r.kt)("p",null,"The input config named in ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/your_first_app/simple_cli"},(0,r.kt)("inlineCode",{parentName:"a"},"@hydra.main()"))," or in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0/experimental/compose_api"},(0,r.kt)("inlineCode",{parentName:"a"},"Compose API")),".",(0,r.kt)("br",{parentName:"p"}),"\n","The Primary Config is the only config that is allowed to have a ",(0,r.kt)("a",{parentName:"p",href:"#defaults-list"},"Defaults List")),(0,r.kt)("h3",{id:"structured-config"},"Structured Config"),(0,r.kt)("p",null,"A @dataclass or an instance of a @dataclass that is used to construct a config. These enable both runtime and static type checking."),(0,r.kt)("p",null,"There are two primary patterns for using Structured configs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As an ",(0,r.kt)("a",{parentName:"li",href:"#input-configs"},"Input Config"),"."),(0,r.kt)("li",{parentName:"ul"},"As a schema validating Config Files and command line arguments.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example:"',title:'"Example:"'},"@dataclass\nclass User:\n  name: str = MISSING\n  age: int = MISSING\n")),(0,r.kt)("h3",{id:"defaults-list"},"Defaults List"),(0,r.kt)("p",null,"A list in the ",(0,r.kt)("a",{parentName:"p",href:"#primary-config"},"Primary Config")," that determines how to build the final ",(0,r.kt)("a",{parentName:"p",href:"#output-config-object"},"Config Object"),".\nThe list is typically composed of ",(0,r.kt)("a",{parentName:"p",href:"#config-group-option"},"Config Group Options"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example: config.yaml"',title:'"Example:','config.yaml"':!0},"defaults:\n  - db: mysql\n  - schema: school\n")),(0,r.kt)("h3",{id:"config-group"},"Config Group"),(0,r.kt)("p",null,"A Config Group is a mutually exclusive set of ",(0,r.kt)("a",{parentName:"p",href:"#config-group-option"},"Config Group Options"),".\nConfig Groups can be hierarchical and in that case the path elements are separated by a forward slash ('/')\nregardless of the operating system."),(0,r.kt)("h3",{id:"config-group-option"},"Config Group Option"),(0,r.kt)("p",null,"One of the configs in a Config Group."),(0,r.kt)("h3",{id:"config-node"},"Config Node"),(0,r.kt)("p",null,"A Config Node is either a ",(0,r.kt)("inlineCode",{parentName:"p"},"Value Node")," (a primitive type), or a ",(0,r.kt)("inlineCode",{parentName:"p"},"Container Node"),".  A ",(0,r.kt)("inlineCode",{parentName:"p"},"Container Node")," is a list or dictionary of ",(0,r.kt)("inlineCode",{parentName:"p"},"Value Nodes"),"."),(0,r.kt)("h3",{id:"package"},"Package"),(0,r.kt)("p",null,"A Package is the path of the ",(0,r.kt)("a",{parentName:"p",href:"#config-node"},"Config Node")," in the ",(0,r.kt)("a",{parentName:"p",href:"#output-config-object"},"Config Object"),". "),(0,r.kt)("h3",{id:"package-directive"},"Package directive"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0/advanced/overriding_packages"},"Package Directive")," specifies the root ",(0,r.kt)("a",{parentName:"p",href:"#package"},"Package")," of an ",(0,r.kt)("a",{parentName:"p",href:"#input-configs"},"Config File")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Input config: mi6/agent/james_bond.yaml"',title:'"Input',"config:":!0,'mi6/agent/james_bond.yaml"':!0},"# @package _group_\ncodename: '007'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Resulting config"',title:'"Resulting','config"':!0},"mi6:\n    agent:\n        codename: '007'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#config-group"},"Config Group"),": mi6/agent"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#config-group-option"},"Config Group Option"),": james_bond  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#config-node"},"Container Nodes"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"{codename: '007'}"),", ","\xa0",". . . ","\xa0",",",(0,r.kt)("inlineCode",{parentName:"li"},"{mi6: {agent: {codename: '007'}}}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#config-node"},"Value Node"),": '007'"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#package"},"Packages")," ",(0,r.kt)("inlineCode",{parentName:"li"},"<empty>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mi6"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mi6.agent"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mi6.agent.codename")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#package-directive"},"Package directive")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"@package _group_"),", which expands to ",(0,r.kt)("inlineCode",{parentName:"li"},"mi6.agent"))),(0,r.kt)("h2",{id:"output-config-object"},"Output Config Object"),(0,r.kt)("p",null,"The config for the application. It is a dictionary of ",(0,r.kt)("a",{parentName:"p",href:"#config-node"},"Config Nodes")," generated from the ",(0,r.kt)("a",{parentName:"p",href:"#input-configs"},"Input Configs"),"."),(0,r.kt)("h2",{id:"misc"},"Misc"),(0,r.kt)("h3",{id:"config-search-path"},"Config Search Path"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0/advanced/search_path"},"Config Search Path")," is a list of paths that are searched in order to find configs. It is similar to\nthe Python ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH"},"PYTHONPATH"),"."),(0,r.kt)("h3",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.0/advanced/plugins"},"Plugins")," extend Hydra's capabilities. Some examples are Launcher and Sweeper."))}d.isMDXComponent=!0}}]);