(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(346)),i={id:"write_protect_config_node",title:"Read-only config"},c={unversionedId:"patterns/write_protect_config_node",id:"version-1.0/patterns/write_protect_config_node",isDocsHomePage:!1,title:"Read-only config",description:"Example application",source:"@site/versioned_docs/version-1.0/patterns/write_protect_config_node.md",slug:"/patterns/write_protect_config_node",permalink:"/docs/1.0/patterns/write_protect_config_node",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/patterns/write_protect_config_node.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1623722571,formattedLastUpdatedAt:"6/15/2021",sidebar:"version-1.0/docs",previous:{title:"Specializing configuration",permalink:"/docs/1.0/patterns/specializing_config"},next:{title:"Overview",permalink:"/docs/1.0/configure_hydra/intro"}},l=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/patterns/write_protect_config_node"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),Object(o.b)("h3",{id:"problem"},"Problem"),Object(o.b)("p",null,"Sometimes you want to prevent a config node from being changed accidentally."),Object(o.b)("h3",{id:"solution"},"Solution"),Object(o.b)("p",null,"Structured Configs can enable it by passing ",Object(o.b)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html#frozen"},"frozen=True")," in the dataclass definition.\nUsing Structured Configs, you can annotate a dataclass as frozen. This is recursive and applies to all child nodes."),Object(o.b)("p",null,"This will prevent modifications via code, command line overrides and config composition."),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="frozen.py" {1}',title:'"frozen.py"',"{1}":!0},'@dataclass(frozen=True)\nclass SerialPort:\n    baud_rate: int = 19200\n    data_bits: int = 8\n    stop_bits: int = 1\n\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=SerialPort)\n\n\n@hydra.main(config_name="config")\ndef my_app(cfg: SerialPort) -> None:\n    print(cfg)\n\n\nif __name__ == "__main__":\n    my_app()\n'))),Object(o.b)("div",{className:"col  col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:'script title="Output"',script:!0,title:'"Output"'},"$ python frozen.py data_bits=10\nError merging override data_bits=10\nCannot change read-only config container\n    full_key: data_bits\n    reference_type=Optional[SerialPort]\n    object_type=SerialPort\n")))),Object(o.b)("div",{class:"alert alert--warning",role:"alert"},Object(o.b)("strong",null,"NOTE"),": A crafty user can find many ways around this. this is just making it harder to change things accidentally."))}p.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);