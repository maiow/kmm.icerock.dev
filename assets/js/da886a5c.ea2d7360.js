(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[257],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),m=i,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9790:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=t(2122),i=t(9756),o=(t(7294),t(3905)),a={},l={unversionedId:"libraries/kotlinx/serialization",id:"libraries/kotlinx/serialization",isDocsHomePage:!1,title:"serialization",description:"- \u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",source:"@site/learning/libraries/kotlinx/serialization.md",sourceDirName:"libraries/kotlinx",slug:"/libraries/kotlinx/serialization",permalink:"/learning/libraries/kotlinx/serialization",editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/learning/libraries/kotlinx/serialization.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"date-time",permalink:"/learning/libraries/kotlinx/date-time"},next:{title:"ktor-client",permalink:"/learning/libraries/ktor/ktor-client"}},c=[{value:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u043c\u043e\u043c\u0435\u043d\u0442\u044b",id:"\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435-\u043c\u043e\u043c\u0435\u043d\u0442\u044b",children:[]}],u={toc:c};function p(e){var r=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/serialization.html"},"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"))),(0,o.kt)("h2",{id:"\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435-\u043c\u043e\u043c\u0435\u043d\u0442\u044b"},"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u043c\u043e\u043c\u0435\u043d\u0442\u044b"),(0,o.kt)("p",null,"\u0421\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u0430\u0435\u0442 \u0441\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0430\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u0439 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430, \u043f\u043e\u043b\u044f, \u043c\u0435\u0442\u043e\u0434\u0430. \u0412 ",(0,o.kt)("inlineCode",{parentName:"p"},"encoder")," \u0435\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\n\u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0430\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u0432 \u044d\u0442\u043e\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0430\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u0438, \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"@SerialInfo")))}p.isMDXComponent=!0}}]);