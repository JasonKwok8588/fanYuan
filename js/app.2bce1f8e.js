(function(e){function n(n){for(var o,a,u=n[0],d=n[1],i=n[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);l&&l(n);while(f.length)f.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(o=!1)}o&&(c.splice(n--,1),e=d(d.s=t[0]))}return e}var o={},a={app:0},r={app:0},c=[];function u(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-0cb972a4":"63b5902b","chunk-2d0b6edb":"d506469c","chunk-2d0d7d7c":"e088950e","chunk-2d21060b":"051ded06","chunk-36ec50a1":"52ac08dc","chunk-7dd35fce":"b194b214","chunk-86386d9c":"bbf9872d"}[e]+".js"}function d(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-0cb972a4":1,"chunk-36ec50a1":1,"chunk-7dd35fce":1,"chunk-86386d9c":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-0cb972a4":"5cf64d14","chunk-2d0b6edb":"31d6cfe0","chunk-2d0d7d7c":"31d6cfe0","chunk-2d21060b":"31d6cfe0","chunk-36ec50a1":"1ff2ea7c","chunk-7dd35fce":"0b47663e","chunk-86386d9c":"38af68d4"}[e]+".css",r=d.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===o||s===r))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],s=i.getAttribute("data-href");if(s===o||s===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var o=n&&n.target&&n.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[e],l.parentNode.removeChild(l),t(c)},l.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)n.push(o[2]);else{var c=new Promise((function(n,t){o=r[e]=[n,t]}));n.push(o[2]=c);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.src=u(e);var f=new Error;i=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",f.name="ChunkLoadError",f.type=o,f.request=a,t[1](f)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},d.m=e,d.c=o,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)d.d(t,o,function(n){return e[n]}.bind(null,o));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var l=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],c=t("8ada"),u={components:{TarBar:c["a"]}},d=u,i=(t("7c55"),t("2877")),s=Object(i["a"])(d,a,r,!1,null,null,null),f=s.exports,l=(t("d3b7"),t("8c4f"));o["a"].use(l["a"]);var p=[{path:"/",redirect:"/index"},{path:"/index",component:function(){return t.e("chunk-0cb972a4").then(t.bind(null,"37f9"))},children:[{path:"",component:function(){return Promise.all([t.e("chunk-36ec50a1"),t.e("chunk-86386d9c")]).then(t.bind(null,"dc1b"))}},{path:"search",component:function(){return t.e("chunk-2d0b6edb").then(t.bind(null,"1ef7"))}},{path:"order",component:function(){return t.e("chunk-2d0d7d7c").then(t.bind(null,"7915"))}},{path:"user",component:function(){return t.e("chunk-2d21060b").then(t.bind(null,"b843"))}}]},{path:"/detail/:shopid",component:function(){return Promise.all([t.e("chunk-36ec50a1"),t.e("chunk-7dd35fce")]).then(t.bind(null,"7be8"))}}],h=new l["a"]({routes:p}),b=h,m=(t("d81d"),t("2f62"));o["a"].use(m["a"]);var v=new m["a"].Store({state:{goodList:[]},mutations:{addGoods:function(e,n){var t=!1;e.goodList.map((function(e){e.foodsId==n.foodsId&&e.specFoods._id==n.specFoods._id&&(e[e.foodsId]+=1,t=!0)})),t||(n[n.foodsId]=1,e.goodList.push(n))},cutGoods:function(e,n){e.goodList.map((function(e){e.foodsId==n.foodsId&&e.specFoods._id==n.specFoods._id&&(e[e.foodsId]=e[e.foodsId]<=0?0:e[e.foodsId]-1)}))},clearGoods:function(e,n){var t=[];e.goodList.map((function(e){e.restaurant_id!==n&&t.push(e)})),e.goodList=t}},actions:{addGoodsAction:function(e,n){e.commit("addGoods",n)},cutGoodsAction:function(e,n){e.commit("cutGoods",n)},clearGoodsAction:function(e,n){e.commit("clearGoods",n)}},modules:{}}),g=(t("499a"),t("66b9"),t("b650")),k=(t("537a"),t("ac28")),y=(t("a52c"),t("2ed4")),_=(t("5246"),t("6b41")),w=(t("c3a6"),t("ad06")),x=(t("7844"),t("5596")),O=(t("4b0a"),t("2bb1")),j=(t("3df5"),t("2830")),C=(t("0ec5"),t("21ab")),P=(t("4056"),t("44bf")),E=(t("ab71"),t("58e6")),L=(t("e7e5"),t("d399")),I=(t("2994"),t("2bdd")),S=(t("c194"),t("7744")),A=(t("da3c"),t("0b33")),G=(t("bda7"),t("5e46")),T=(t("570a"),t("1d36")),B=(t("a39e"),t("241e")),F=(t("9cb7"),t("66fd")),N=(t("5f1a"),t("a3e2")),M=(t("0cc8"),t("3104")),$=(t("09d3"),t("2d6d")),q=(t("61ae"),t("d314")),D=(t("f1dc"),t("6e47")),J=(t("e17f"),t("2241")),H=(t("91d5"),t("f0ca"));o["a"].use(g["a"]).use(k["a"]).use(y["a"]).use(_["a"]).use(w["a"]).use(x["a"]).use(O["a"]).use(j["a"]).use(C["a"]).use(P["a"]).use(E["a"]).use(L["a"]).use(I["a"]).use(S["a"]).use(A["a"]).use(G["a"]).use(T["a"]).use(B["a"]).use(F["a"]).use(N["a"]).use(M["a"]).use($["a"]).use(q["a"]).use(D["a"]).use(J["a"]).use(H["a"]),o["a"].config.productionTip=!1,new o["a"]({router:b,store:v,render:function(e){return e(f)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";var o=t("2395"),a=t.n(o);a.a},"8ada":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("van-tabbar",{staticClass:"tarBar",attrs:{route:"","active-colo":"orange"},model:{value:e.active,callback:function(n){e.active=n},expression:"active"}},[t("van-tabbar-item",{staticClass:"iconfont",attrs:{replace:"",to:"/index","icon-prefix":"icon",name:"element",icon:"eleme"}},[e._v("外卖")]),t("van-tabbar-item",{staticClass:"iconfont",attrs:{replace:"",to:"/index/search","icon-prefix":"icon",name:"search",icon:"compass"}},[e._v("搜索")]),t("van-tabbar-item",{staticClass:"iconfont",attrs:{replace:"",to:"/index/order","icon-prefix":"icon",name:"order",icon:"order"}},[e._v("订单")]),t("van-tabbar-item",{staticClass:"iconfont",attrs:{replace:"",to:"/index/user","icon-prefix":"icon",name:"user",icon:"wode"}},[e._v("我的")])],1)},a=[],r={props:{route:!1},data:function(){return{active:"element"}}},c=r,u=(t("c81a"),t("2877")),d=Object(u["a"])(c,o,a,!1,null,"5d6ef91a",null);n["a"]=d.exports},c81a:function(e,n,t){"use strict";var o=t("fbac"),a=t.n(o);a.a},fbac:function(e,n,t){}});
//# sourceMappingURL=app.2bce1f8e.js.map