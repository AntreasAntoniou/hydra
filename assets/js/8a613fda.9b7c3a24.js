(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(346)),a=n(353),c={id:"config_groups",title:"Grouping config files"},s={unversionedId:"tutorials/basic/your_first_app/config_groups",id:"tutorials/basic/your_first_app/config_groups",isDocsHomePage:!1,title:"Grouping config files",description:"Suppose you want to benchmark your application on each of PostgreSQL and MySQL. To do this, use config groups.",source:"@site/docs/tutorials/basic/your_first_app/4_config_groups.md",slug:"/tutorials/basic/your_first_app/config_groups",permalink:"/docs/next/tutorials/basic/your_first_app/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/your_first_app/4_config_groups.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1623722571,formattedLastUpdatedAt:"6/15/2021",sidebar:"docs",previous:{title:"Using the config object",permalink:"/docs/next/tutorials/basic/your_first_app/using_config"},next:{title:"Selecting default configs",permalink:"/docs/next/tutorials/basic/your_first_app/defaults"}},u=[{value:"Creating config groups",id:"creating-config-groups",children:[]},{value:"Using config groups",id:"using-config-groups",children:[]},{value:"Advanced topics",id:"advanced-topics",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(a.a,{to:"examples/tutorials/basic/your_first_hydra_app/4_config_groups",mdxType:"ExampleGithubLink"}),Object(i.b)("p",null,"Suppose you want to benchmark your application on each of PostgreSQL and MySQL. To do this, use config groups. "),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"Config Group"))," is a named group with a set of valid options.\nSelecting a non-existent config option generates an error message with the valid options."),Object(i.b)("h3",{id:"creating-config-groups"},"Creating config groups"),Object(i.b)("p",null,"To create a config group, create a directory. e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"db")," to hold a file for each database configuration option.\nSince we are expecting to have multiple config groups, we will proactively move all the configuration files\ninto a ",Object(i.b)("inlineCode",{parentName:"p"},"conf")," directory."),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Directory layout"',title:'"Directory','layout"':!0},"\u251c\u2500 conf\n\u2502  \u2514\u2500 db\n\u2502      \u251c\u2500 mysql.yaml\n\u2502      \u2514\u2500 postgresql.yaml\n\u2514\u2500\u2500 my_app.py\n"))),Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"driver: mysql\nuser: omry\npassword: secret\n\n\n"))),Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/postgresql.yaml"',title:'"db/postgresql.yaml"'},"driver: postgresql\nuser: postgres_user\npassword: drowssap\ntimeout: 10\n\n")))),Object(i.b)("h3",{id:"using-config-groups"},"Using config groups"),Object(i.b)("p",null,"Since we moved all the configs into the ",Object(i.b)("inlineCode",{parentName:"p"},"conf")," directory, we need to tell Hydra where to find them using the ",Object(i.b)("inlineCode",{parentName:"p"},"config_path")," parameter.\n",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"config_path")," is a directory relative to ",Object(i.b)("inlineCode",{parentName:"strong"},"my_app.py")),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py" {1}',title:'"my_app.py"',"{1}":!0},'@hydra.main(config_path="conf")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),Object(i.b)("p",null,"Running ",Object(i.b)("inlineCode",{parentName:"p"},"my_app.py")," without requesting a configuration will print an empty config."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\n{}\n")),Object(i.b)("p",null,"Select an item from a config group with ",Object(i.b)("inlineCode",{parentName:"p"},"+GROUP=OPTION"),", e.g: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:"{2}","{2}":!0},"$ python my_app.py +db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgres_user\n")),Object(i.b)("p",null,"By default, the config group determines where the config content is placed inside the final config object.\nIn Hydra, the path to the config content is referred to as the config ",Object(i.b)("inlineCode",{parentName:"p"},"package"),".\nThe package of ",Object(i.b)("inlineCode",{parentName:"p"},"db/postgresql.yaml")," is ",Object(i.b)("inlineCode",{parentName:"p"},"db"),":"),Object(i.b)("p",null,"Like before, you can still override individual values in the resulting config:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),Object(i.b)("h3",{id:"advanced-topics"},"Advanced topics"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Config content can be relocated via package overrides. See ",Object(i.b)("a",{parentName:"li",href:"/docs/next/advanced/overriding_packages"},"Reference Manual/Packages"),".    "),Object(i.b)("li",{parentName:"ul"},"Multiple options can be selected from the same Config Group by specifying them as a list.",Object(i.b)("br",{parentName:"li"}),"See ",Object(i.b)("a",{parentName:"li",href:"/docs/next/patterns/select_multiple_configs_from_config_group"},"Common Patterns/Selecting multiple configs from a Config Group"),"  ")))}p.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,g=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return n?o.a.createElement(g,c(c({ref:t},u),{},{components:n})):o.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},347:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},348:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(11),a=n(347),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(349),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,p,f=e.isNavLink,d=e.to,g=e.href,b=e.activeClassName,m=e.isActive,v=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,h=void 0===y||y,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,w=Object(r.useContext)(s),_=d||g,D=Object(a.a)(_),N=null==_?void 0:_.replace("pathname://",""),A=void 0!==N?(n=N,h&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,x=Object(r.useRef)(!1),C=f?i.e:i.c,P=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!P&&D&&window.docusaurus.prefetch(A),function(){P&&p&&p.disconnect()}}),[A,P,D]);var V=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,k=!A||!D||V;return A&&D&&!V&&!v&&w.collectLink(A),k?o.a.createElement("a",Object.assign({href:A},_&&!D&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(C,Object.assign({},O,{onMouseEnter:function(){x.current||(window.docusaurus.preload(A),x.current=!0)},innerRef:function(e){var t,n;P&&e&&D&&(t=e,n=function(){window.docusaurus.prefetch(A)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:A||""},f&&{isActive:m,activeClassName:b}))}},349:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(10),o=n(347);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},350:function(e,t,n){try{e.exports=n(351)}catch(o){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),o=n(38),i=n(352);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=r.useLocation().pathname;return i.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getDocVersionSuggestions(n,o)}},352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,i,a=t.getActiveVersion(e,n),c=null==a?void 0:a.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:c,alternateDocVersions:c?(o=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},353:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),o=n(0),i=n.n(o),a=n(348),c=n(10),s=n(350);function u(e){return i.a.createElement(a.a,Object(r.a)({},e,{to:(t=e.to,o=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==o?void 0:o.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,o}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(u,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);