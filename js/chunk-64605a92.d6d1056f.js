(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64605a92"],{"0cb2":function(e,t,r){var n=r("e330"),a=r("7b0b"),i=Math.floor,o=n("".charAt),c=n("".replace),s=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,d,f){var p=r+e.length,v=n.length,g=l;return void 0!==d&&(d=a(d),g=u),c(f,g,(function(a,c){var u;switch(o(c,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,r);case"'":return s(t,p);case"<":u=d[s(c,1,-1)];break;default:var l=+c;if(0===l)return a;if(l>v){var f=i(l/10);return 0===f?a:f<=v?void 0===n[f-1]?o(c,1):n[f-1]+o(c,1):a}u=n[l-1]}return void 0===u?"":u}))}},"107c":function(e,t,r){var n=r("d039"),a=r("da84"),i=a.RegExp;e.exports=n((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,r){var n=r("da84"),a=r("c65b"),i=r("825a"),o=r("1626"),c=r("c6b6"),s=r("9263"),u=n.TypeError;e.exports=function(e,t){var r=e.exec;if(o(r)){var n=a(r,e,t);return null!==n&&i(n),n}if("RegExp"===c(e))return a(s,e,t);throw u("RegExp#exec called on incompatible receiver")}},3082:function(e,t,r){},"35fe":function(e,t,r){"use strict";r("3082")},5319:function(e,t,r){"use strict";var n=r("2ba4"),a=r("c65b"),i=r("e330"),o=r("d784"),c=r("d039"),s=r("825a"),u=r("1626"),l=r("5926"),d=r("50c4"),f=r("577e"),p=r("1d80"),v=r("8aa5"),g=r("dc4a"),h=r("0cb2"),x=r("14c3"),b=r("b622"),m=b("replace"),y=Math.max,I=Math.min,E=i([].concat),$=i([].push),w=i("".indexOf),k=i("".slice),R=function(e){return void 0===e?e:String(e)},O=function(){return"$0"==="a".replace(/./,"$0")}(),A=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),S=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,r){var i=A?"$":"$0";return[function(e,r){var n=p(this),i=void 0==e?void 0:g(e,m);return i?a(i,e,n,r):a(t,f(n),e,r)},function(e,a){var o=s(this),c=f(e);if("string"==typeof a&&-1===w(a,i)&&-1===w(a,"$<")){var p=r(t,o,c,a);if(p.done)return p.value}var g=u(a);g||(a=f(a));var b=o.global;if(b){var m=o.unicode;o.lastIndex=0}var O=[];while(1){var A=x(o,c);if(null===A)break;if($(O,A),!b)break;var S=f(A[0]);""===S&&(o.lastIndex=v(c,d(o.lastIndex),m))}for(var _="",j=0,D=0;D<O.length;D++){A=O[D];for(var L=f(A[0]),P=y(I(l(A.index),c.length),0),T=[],z=1;z<A.length;z++)$(T,R(A[z]));var M=A.groups;if(g){var U=E([L],T,P,c);void 0!==M&&$(U,M);var q=f(n(a,void 0,U))}else q=h(L,c,P,T,M,a);P>=j&&(_+=k(c,j,P)+q,j=P+L.length)}return _+k(c,j)}]}),!S||!O||A)},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("c65b"),a=r("e330"),i=r("577e"),o=r("ad6d"),c=r("9f7f"),s=r("5692"),u=r("7c73"),l=r("69f3").get,d=r("fce3"),f=r("107c"),p=s("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,g=v,h=a("".charAt),x=a("".indexOf),b=a("".replace),m=a("".slice),y=function(){var e=/a/,t=/b*/g;return n(v,e,"a"),n(v,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),I=c.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],$=y||E||I||d||f;$&&(g=function(e){var t,r,a,c,s,d,f,$=this,w=l($),k=i(e),R=w.raw;if(R)return R.lastIndex=$.lastIndex,t=n(g,R,k),$.lastIndex=R.lastIndex,t;var O=w.groups,A=I&&$.sticky,S=n(o,$),_=$.source,j=0,D=k;if(A&&(S=b(S,"y",""),-1===x(S,"g")&&(S+="g"),D=m(k,$.lastIndex),$.lastIndex>0&&(!$.multiline||$.multiline&&"\n"!==h(k,$.lastIndex-1))&&(_="(?: "+_+")",D=" "+D,j++),r=new RegExp("^(?:"+_+")",S)),E&&(r=new RegExp("^"+_+"$(?!\\s)",S)),y&&(a=$.lastIndex),c=n(v,A?r:$,D),A?c?(c.input=m(c.input,j),c[0]=m(c[0],j),c.index=$.lastIndex,$.lastIndex+=c[0].length):$.lastIndex=0:y&&c&&($.lastIndex=$.global?c.index+c[0].length:a),E&&c&&c.length>1&&n(p,c[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c&&O)for(c.groups=d=u(null),s=0;s<O.length;s++)f=O[s],d[f[0]]=c[f[1]];return c}),e.exports=g},"9ab4":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}Object.create;Object.create},"9f7f":function(e,t,r){var n=r("d039"),a=r("da84"),i=a.RegExp,o=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),c=o||n((function(){return!i("a","y").sticky})),s=o||n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:s,MISSED_STICKY:c,UNSUPPORTED_Y:o}},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("e330"),a=r("6eeb"),i=r("9263"),o=r("d039"),c=r("b622"),s=r("9112"),u=c("species"),l=RegExp.prototype;e.exports=function(e,t,r,d){var f=c(e),p=!o((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),v=p&&!o((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return t=!0,null},r[f](""),!t}));if(!p||!v||r){var g=n(/./[f]),h=t(f,""[e],(function(e,t,r,a,o){var c=n(e),s=t.exec;return s===i||s===l.exec?p&&!o?{done:!0,value:g(t,r,a)}:{done:!0,value:c(r,t,a)}:{done:!1}}));a(String.prototype,e,h[0]),a(l,f,h[1])}d&&s(l[f],"sham",!0)}},dd7b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[e.loading?[r("figure",[r("img",{attrs:{src:"/img/social/"+e.loading+"-color.svg",alt:"Rede social"}}),r("v-skeleton-loader",{attrs:{type:"list-item-avatar-three-line"}})],1)]:[e._m(0),r("footer",[e._v("Entre com uma de suas redes sociais")]),e._l(e.providers,(function(t,n){return r("v-btn",{key:n,class:t,attrs:{fab:""},on:{click:function(r){return e.requestLogin(t)}}},[r("img",{attrs:{src:"/img/social/"+t+".svg",alt:t}})])}))]],2)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",[r("img",{attrs:{src:"/img/icons/android-chrome-192x192.png",alt:"Academinha"}}),r("figcaption",[e._v("Academinha")])])}],i=(r("5319"),r("7ded")),o="firebase",c="9.6.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i["a"].registerVersion(o,c,"app-compat");r("5994"),r("50be");var s=i["a"].initializeApp({apiKey:"AIzaSyAqMD2es1n6hjUbUuEuHLFaWzDPddAFq5c",authDomain:"academinha-beb1f.firebaseapp.com",databaseURL:"https://academinha-beb1f-default-rtdb.firebaseio.com",projectId:"academinha-beb1f",storageBucket:"academinha-beb1f.appspot.com",messagingSenderId:"543263128562",appId:"1:543263128562:web:ecd9f57c8a49a2a59e496b"}),u=r("6a7c"),l={data(){return{loading:null,providers:["google","facebook","microsoft","twitter"]}},mounted(){this.$route.params.provider&&this.executeLogin()},methods:{requestLogin(e){switch(this.$router.push({params:{provider:e}}),e){case"google":e=new u["b"];break;case"facebook":e=new u["a"];break;case"twitter":e=new u["d"];break;case"microsoft":e=new u["c"]("microsoft.com");break}s.auth().signInWithRedirect(e)},executeLogin(){this.loading=this.$route.params.provider,s.auth().setPersistence("none").finally(()=>s.auth().getRedirectResult().then(e=>{if(!e.credential)return this.$router.push("/login"),this.$store.dispatch("openAlert",{text:"Erro ao fazer o login. Tente novamente",color:"error"});let t={name:e.user.providerData[0].displayName,socialId:e.user.providerData[0].uid,provider:e.credential.providerId.replace(".com",""),email:e.user.providerData[0].email};return this.axios.post("/login",t).then(e=>{this.$auth.authenticate(e.data)})}).catch(e=>{console.log(e),this.$store.dispatch("openAlert",{text:"Erro ao fazer o login. Tente novamente",color:"error"})})).finally(()=>{this.loading=null})}}},d=l,f=(r("35fe"),r("2877")),p=r("6544"),v=r.n(p),g=r("8336"),h=r("3129"),x=Object(f["a"])(d,n,a,!1,null,"27d64136",null);t["default"]=x.exports;v()(x,{VBtn:g["a"],VSkeletonLoader:h["a"]})},fce3:function(e,t,r){var n=r("d039"),a=r("da84"),i=a.RegExp;e.exports=n((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);