(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86386d9c"],{"057f":function(t,e,n){var i=n("fc6a"),r=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):r(i(t))}},"05e9":function(t,e,n){},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),r=n("825a"),o=n("d039"),a=n("ad6d"),s="toString",c=RegExp.prototype,f=c[s],u=o((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=s;(u||l)&&i(RegExp.prototype,s,(function(){var t=r(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"2e8e":function(t,e,n){"use strict";var i=n("ed1a"),r=n.n(i);r.a},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,r=n("69f3"),o=n("7dd0"),a="String Iterator",s=r.set,c=r.getterFor(a);o(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=i(n,r),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var i=n("0366"),r=n("7b0b"),o=n("9bdd"),a=n("e95a"),s=n("50c4"),c=n("8418"),f=n("35a1");t.exports=function(t){var e,n,u,l,d,p,v=r(t),g="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,b=void 0!==h,y=f(v),S=0;if(b&&(h=i(h,m>2?arguments[2]:void 0,2)),void 0==y||g==Array&&a(y))for(e=s(v.length),n=new g(e);e>S;S++)p=b?h(v[S],S):v[S],c(n,S,p);else for(l=y.call(v),d=l.next,n=new g;!(u=d.call(l)).done;S++)p=b?o(l,h,[u.value,S],!0):u.value,c(n,S,p);return n.length=S,n}},5161:function(t,e,n){"use strict";var i=n("bfbd"),r=n.n(i);r.a},6547:function(t,e,n){var i=n("a691"),r=n("1d80"),o=function(t){return function(e,n){var o,a,s=String(r(e)),c=i(n),f=s.length;return c<0||c>=f?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===f||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"746f":function(t,e,n){var i=n("428f"),r=n("5135"),o=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||a(e,t,{value:o.f(t)})}},"7ab9":function(t,e,n){},"8a7c":function(t,e,n){"use strict";var i=n("7ab9"),r=n.n(i);r.a},"99af":function(t,e,n){"use strict";var i=n("23e7"),r=n("d039"),o=n("e8b5"),a=n("861d"),s=n("7b0b"),c=n("50c4"),f=n("8418"),u=n("65f0"),l=n("1dde"),d=n("b622"),p=n("2d00"),v=d("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",h=p>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=l("concat"),y=function(t){if(!a(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)},S=!h||!b;i({target:"Array",proto:!0,forced:S},{concat:function(t){var e,n,i,r,o,a=s(this),l=u(a,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(o=-1===e?a:arguments[e],y(o)){if(r=c(o.length),d+r>g)throw TypeError(m);for(n=0;n<r;n++,d++)n in o&&f(l,d,o[n])}else{if(d>=g)throw TypeError(m);f(l,d++,o)}return l.length=d,l}})},"9f4f":function(t,e,n){"use strict";var i=n("f47f"),r=n.n(i);r.a},a4d3:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),f=n("fdbf"),u=n("d039"),l=n("5135"),d=n("e8b5"),p=n("861d"),v=n("825a"),g=n("7b0b"),m=n("fc6a"),h=n("c04e"),b=n("5c6c"),y=n("7c73"),S=n("df75"),_=n("241c"),L=n("057f"),w=n("7418"),O=n("06cf"),x=n("9bf2"),C=n("d1e7"),j=n("9112"),A=n("6eeb"),T=n("5692"),E=n("f772"),P=n("d012"),M=n("90e3"),k=n("b622"),N=n("e538"),$=n("746f"),F=n("d44e"),R=n("69f3"),D=n("b727").forEach,G=E("hidden"),H="Symbol",I="prototype",B=k("toPrimitive"),V=R.set,U=R.getterFor(H),J=Object[I],q=r.Symbol,z=o("JSON","stringify"),Q=O.f,W=x.f,K=L.f,X=C.f,Y=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),nt=T("wks"),it=r.QObject,rt=!it||!it[I]||!it[I].findChild,ot=s&&u((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=Q(J,e);i&&delete J[e],W(t,e,n),i&&t!==J&&W(J,e,i)}:W,at=function(t,e){var n=Y[t]=y(q[I]);return V(n,{type:H,tag:t,description:e}),s||(n.description=e),n},st=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ct=function(t,e,n){t===J&&ct(Z,e,n),v(t);var i=h(e,!0);return v(n),l(Y,i)?(n.enumerable?(l(t,G)&&t[G][i]&&(t[G][i]=!1),n=y(n,{enumerable:b(0,!1)})):(l(t,G)||W(t,G,b(1,{})),t[G][i]=!0),ot(t,i,n)):W(t,i,n)},ft=function(t,e){v(t);var n=m(e),i=S(n).concat(vt(n));return D(i,(function(e){s&&!lt.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?y(t):ft(y(t),e)},lt=function(t){var e=h(t,!0),n=X.call(this,e);return!(this===J&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,G)&&this[G][e])||n)},dt=function(t,e){var n=m(t),i=h(e,!0);if(n!==J||!l(Y,i)||l(Z,i)){var r=Q(n,i);return!r||!l(Y,i)||l(n,G)&&n[G][i]||(r.enumerable=!0),r}},pt=function(t){var e=K(m(t)),n=[];return D(e,(function(t){l(Y,t)||l(P,t)||n.push(t)})),n},vt=function(t){var e=t===J,n=K(e?Z:m(t)),i=[];return D(n,(function(t){!l(Y,t)||e&&!l(J,t)||i.push(Y[t])})),i};if(c||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=M(t),n=function(t){this===J&&n.call(Z,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),ot(this,e,b(1,t))};return s&&rt&&ot(J,e,{configurable:!0,set:n}),at(e,t)},A(q[I],"toString",(function(){return U(this).tag})),A(q,"withoutSetter",(function(t){return at(M(t),t)})),C.f=lt,x.f=ct,O.f=dt,_.f=L.f=pt,w.f=vt,N.f=function(t){return at(k(t),t)},s&&(W(q[I],"description",{configurable:!0,get:function(){return U(this).description}}),a||A(J,"propertyIsEnumerable",lt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),D(S(nt),(function(t){$(t)})),i({target:H,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:ft,getOwnPropertyDescriptor:dt}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),i({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(g(t))}}),z){var gt=!c||u((function(){var t=q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));i({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var i,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(i=e,(p(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!st(e))return e}),r[1]=e,z.apply(null,r)}})}q[I][B]||j(q[I],B,q[I].valueOf),F(q,H),P[G]=!0},a630:function(t,e,n){var i=n("23e7"),r=n("4df4"),o=n("1c7e"),a=!o((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:a},{from:r})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},bfbd:function(t,e,n){},d28b:function(t,e,n){var i=n("746f");i("iterator")},dc1b:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homePage-wapper"},[n("van-pull-refresh",{attrs:{"success-text":"刷新成功"},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("head-nav"),n("home-food-list"),n("home-store-list")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-nav-bar",{staticClass:"headBar-wapper",attrs:{title:t.userLoaction},scopedSlots:t._u([{key:"left",fn:function(){return[n("van-icon",{attrs:{name:"search",size:"18"}})]},proxy:!0},{key:"right",fn:function(){return[n("span",[t._v("登陆")]),n("span",{staticClass:"login-flag"},[t._v("|")]),n("span",[t._v("注册")])]},proxy:!0}])})},a=[],s=(n("b0c0"),n("8daa")),c=n("99f7"),f={data:function(){return{userLoaction:"定位中"}},methods:{getLoaction:function(){var t=this,e=new BMap.Geolocation,n={flag:!1,point:{lng:116.483038,lat:39.990633}};e.getCurrentPosition((function(e){this.getStatus()==BMAP_STATUS_SUCCESS?(n={flag:!0,point:{lng:e.point.lng,lat:e.point.lat}},Object(s["d"])(n.point.lat+","+n.point.lng).then((function(e){0==e.data.status&&Toast("获取位置失败,请检查"),t.userLoaction=e.data.name}))):Object(s["d"])(n.lat,n.lng)}),{enableHighAccuracy:!0})}},created:function(){var t=this;this.getLoaction(),c["a"].$on("my-refresh",(function(){t.userLoaction="正在重新定位",t.getLoaction()}))}},u=f,l=(n("5161"),n("2877")),d=Object(l["a"])(u,o,a,!1,null,"00217e36",null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-swipe",{staticClass:"my-swipe",attrs:{loop:!1}},t._l(t.foodTypeList,(function(t,e){return n("van-swipe-item",{key:e},[n("home-grid",{attrs:{dataList:t}})],1)})),1)},g=[],m=(n("fb6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-grid",{staticClass:"grid-wapper",attrs:{"icon-size":50,border:!1,square:""}},t._l(t.dataList,(function(e){return n("van-grid-item",{key:e.id,attrs:{icon:t.imgSrc+e.image_url,text:e.title}})})),1)}),h=[],b={props:{dataList:{type:Array,default:function(){return[]}}},data:function(){return{imgSrc:"https://fuss10.elemecdn.com"}}},y=b,S=Object(l["a"])(y,m,h,!1,null,null,null),_=S.exports,L={data:function(){return{foodTypeList:[]}},components:{homeGrid:_},created:function(){this.getFoodList();var t=this;c["a"].$on("my-refresh",(function(){t.getFoodList()}))},methods:{getFoodList:function(){var t=this;Object(s["b"])("").then((function(e){0==e.data.status&&Toast("刷新失败,请检查网络"),t.foodTypeList=t.sliceArr(e.data,8)}))},sliceArr:function(t,e){for(var n=[],i=Math.ceil(t.length/e),r=e,o=0;o<i;o++)n.push(t.slice(o*r,e)),e=e+e>t.length?t.length:e+e;return n}}},w=L,O=(n("8a7c"),Object(l["a"])(w,v,g,!1,null,"34b650b2",null)),x=O.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-store-list"},[n("div",{staticClass:"list-title"},[n("van-icon",{attrs:{name:"shop-o"}}),n("span",[t._v("附近商家")])],1),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.storeList,(function(t){return n("van-cell",{key:t.id,staticClass:"store-list-item",attrs:{to:"/detail/"+t.id}},[n("list-item-box",{attrs:{itemObj:t}})],1)})),1)],1)},j=[];n("99af"),n("b680");function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function T(t){if(Array.isArray(t))return A(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function E(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("25f0");function P(t,e){if(t){if("string"===typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(t,e):void 0}}function M(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(t){return T(t)||E(t)||P(t)||M()}var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-list-item"},[n("div",{staticClass:"left-box"},[n("img",{attrs:{src:t.imgSrc+t.itemObj.image_path,alt:""}}),n("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.seleNum,expression:"seleNum!=0"}],staticClass:"count-num"},[t._v(t._s(t.seleNum))])]),n("div",{staticClass:"right-box"},[n("div",{staticClass:"flex-row title-row"},[n("div",[n("span",{staticClass:"brand"},[t._v("品牌")]),n("span",{staticClass:"brand-name"},[t._v(t._s(t.itemObj.name))])]),n("div",t._l(t.itemObj.supports,(function(e){return n("div",{key:e.id,staticClass:"support-icon"},[t._v(t._s(e.icon_name))])})),0)]),n("div",{staticClass:"flex-row serve-row"},[n("div",[n("my-start",{staticClass:"start-box",attrs:{startNum:t.itemObj.rating}}),n("span",{staticClass:"rating"},[t._v(t._s(t.itemObj.rating))]),n("span",{staticClass:"order-sell"},[t._v("月售"+t._s(t.itemObj.recent_order_num)+"单")])],1),n("div",[t.itemObj.delivery_mode?n("span",{staticClass:"delivery-mode"},[t._v(t._s(t.itemObj.delivery_mode.text))]):t._e(),"准"==t.itemObj.supports[1].icon_name?n("span",{staticClass:"support-serve"},[t._v(t._s(t.itemObj.supports[1].name))]):t._e()])]),n("div",{staticClass:"flex-row info-row"},[n("div",[t._v("¥20起送 / "+t._s(t.itemObj.piecewise_agent_fee.tips))]),n("div",{staticClass:"info-distance"},[n("span",[t._v(t._s(t.itemObj.distance)+" /")]),n("span",[t._v(t._s(t.itemObj.order_lead_time))])])])])])},$=[],F=(n("d81d"),n("b5753")),R={props:{itemObj:{type:Object,default:function(){return{}}}},data:function(){return{imgSrc:"https://elm.cangdu.org/img/",seleNum:0}},components:{myStart:F["a"]},created:function(){var t=this,e=0;this.$store.state.goodList.map((function(n){n.restaurant_id==t.itemObj.id&&(e+=n[n.foodsId])})),this.seleNum=e}},D=R,G=(n("ef9d"),Object(l["a"])(D,N,$,!1,null,"20687b7f",null)),H=G.exports,I={components:{listItemBox:H},data:function(){return{storeList:[],loading:!1,finished:!1,offset:0,limit:10}},methods:{sendApi:function(t,e){var n=this;Object(s["g"])({latitude:t,longitude:e,offset:this.offset,limit:this.limit}).then((function(t){n.storeList=[].concat(k(n.storeList),k(t.data)),n.loading=!1,n.offset=n.storeList.length,n.storeList.length>=53&&(n.finished=!0)}))},getData:function(){var t=this,e=new BMap.Geolocation,n={flag:!1,point:{lng:116.483038,lat:39.990633}};e.getCurrentPosition((function(e){this.getStatus()==BMAP_STATUS_SUCCESS?(n={flag:!0,point:{lng:e.point.lng,lat:e.point.lat}},t.sendApi(n.point.lat.toFixed(6),n.point.lng.toFixed(6))):(Toast("获取定位失败,请检查"),t.sendApi(n.lat.toFixed(6),n.lng.toFixed(6)))}),{enableHighAccuracy:!0})},onLoad:function(){this.getData()}},created:function(){var t=this;c["a"].$on("my-refresh",(function(){t.getData()}))}},B=I,V=(n("9f4f"),Object(l["a"])(B,C,j,!1,null,"a08e0c54",null)),U=V.exports,J={data:function(){return{isLoading:!1}},components:{HeadNav:p,HomeFoodList:x,HomeStoreList:U},methods:{onRefresh:function(){var t=this;c["a"].$emit("my-refresh"),setTimeout((function(){t.isLoading=!1}),2e3)}}},q=J,z=(n("2e8e"),Object(l["a"])(q,i,r,!1,null,"77478d1d",null));e["default"]=z.exports},ddb0:function(t,e,n){var i=n("da84"),r=n("fdbc"),o=n("e260"),a=n("9112"),s=n("b622"),c=s("iterator"),f=s("toStringTag"),u=o.values;for(var l in r){var d=i[l],p=d&&d.prototype;if(p){if(p[c]!==u)try{a(p,c,u)}catch(g){p[c]=u}if(p[f]||a(p,f,l),r[l])for(var v in o)if(p[v]!==o[v])try{a(p,v,o[v])}catch(g){p[v]=o[v]}}}},e01a:function(t,e,n){"use strict";var i=n("23e7"),r=n("83ab"),o=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,f=n("e893"),u=o.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(l[e]=!0),e};f(d,u);var p=d.prototype=u.prototype;p.constructor=d;var v=p.toString,g="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=v.call(t);if(a(l,t))return"";var n=g?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var i=n("b622");e.f=i},ed1a:function(t,e,n){},ef9d:function(t,e,n){"use strict";var i=n("05e9"),r=n.n(i);r.a},f47f:function(t,e,n){},fb6a:function(t,e,n){"use strict";var i=n("23e7"),r=n("861d"),o=n("e8b5"),a=n("23cb"),s=n("50c4"),c=n("fc6a"),f=n("8418"),u=n("b622"),l=n("1dde"),d=n("ae40"),p=l("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),g=u("species"),m=[].slice,h=Math.max;i({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var n,i,u,l=c(this),d=s(l.length),p=a(t,d),v=a(void 0===e?d:e,d);if(o(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[g],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(l,p,v);for(i=new(void 0===n?Array:n)(h(v-p,0)),u=0;p<v;p++,u++)p in l&&f(i,u,l[p]);return i.length=u,i}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-86386d9c.bbf9872d.js.map