(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{197:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),a=(t(0),t(268)),i={id:"debugging",title:"Debugging",sidebar_label:"Debugging"},c={unversionedId:"tutorial/debugging",id:"version-0.11/tutorial/debugging",isDocsHomePage:!1,title:"Debugging",description:"Hydra provides a few options to improve debuggability.",source:"@site/versioned_docs/version-0.11/tutorial/10_debugging.md",slug:"/tutorial/debugging",permalink:"/docs/0.11/tutorial/debugging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/10_debugging.md",version:"0.11",lastUpdatedBy:"John Knox",lastUpdatedAt:1613500629,sidebar_label:"Debugging",sidebar:"version-0.11/docs",previous:{title:"Logging",permalink:"/docs/0.11/tutorial/logging"},next:{title:"Creating objects",permalink:"/docs/0.11/patterns/objects"}},l=[{value:"Printing the configuration",id:"printing-the-configuration",children:[]},{value:"Hydra verbose debugging",id:"hydra-verbose-debugging",children:[]}],u={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hydra provides a few options to improve debuggability."),Object(a.b)("h3",{id:"printing-the-configuration"},"Printing the configuration"),Object(a.b)("p",null,"Print the config that would be used for a job without actually running it by adding '-c job' or '--cfg job' to your command line:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# A normal run:\n$ python tutorial/objects_example/my_app.py\nMySQL connecting to localhost with user=root and password=1234\n\n# just show the config without running your function:\n$ python tutorial/objects_example/my_app.py -c job\n[2019-09-29 11:09:14,134] -\ndb:\n  class: tutorial.objects_example.my_app.MySQLConnection\n  params:\n    host: localhost\n    password: 1234\n    user: root\n")),Object(a.b)("p",null,"The printed config would be the actual config the job received with the rest of the command line arguments:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python tutorial/objects_example/my_app.py db=postgresql db.params.database=tutorial2 --cfg job\n[2019-09-29 11:14:55,977] -\ndb:\n  class: tutorial.objects_example.my_app.PostgreSQLConnection\n  params:\n    database: tutorial2\n    host: localhost\n    password: 1234\n    user: root\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"--cfg")," option takes one argument indicating which part of the config to print:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"job")," : Your config "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hydra")," : Hydra's config"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"all")," : The full config, which is a union of ",Object(a.b)("inlineCode",{parentName:"li"},"job")," and ",Object(a.b)("inlineCode",{parentName:"li"},"hydra"),".")),Object(a.b)("h3",{id:"hydra-verbose-debugging"},"Hydra verbose debugging"),Object(a.b)("p",null,"Hydra prints some very useful information in ",Object(a.b)("inlineCode",{parentName:"p"},"DEBUG")," log level.\nThis includes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Installed plugins : What Hydra plugins are installed in the environment "),Object(a.b)("li",{parentName:"ul"},"Config search path : The configuration search path"),Object(a.b)("li",{parentName:"ul"},"Composition trace : Which config files were used to compose your configuration, at what order and where did they came from.")),Object(a.b)("p",null,"This is often used with ",Object(a.b)("inlineCode",{parentName:"p"},"-c")," to just see the config without running the application.\nExample output:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py hydra.verbose=hydra --cfg job\n[2019-09-29 13:35:46,780] - Installed Hydra Plugins\n[2019-09-29 13:35:46,780] - ***********************\n[2019-09-29 13:35:46,780] -     SearchPathPlugin:\n[2019-09-29 13:35:46,780] -     -----------------\n[2019-09-29 13:35:46,781] -     Sweeper:\n[2019-09-29 13:35:46,781] -     --------\n[2019-09-29 13:35:46,782] -             BasicSweeper\n[2019-09-29 13:35:46,782] -     Launcher:\n[2019-09-29 13:35:46,782] -     ---------\n[2019-09-29 13:35:46,783] -             BasicLauncher\n[2019-09-29 13:35:46,783] -\n[2019-09-29 13:35:46,783] - Hydra config search path\n[2019-09-29 13:35:46,783] - ************************\n[2019-09-29 13:35:46,783] - | Provider | Search path                           |\n[2019-09-29 13:35:46,783] - ----------------------------------------------------\n[2019-09-29 13:35:46,783] - | hydra  | pkg://hydra.conf                        |\n[2019-09-29 13:35:46,783] - | main   | /Users/omry/dev/hydra/tutorial/logging  |\n[2019-09-29 13:35:46,783] -\n[2019-09-29 13:35:46,783] - Composition trace\n[2019-09-29 13:35:46,783] - *****************\n[2019-09-29 13:35:46,783] - | Provider | Search path     | File      |\n...\n")))}p.isMDXComponent=!0},268:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,g=b["".concat(i,".").concat(d)]||b[d]||s[d]||a;return t?o.a.createElement(g,c(c({ref:n},u),{},{components:t})):o.a.createElement(g,c({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);