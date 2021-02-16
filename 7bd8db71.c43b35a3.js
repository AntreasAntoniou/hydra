(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(268)),o=n(272),c=n(271),l={id:"intro",title:"Getting started",sidebar_label:"Getting started"},s={unversionedId:"intro",id:"version-1.0/intro",isDocsHomePage:!1,title:"Getting started",description:"Introduction",source:"@site/versioned_docs/version-1.0/intro.md",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/intro.md",version:"1.0",lastUpdatedBy:"John Knox",lastUpdatedAt:1613500629,sidebar_label:"Getting started",sidebar:"version-1.0/docs",next:{title:"Terminology",permalink:"/docs/terminology"}},b=[{value:"Introduction",id:"introduction",children:[{value:"Key features:",id:"key-features",children:[]}]},{value:"Versions",id:"versions",children:[]},{value:"Quick start guide",id:"quick-start-guide",children:[{value:"Installation",id:"installation",children:[]},{value:"Basic example",id:"basic-example",children:[]},{value:"Composition example",id:"composition-example",children:[]},{value:"Multirun",id:"multirun",children:[]}]},{value:"Other stuff",id:"other-stuff",children:[{value:"Community",id:"community",children:[]},{value:"Citing Hydra",id:"citing-hydra",children:[]}]}],u={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Hydra is an open-source Python framework that simplifies the development of research and other complex applications.\nThe key feature is the ability to dynamically create a hierarchical configuration by composition and override it through config files and the command line.\nThe name Hydra comes from its ability to run multiple similar jobs - much like a Hydra with multiple heads."),Object(i.b)("h3",{id:"key-features"},"Key features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Hierarchical configuration composable from multiple sources"),Object(i.b)("li",{parentName:"ul"},"Configuration can be specified or overridden from the command line"),Object(i.b)("li",{parentName:"ul"},"Dynamic command line tab completion"),Object(i.b)("li",{parentName:"ul"},"Run your application locally or launch it to run remotely"),Object(i.b)("li",{parentName:"ul"},"Run multiple jobs with different arguments with a single command")),Object(i.b)("h2",{id:"versions"},"Versions"),Object(i.b)("p",null,"Hydra supports Linux, Mac and Windows."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Docs"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Release notes"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Python Version"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u25ba"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0 (Stable)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0 Docs"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/facebookresearch/hydra/releases/tag/hydra-1.0.0rc1"}),"Release notes")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"3.6+"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.11"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(c.a,{to:Object(o.a)("/docs/0.11/intro"),mdxType:"Link"},Object(i.b)("strong",{parentName:"td"},"Switch to 0.11 Docs"))),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/facebookresearch/hydra/releases/tag/0.11.0"}),"Release notes")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.7, 3.5+")))),Object(i.b)("h2",{id:"quick-start-guide"},"Quick start guide"),Object(i.b)("p",null,"This guide will show you some of the most important features of Hydra.\nRead the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tutorials/basic/your_first_app/simple_cli"}),"tutorial")," to gain a deeper understanding."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-core --upgrade\n")),Object(i.b)("h3",{id:"basic-example"},"Basic example"),Object(i.b)("p",null,"Config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"db:\n  driver: mysql\n  user: omry\n  pass: secret\n")),Object(i.b)("p",null,"Application:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'{4-6} title="my_app.py"',"{4-6}":!0,title:'"my_app.py"'}),'import hydra\nfrom omegaconf import DictConfig, OmegaConf\n\n@hydra.main(config_name="config")\ndef my_app(cfg : DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),Object(i.b)("p",null,"You can learn more about OmegaConf ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation"}),"here")," later."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),Object(i.b)("p",null,"You can override values in the loaded config from the command line:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:"{4-5}","{4-5}":!0}),"$ python my_app.py db.user=root db.pass=1234\ndb:\n  driver: mysql\n  user: root\n  pass: 1234\n")),Object(i.b)("h3",{id:"composition-example"},"Composition example"),Object(i.b)("p",null,"You may want to alternate between two different databases. To support this create a ",Object(i.b)("inlineCode",{parentName:"p"},"config group")," named db,\nand place one config file for each alternative inside:\nThe directory structure of our application now looks like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"\u251c\u2500\u2500 db\n\u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2514\u2500\u2500 postgresql.yaml\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 my_app.py\n")),Object(i.b)("p",null,"Here is the new config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - db: mysql\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"defaults")," is a special directive telling Hydra to use db/mysql.yaml when composing the configuration object.\nThe resulting cfg object is a composition of configs from defaults with configs specified in your ",Object(i.b)("inlineCode",{parentName:"p"},"config.yaml"),"."),Object(i.b)("p",null,"You can now choose which database configuration to use from the and override values from the command line: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgre_user\nwebsite:\n  domain: example.com\n")),Object(i.b)("p",null,"You can have as many config groups as you need."),Object(i.b)("h3",{id:"multirun"},"Multirun"),Object(i.b)("p",null,"You can run your function multiple times with different configuration easily with the ",Object(i.b)("inlineCode",{parentName:"p"},"--multirun|-m")," flag."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ python my_app.py --multirun db=mysql,postgresql\n[HYDRA] Sweep output dir : multirun/2020-01-09/01-16-29\n[HYDRA] Launching 2 jobs locally\n[HYDRA]        #0 : db=mysql\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\nwebsite:\n    domain: example.com\n\n[HYDRA]        #1 : db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgre_user\nwebsite:\n    domain: example.com\n")),Object(i.b)("p",null,"There is a whole lot more to Hydra. Read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tutorials/basic/your_first_app/simple_cli"}),"tutorial")," to learn more."),Object(i.b)("h2",{id:"other-stuff"},"Other stuff"),Object(i.b)("h3",{id:"community"},"Community"),Object(i.b)("p",null,"Ask questions in the chat or StackOverflow (Use the tag #fb-hydra):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://hydra-framework.zulipchat.com"}),"Zulip Chat")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/tagged/fb-hydra"}),"StackOverflow"))),Object(i.b)("p",null,"Follow Hydra on Twitter and Facebook:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.facebook.com/Hydra-Framework-109364473802509/"}),"Facebook page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://twitter.com/Hydra_Framework"}),"Twitter"))),Object(i.b)("h3",{id:"citing-hydra"},"Citing Hydra"),Object(i.b)("p",null,"If you use Hydra in your research please use the following BibTeX entry:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"@Misc{Yadan2019Hydra,\n  author =       {Omry Yadan},\n  title =        {Hydra - A framework for elegantly configuring complex applications},\n  howpublished = {Github},\n  year =         {2019},\n  url =          {https://github.com/facebookresearch/hydra}\n}\n")))}p.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},271:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(11),o=n(269),c=n(7),l=Object(a.createContext)({collectLink:function(){}}),s=n(272),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,u,p=e.isNavLink,d=e.to,m=e.href,f=e.activeClassName,O=e.isActive,h=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,y=void 0===j||j,g=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(s.b)().withBaseUrl,w=Object(a.useContext)(l),N=d||m,k=Object(o.a)(N),_=null==N?void 0:N.replace("pathname://",""),x=void 0!==_?(n=_,y&&function(e){return e.startsWith("/")}(n)?v(n):n):void 0,C=Object(a.useRef)(!1),H=p?i.e:i.c,P=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!P&&k&&window.docusaurus.prefetch(x),function(){P&&u&&u.disconnect()}}),[x,P,k]);var T=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,q=!x||!k||T;return x&&k&&!T&&!h&&w.collectLink(x),q?r.a.createElement("a",Object.assign({href:x},N&&!k&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(H,Object.assign({},g,{onMouseEnter:function(){C.current||(window.docusaurus.preload(x),C.current=!0)},innerRef:function(e){var t,n;P&&e&&k&&(t=e,n=function(){window.docusaurus.prefetch(x)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:x||""},p&&{isActive:O,activeClassName:f}))}},272:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(21),r=n(269);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}}}]);