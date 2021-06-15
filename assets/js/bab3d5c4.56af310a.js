(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{270:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),i=(t(0),t(346)),o={id:"ray_example",title:"Ray example",sidebar_label:"Ray example"},d={unversionedId:"advanced/ray_example",id:"version-0.11/advanced/ray_example",isDocsHomePage:!1,title:"Ray example",description:"Ray is a framework for building and running distributed applications.",source:"@site/versioned_docs/version-0.11/advanced/ray_example.md",slug:"/advanced/ray_example",permalink:"/docs/0.11/advanced/ray_example",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/advanced/ray_example.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1623722571,formattedLastUpdatedAt:"6/15/2021",sidebar_label:"Ray example",sidebar:"version-0.11/docs",previous:{title:"Compose API",permalink:"/docs/0.11/advanced/compose_api"},next:{title:"Contributing",permalink:"/docs/0.11/development/contributing"}},p=[],c={toc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/ray-project/ray"},"Ray")," is a framework for building and running distributed applications.\nHydra can be used with Ray to configure Ray itself as well as complex remote calls through the compose API.\nA future plugin will enable launching to Ray clusters directly from the command line."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'import hydra\nfrom hydra.experimental import compose\nimport ray\nimport time\nfrom omegaconf import OmegaConf\n\n@ray.remote\ndef train(overrides, cfg):\n    print(OmegaConf.to_yaml(cfg))\n    time.sleep(5)\n    return overrides, 0.9\n\n\n@hydra.main(config_path="conf/config.yaml")\ndef main(cfg):\n    ray.init(**cfg.ray.init)\n\n    results = []\n    for model in ["alexnet", "resnet"]:\n        for dataset in ["cifar10", "imagenet"]:\n            overrides = [f"dataset={dataset}", f"model={model}"]\n            run_cfg = compose(overrides=overrides)\n            ret = train.remote(overrides, run_cfg)\n            results.append(ret)\n\n    for overrides, score in ray.get(results):\n        print(f"Result from {overrides} : {score}")\n\n\nif __name__ == "__main__":\n    main()\n')),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"(pid=11571) dataset:\n(pid=11571)   name: cifar10\n(pid=11571)   path: /datasets/cifar10\n(pid=11571) model:\n(pid=11571)   num_layers: 7\n(pid=11571)   type: alexnet\n(pid=11571) \n(pid=11572) dataset:\n(pid=11572)   name: imagenet\n(pid=11572)   path: /datasets/imagenet\n(pid=11572) model:\n(pid=11572)   num_layers: 7\n(pid=11572)   type: alexnet\n(pid=11572) \n(pid=11573) dataset:\n(pid=11573)   name: cifar10\n(pid=11573)   path: /datasets/cifar10\n(pid=11573) model:\n(pid=11573)   num_layers: 50\n(pid=11573)   type: resnet\n(pid=11573)   width: 10\n(pid=11573) \n(pid=11574) dataset:\n(pid=11574)   name: imagenet\n(pid=11574)   path: /datasets/imagenet\n(pid=11574) model:\n(pid=11574)   num_layers: 50\n(pid=11574)   type: resnet\n(pid=11574)   width: 10\n(pid=11574) \nResult from ['dataset=cifar10', 'model=alexnet'] : 0.9\nResult from ['dataset=imagenet', 'model=alexnet'] : 0.9\nResult from ['dataset=cifar10', 'model=resnet'] : 0.9\nResult from ['dataset=imagenet', 'model=resnet'] : 0.9\n")))}s.isMDXComponent=!0},346:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},l=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=s(t),u=r,f=l["".concat(o,".").concat(u)]||l[u]||m[u]||i;return t?a.a.createElement(f,d(d({ref:n},c),{},{components:t})):a.a.createElement(f,d({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);