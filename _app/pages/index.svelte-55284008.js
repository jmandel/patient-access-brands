var Ke=Object.defineProperty,Qe=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var Ee=Object.getOwnPropertySymbols;var Ye=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable;var Ue=(n,e,r)=>e in n?Ke(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,fe=(n,e)=>{for(var r in e||(e={}))Ye.call(e,r)&&Ue(n,r,e[r]);if(Ee)for(var r of Ee(e))Ze.call(e,r)&&Ue(n,r,e[r]);return n},_e=(n,e)=>Qe(n,Xe(e));import{D as xe,S as we,i as ve,s as ge,L as et,t as A,k as T,w as I,l as F,h as O,m as D,x as y,g,y as B,j as ne,n as te,o as b,p as re,q as h,d,B as E,M as Je,N as tt,O as ke,P as rt,e as N,c as P,a as V,b as S,Q as de,J as U,R as ue,T as he,U as be,V as Ie,f as M,W as nt,X as lt,Y as ee,E as Te,Z as W,_ as it,$ as ae,a0 as K,a1 as Q,a2 as ye,a3 as st,a4 as at,a5 as Be,a6 as ot,a7 as De,v as ft,a8 as pe,a9 as ut,K as pt,aa as Ae}from"../chunks/vendor-661259fa.js";const se=xe({id:null});function ct(n){var u,c,m,$,w,q;let e,r,t=(((c=(u=n[0])==null?void 0:u.portalInherit)!=null&&c.name?($=(m=n[1])==null?void 0:m.portal)==null?void 0:$.name:(q=(w=n[0])==null?void 0:w.portal)==null?void 0:q.name)||"TODO: Add portal name, URL, and description")+"",l,a,i,s,o,f,p;return{c(){e=N("div"),r=N("p"),l=A(t),a=T(),i=N("button"),s=A("View data"),o=T(),f=N("button"),p=A("Connect"),this.h()},l(R){e=P(R,"DIV",{style:!0});var z=V(e);r=P(z,"P",{style:!0});var J=V(r);l=O(J,t),J.forEach(d),a=D(z),i=P(z,"BUTTON",{class:!0,kind:!0});var H=V(i);s=O(H,"View data"),H.forEach(d),o=D(z),f=P(z,"BUTTON",{class:!0,kind:!0});var j=V(f);p=O(j,"Connect"),j.forEach(d),z.forEach(d),this.h()},h(){M(r,"font-size",".8rem"),M(r,"margin-top",".5em"),S(i,"class","example svelte-1g6h6zr"),S(i,"kind","primary"),S(f,"class","example svelte-1g6h6zr"),S(f,"kind","primary"),M(e,"margin-left","1em"),M(e,"margin-right","1em"),M(e,"display","flex"),M(e,"align-items","self-end")},m(R,z){g(R,e,z),U(e,r),U(r,l),U(e,a),U(e,i),U(i,s),U(e,o),U(e,f),U(f,p)},p(R,z){var J,H,j,Y,G,Z;z&3&&t!==(t=(((H=(J=R[0])==null?void 0:J.portalInherit)!=null&&H.name?(Y=(j=R[1])==null?void 0:j.portal)==null?void 0:Y.name:(Z=(G=R[0])==null?void 0:G.portal)==null?void 0:Z.name)||"TODO: Add portal name, URL, and description")+"")&&ne(l,t)},d(R){R&&d(e)}}}function mt(n){let e,r;return e=new he({props:{$$slots:{default:[ct]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const a={};l&259&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function $t(n){let e,r,t,l,a=n[0].name+"",i,s,o,f,p,u,c;return f=new ke({props:{noGutter:!0,$$slots:{default:[mt]},$$scope:{ctx:n}}}),u=new rt({props:{style:"cursor: pointer; position: absolute; top: 0%; right: 0%;"}}),u.$on("click",n[4]),{c(){e=N("h3"),r=N("img"),l=T(),i=A(a),s=A(`
    \xA0`),o=T(),I(f.$$.fragment),p=T(),I(u.$$.fragment),this.h()},l(m){e=P(m,"H3",{class:!0});var $=V(e);r=P($,"IMG",{alt:!0,class:!0,src:!0}),l=D($),i=O($,a),s=O($,`
    \xA0`),$.forEach(d),o=D(m),y(f.$$.fragment,m),p=D(m),y(u.$$.fragment,m),this.h()},h(){var m;S(r,"alt","logo"),S(r,"class","logo svelte-1g6h6zr"),de(r.src,t=(m=n[0].logo)!=null?m:"smart-burst.svg")||S(r,"src",t),S(e,"class","name svelte-1g6h6zr")},m(m,$){g(m,e,$),U(e,r),U(e,l),U(e,i),U(e,s),g(m,o,$),B(f,m,$),g(m,p,$),B(u,m,$),c=!0},p(m,$){var q;(!c||$&1&&!de(r.src,t=(q=m[0].logo)!=null?q:"smart-burst.svg"))&&S(r,"src",t),(!c||$&1)&&a!==(a=m[0].name+"")&&ne(i,a);const w={};$&259&&(w.$$scope={dirty:$,ctx:m}),f.$set(w)},i(m){c||(h(f.$$.fragment,m),h(u.$$.fragment,m),c=!0)},o(m){b(f.$$.fragment,m),b(u.$$.fragment,m),c=!1},d(m){m&&d(e),m&&d(o),E(f,m),m&&d(p),E(u,m)}}}function _t(n){let e,r;return e=new be({props:{small:!0,style:"display: flex; align-items: centered; padding-left: 1em; padding-right: 1em; width: 100%; max-width: unset; min-height: 2rem; gap: 1em;",kind:"danger-tertiary",$$slots:{default:[ht]},$$scope:{ctx:n}}}),e.$on("click",n[7]),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const a={};l&256&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function dt(n){let e,r;return e=new be({props:{small:!0,style:"display: flex; align-items: centered; padding-left: 1em; padding-right: 1em; width: 100%; max-width: unset; min-height: 2rem; gap: 1em;",kind:"tertiary",$$slots:{default:[gt]},$$scope:{ctx:n}}}),e.$on("click",n[6]),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const a={};l&256&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function ht(n){let e,r,t,l,a;return e=new Ie({}),{c(){I(e.$$.fragment),r=T(),t=N("div"),l=A("Remove affiliated brand"),this.h()},l(i){y(e.$$.fragment,i),r=D(i),t=P(i,"DIV",{style:!0});var s=V(t);l=O(s,"Remove affiliated brand"),s.forEach(d),this.h()},h(){M(t,"flex-grow","1")},m(i,s){B(e,i,s),g(i,r,s),g(i,t,s),U(t,l),a=!0},i(i){a||(h(e.$$.fragment,i),a=!0)},o(i){b(e.$$.fragment,i),a=!1},d(i){E(e,i),i&&d(r),i&&d(t)}}}function gt(n){let e,r,t,l,a;return e=new nt({}),{c(){I(e.$$.fragment),r=T(),t=N("div"),l=A("Add affiliated brand"),this.h()},l(i){y(e.$$.fragment,i),r=D(i),t=P(i,"DIV",{style:!0});var s=V(t);l=O(s,"Add affiliated brand"),s.forEach(d),this.h()},h(){M(t,"flex-grow","1")},m(i,s){B(e,i,s),g(i,r,s),g(i,t,s),U(t,l),a=!0},i(i){a||(h(e.$$.fragment,i),a=!0)},o(i){b(e.$$.fragment,i),a=!1},d(i){E(e,i),i&&d(r),i&&d(t)}}}function bt(n){var m;let e="",r,t,l,a,i,s,o,f;l=new et({props:{class:"tile",style:`opacity: ${((m=n[2])==null?void 0:m.id)!==null&&n[2].id!==n[0].id?"50":100}%`,$$slots:{default:[$t]},$$scope:{ctx:n}}}),l.$on("click",n[5]);const p=[dt,_t],u=[];function c($,w){return $[0].parentId?1:0}return i=c(n),s=u[i]=p[i](n),{c(){r=A(e),t=T(),I(l.$$.fragment),a=T(),s.c(),o=F()},l($){r=O($,e),t=D($),y(l.$$.fragment,$),a=D($),s.l($),o=F()},m($,w){g($,r,w),g($,t,w),B(l,$,w),g($,a,w),u[i].m($,w),g($,o,w),f=!0},p($,[w]){var z;(!f||w&1)&&e!==(e="")&&ne(r,e);const q={};w&5&&(q.style=`opacity: ${((z=$[2])==null?void 0:z.id)!==null&&$[2].id!==$[0].id?"50":100}%`),w&263&&(q.$$scope={dirty:w,ctx:$}),l.$set(q);let R=i;i=c($),i===R?u[i].p($,w):(te(),b(u[R],1,1,()=>{u[R]=null}),re(),s=u[i],s?s.p($,w):(s=u[i]=p[i]($),s.c()),h(s,1),s.m(o.parentNode,o))},i($){f||(h(l.$$.fragment,$),h(s),f=!0)},o($){b(l.$$.fragment,$),b(s),f=!1},d($){$&&d(r),$&&d(t),E(l,$),$&&d(a),u[i].d($),$&&d(o)}}}function wt(n,e,r){let t;Je(n,se,u=>r(2,t=u));const l=tt();let{brand:a}=e,{parentBrand:i}=e;const s=()=>{ue(se,t={id:a.id},t),console.log("Editing",a.id)},o=()=>{ue(se,t={id:a.id},t),console.log("Editing",a.id)},f=()=>{l("add-affiliated-brand",a)},p=()=>{l("remove-affiliated-brand",a)};return n.$$set=u=>{"brand"in u&&r(0,a=u.brand),"parentBrand"in u&&r(1,i=u.parentBrand)},[a,i,t,l,s,o,f,p]}class vt extends we{constructor(e){super();ve(this,e,wt,bt,ge,{brand:0,parentBrand:1})}}function Oe(n,e,r){const t=n.slice();return t[28]=e[r],t[29]=e,t[30]=r,t}function Ne(n,e,r){const t=n.slice();return t[31]=e[r],t[32]=e,t[30]=r,t}function Pe(n){let e,r;return e=new lt({props:{$$slots:{default:[Pt]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const a={};l[0]&63|l[1]&4&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function kt(n){let e,r,t,l,a,i;function s(f){n[9](f)}let o={autofocus:!0,invalid:n[0].name=="",placeholder:"Associated Physicians of Madison"};return n[0].name!==void 0&&(o.value=n[0].name),l=new ae({props:o}),W.push(()=>K(l,"value",s)),{c(){e=N("div"),r=A("The primary name associated with your brand."),t=T(),I(l.$$.fragment),this.h()},l(f){e=P(f,"DIV",{class:!0});var p=V(e);r=O(p,"The primary name associated with your brand."),p.forEach(d),t=D(f),y(l.$$.fragment,f),this.h()},h(){S(e,"class","bx--form__helper-text")},m(f,p){g(f,e,p),U(e,r),g(f,t,p),B(l,f,p),i=!0},p(f,p){const u={};p[0]&1&&(u.invalid=f[0].name==""),!a&&p[0]&1&&(a=!0,u.value=f[0].name,Q(()=>a=!1)),l.$set(u)},i(f){i||(h(l.$$.fragment,f),i=!0)},o(f){b(l.$$.fragment,f),i=!1},d(f){f&&d(e),f&&d(t),E(l,f)}}}function It(n){var f,p;let e,r,t,l,a,i;function s(u){n[10](u)}let o={invalid:!((p=(f=n[0])==null?void 0:f.website)!=null&&p.startsWith("https://")),placeholder:"https://apmadison.com"};return n[0].website!==void 0&&(o.value=n[0].website),l=new ae({props:o}),W.push(()=>K(l,"value",s)),{c(){e=N("div"),r=A(`The primary website associated with your brand. Note: this is distinct
        from your patient portal.`),t=T(),I(l.$$.fragment),this.h()},l(u){e=P(u,"DIV",{class:!0});var c=V(e);r=O(c,`The primary website associated with your brand. Note: this is distinct
        from your patient portal.`),c.forEach(d),t=D(u),y(l.$$.fragment,u),this.h()},h(){S(e,"class","bx--form__helper-text")},m(u,c){g(u,e,c),U(e,r),g(u,t,c),B(l,u,c),i=!0},p(u,c){var $,w;const m={};c[0]&1&&(m.invalid=!((w=($=u[0])==null?void 0:$.website)!=null&&w.startsWith("https://"))),!a&&c[0]&1&&(a=!0,m.value=u[0].website,Q(()=>a=!1)),l.$set(m)},i(u){i||(h(l.$$.fragment,u),i=!0)},o(u){b(l.$$.fragment,u),i=!1},d(u){u&&d(e),u&&d(t),E(l,u)}}}function Ce(n){let e,r,t,l,a,i,s;function o(c){n[11](c,n[30])}function f(c){n[12](c,n[30])}let p={invalid:n[0].alias[n[30]]=="",style:"width: 100%;",placeholder:"Madison Doctors Group"};n[0].alias[n[30]]!==void 0&&(p.value=n[0].alias[n[30]]),n[3][n[30]]!==void 0&&(p.ref=n[3][n[30]]),r=new ae({props:p}),W.push(()=>K(r,"value",o)),W.push(()=>K(r,"ref",f)),r.$on("keyup",n[13]);function u(){return n[14](n[30])}return i=new Ie({props:{style:"margin-left: .5em; cursor: pointer; min-width: 16px;"}}),i.$on("click",u),{c(){e=N("div"),I(r.$$.fragment),a=T(),I(i.$$.fragment),this.h()},l(c){e=P(c,"DIV",{style:!0});var m=V(e);y(r.$$.fragment,m),a=D(m),y(i.$$.fragment,m),m.forEach(d),this.h()},h(){M(e,"display","flex"),M(e,"align-items","baseline")},m(c,m){g(c,e,m),B(r,e,null),U(e,a),B(i,e,null),s=!0},p(c,m){n=c;const $={};m[0]&1&&($.invalid=n[0].alias[n[30]]==""),!t&&m[0]&1&&(t=!0,$.value=n[0].alias[n[30]],Q(()=>t=!1)),!l&&m[0]&8&&(l=!0,$.ref=n[3][n[30]],Q(()=>l=!1)),r.$set($)},i(c){s||(h(r.$$.fragment,c),h(i.$$.fragment,c),s=!0)},o(c){b(r.$$.fragment,c),b(i.$$.fragment,c),s=!1},d(c){c&&d(e),E(r),E(i)}}}function yt(n){let e;return{c(){e=A("Add alias")},l(r){e=O(r,"Add alias")},m(r,t){g(r,e,t)},d(r){r&&d(e)}}}function Bt(n){var p;let e,r,t,l,a,i,s=((p=n[0])==null?void 0:p.alias)||[],o=[];for(let u=0;u<s.length;u+=1)o[u]=Ce(Ne(n,s,u));const f=u=>b(o[u],1,1,()=>{o[u]=null});return a=new be({props:{small:!0,kind:"ghost",$$slots:{default:[yt]},$$scope:{ctx:n}}}),a.$on("click",n[6]),{c(){e=N("div"),r=A(`An alias associated with your Brand (e.g., a former name or other term
        patients might use to search for your brand)`),t=T();for(let u=0;u<o.length;u+=1)o[u].c();l=T(),I(a.$$.fragment),this.h()},l(u){e=P(u,"DIV",{class:!0});var c=V(e);r=O(c,`An alias associated with your Brand (e.g., a former name or other term
        patients might use to search for your brand)`),c.forEach(d),t=D(u);for(let m=0;m<o.length;m+=1)o[m].l(u);l=D(u),y(a.$$.fragment,u),this.h()},h(){S(e,"class","bx--form__helper-text")},m(u,c){g(u,e,c),U(e,r),g(u,t,c);for(let m=0;m<o.length;m+=1)o[m].m(u,c);g(u,l,c),B(a,u,c),i=!0},p(u,c){var $;if(c[0]&73){s=(($=u[0])==null?void 0:$.alias)||[];let w;for(w=0;w<s.length;w+=1){const q=Ne(u,s,w);o[w]?(o[w].p(q,c),h(o[w],1)):(o[w]=Ce(q),o[w].c(),h(o[w],1),o[w].m(l.parentNode,l))}for(te(),w=s.length;w<o.length;w+=1)f(w);re()}const m={};c[1]&4&&(m.$$scope={dirty:c,ctx:u}),a.$set(m)},i(u){if(!i){for(let c=0;c<s.length;c+=1)h(o[c]);h(a.$$.fragment,u),i=!0}},o(u){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)b(o[c]);b(a.$$.fragment,u),i=!1},d(u){u&&d(e),u&&d(t),ye(o,u),u&&d(l),E(a,u)}}}function Re(n){let e,r;return{c(){e=N("img"),this.h()},l(t){e=P(t,"IMG",{style:!0,alt:!0,src:!0}),this.h()},h(){M(e,"width","1em"),M(e,"height","1em"),S(e,"alt","logo"),de(e.src,r=n[0].logo)||S(e,"src",r)},m(t,l){g(t,e,l)},p(t,l){l[0]&1&&!de(e.src,r=t[0].logo)&&S(e,"src",r)},d(t){t&&d(e)}}}function Et(n){let e,r,t,l=n[0].logo&&Re(n),a={buttonLabel:"Choose logo file",labelDescription:"Square PNG or SVG, 1024x1024 pixels with transparent background preferred",accept:[".png",".svg"],status:"complete"};return r=new st({props:a}),n[15](r),r.$on("change",n[16]),{c(){l&&l.c(),e=T(),I(r.$$.fragment)},l(i){l&&l.l(i),e=D(i),y(r.$$.fragment,i)},m(i,s){l&&l.m(i,s),g(i,e,s),B(r,i,s),t=!0},p(i,s){i[0].logo?l?l.p(i,s):(l=Re(i),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null);const o={};r.$set(o)},i(i){t||(h(r.$$.fragment,i),t=!0)},o(i){b(r.$$.fragment,i),t=!1},d(i){l&&l.d(i),i&&d(e),n[15](null),E(r,i)}}}function Se(n){let e,r,t,l,a,i,s;function o(c){n[17](c,n[28])}function f(c){n[18](c,n[30])}let p={invalid:Object.entries(n[0].locations[n[30]]).length===1,style:"width: 100%;",placeholder:"123 Regent St, Madison, WI 53726"};n[28].text!==void 0&&(p.value=n[28].text),n[4][n[30]]!==void 0&&(p.ref=n[4][n[30]]),r=new ae({props:p}),W.push(()=>K(r,"value",o)),W.push(()=>K(r,"ref",f)),r.$on("keyup",n[19]);function u(){return n[20](n[30])}return i=new Ie({props:{style:"margin-left: .5em; cursor: pointer; min-width: 16px;"}}),i.$on("click",u),{c(){e=N("div"),I(r.$$.fragment),a=T(),I(i.$$.fragment),this.h()},l(c){e=P(c,"DIV",{style:!0});var m=V(e);y(r.$$.fragment,m),a=D(m),y(i.$$.fragment,m),m.forEach(d),this.h()},h(){M(e,"display","flex"),M(e,"align-items","baseline")},m(c,m){g(c,e,m),B(r,e,null),U(e,a),B(i,e,null),s=!0},p(c,m){n=c;const $={};m[0]&1&&($.invalid=Object.entries(n[0].locations[n[30]]).length===1),!t&&m[0]&1&&(t=!0,$.value=n[28].text,Q(()=>t=!1)),!l&&m[0]&16&&(l=!0,$.ref=n[4][n[30]],Q(()=>l=!1)),r.$set($)},i(c){s||(h(r.$$.fragment,c),h(i.$$.fragment,c),s=!0)},o(c){b(r.$$.fragment,c),b(i.$$.fragment,c),s=!1},d(c){c&&d(e),E(r),E(i)}}}function Ut(n){let e;return{c(){e=A("Add location")},l(r){e=O(r,"Add location")},m(r,t){g(r,e,t)},d(r){r&&d(e)}}}function Tt(n){let e,r,t,l,a,i,s=n[0].locations||[],o=[];for(let p=0;p<s.length;p+=1)o[p]=Se(Oe(n,s,p));const f=p=>b(o[p],1,1,()=>{o[p]=null});return a=new be({props:{small:!0,kind:"ghost",$$slots:{default:[Ut]},$$scope:{ctx:n}}}),a.$on("click",n[7]),{c(){e=N("div"),r=A(`A location (street address, city/state, or city/state/zip) associated
        with your Brand`),t=T();for(let p=0;p<o.length;p+=1)o[p].c();l=T(),I(a.$$.fragment),this.h()},l(p){e=P(p,"DIV",{class:!0});var u=V(e);r=O(u,`A location (street address, city/state, or city/state/zip) associated
        with your Brand`),u.forEach(d),t=D(p);for(let c=0;c<o.length;c+=1)o[c].l(p);l=D(p),y(a.$$.fragment,p),this.h()},h(){S(e,"class","bx--form__helper-text")},m(p,u){g(p,e,u),U(e,r),g(p,t,u);for(let c=0;c<o.length;c+=1)o[c].m(p,u);g(p,l,u),B(a,p,u),i=!0},p(p,u){if(u[0]&145){s=p[0].locations||[];let m;for(m=0;m<s.length;m+=1){const $=Oe(p,s,m);o[m]?(o[m].p($,u),h(o[m],1)):(o[m]=Se($),o[m].c(),h(o[m],1),o[m].m(l.parentNode,l))}for(te(),m=s.length;m<o.length;m+=1)f(m);re()}const c={};u[1]&4&&(c.$$scope={dirty:u,ctx:p}),a.$set(c)},i(p){if(!i){for(let u=0;u<s.length;u+=1)h(o[u]);h(a.$$.fragment,p),i=!0}},o(p){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)b(o[u]);b(a.$$.fragment,p),i=!1},d(p){p&&d(e),p&&d(t),ye(o,p),p&&d(l),E(a,p)}}}function Dt(n){let e,r,t;function l(i){n[21](i)}let a={label:"Select categories",items:[{id:"outpatient",text:"Outpatient (clinic, office)"},{id:"hospital",text:"Hospital"},{id:"health-system",text:"Health system"},{id:"lab",text:"Lab"},{id:"pharmacy",text:"Pharmacy"},{id:"insurer",text:"Insurer"},{id:"network",text:"Data Network"},{id:"aggregator",text:"Data Aggregator"}]};return n[0].categories!==void 0&&(a.selectedIds=n[0].categories),e=new at({props:a}),W.push(()=>K(e,"selectedIds",l)),{c(){I(e.$$.fragment)},l(i){y(e.$$.fragment,i)},m(i,s){B(e,i,s),t=!0},p(i,s){const o={};!r&&s[0]&1&&(r=!0,o.selectedIds=i[0].categories,Q(()=>r=!1)),e.$set(o)},i(i){t||(h(e.$$.fragment,i),t=!0)},o(i){b(e.$$.fragment,i),t=!1},d(i){E(e,i)}}}function Ve(n){var f,p;let e,r,t,l=(((p=(f=n[5])==null?void 0:f.portal)==null?void 0:p.website)||"")+"",a,i,s,o;return{c(){e=N("div"),r=N("input"),t=A(`
          Use portal URL from Primary Brand ("`),a=A(l),i=A('")'),this.h()},l(u){e=P(u,"DIV",{});var c=V(e);r=P(c,"INPUT",{type:!0}),t=O(c,`
          Use portal URL from Primary Brand ("`),a=O(c,l),i=O(c,'")'),c.forEach(d),this.h()},h(){S(r,"type","checkbox")},m(u,c){g(u,e,c),U(e,r),r.checked=n[0].portalInherit.website,U(e,t),U(e,a),U(e,i),s||(o=Be(r,"change",n[22]),s=!0)},p(u,c){var m,$;c[0]&1&&(r.checked=u[0].portalInherit.website),c[0]&32&&l!==(l=((($=(m=u[5])==null?void 0:m.portal)==null?void 0:$.website)||"")+"")&&ne(a,l)},d(u){u&&d(e),s=!1,o()}}}function qe(n){var i,s,o;let e,r,t;function l(f){n[23](f)}let a={invalid:!((o=(s=(i=n[0])==null?void 0:i.portal)==null?void 0:s.website)!=null&&o.startsWith("https://")),placeholder:"https://www.chart.myunitypoint.org/"};return n[0].portal.website!==void 0&&(a.value=n[0].portal.website),e=new ae({props:a}),W.push(()=>K(e,"value",l)),{c(){I(e.$$.fragment)},l(f){y(e.$$.fragment,f)},m(f,p){B(e,f,p),t=!0},p(f,p){var c,m,$;const u={};p[0]&1&&(u.invalid=!(($=(m=(c=f[0])==null?void 0:c.portal)==null?void 0:m.website)!=null&&$.startsWith("https://"))),!r&&p[0]&1&&(r=!0,u.value=f[0].portal.website,Q(()=>r=!1)),e.$set(u)},i(f){t||(h(e.$$.fragment,f),t=!0)},o(f){b(e.$$.fragment,f),t=!1},d(f){E(e,f)}}}function At(n){let e,r,t,l,a,i,s=n[1]&&Ve(n),o=(!n[1]||!n[0].portalInherit.website)&&qe(n);return{c(){e=N("div"),r=A("URL of patient portal where records are available (https only)"),t=T(),s&&s.c(),l=T(),o&&o.c(),a=F(),this.h()},l(f){e=P(f,"DIV",{class:!0});var p=V(e);r=O(p,"URL of patient portal where records are available (https only)"),p.forEach(d),t=D(f),s&&s.l(f),l=D(f),o&&o.l(f),a=F(),this.h()},h(){S(e,"class","bx--form__helper-text")},m(f,p){g(f,e,p),U(e,r),g(f,t,p),s&&s.m(f,p),g(f,l,p),o&&o.m(f,p),g(f,a,p),i=!0},p(f,p){f[1]?s?s.p(f,p):(s=Ve(f),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null),!f[1]||!f[0].portalInherit.website?o?(o.p(f,p),p[0]&3&&h(o,1)):(o=qe(f),o.c(),h(o,1),o.m(a.parentNode,a)):o&&(te(),b(o,1,1,()=>{o=null}),re())},i(f){i||(h(o),i=!0)},o(f){b(o),i=!1},d(f){f&&d(e),f&&d(t),s&&s.d(f),f&&d(l),o&&o.d(f),f&&d(a)}}}function ze(n){var f,p;let e,r,t,l=(((p=(f=n[5])==null?void 0:f.portal)==null?void 0:p.name)||"")+"",a,i,s,o;return{c(){e=N("div"),r=N("input"),t=A(` Use
          name from Primary Brand ("`),a=A(l),i=A('")'),this.h()},l(u){e=P(u,"DIV",{});var c=V(e);r=P(c,"INPUT",{type:!0}),t=O(c,` Use
          name from Primary Brand ("`),a=O(c,l),i=O(c,'")'),c.forEach(d),this.h()},h(){S(r,"type","checkbox")},m(u,c){g(u,e,c),U(e,r),r.checked=n[0].portalInherit.name,U(e,t),U(e,a),U(e,i),s||(o=Be(r,"change",n[24]),s=!0)},p(u,c){var m,$;c[0]&1&&(r.checked=u[0].portalInherit.name),c[0]&32&&l!==(l=((($=(m=u[5])==null?void 0:m.portal)==null?void 0:$.name)||"")+"")&&ne(a,l)},d(u){u&&d(e),s=!1,o()}}}function Le(n){let e,r,t;function l(i){n[25](i)}let a={invalid:!1,placeholder:"MyUnityPoint"};return n[0].portal.name!==void 0&&(a.value=n[0].portal.name),e=new ae({props:a}),W.push(()=>K(e,"value",l)),{c(){I(e.$$.fragment)},l(i){y(e.$$.fragment,i)},m(i,s){B(e,i,s),t=!0},p(i,s){const o={};s[0]&1&&(o.invalid=!1),!r&&s[0]&1&&(r=!0,o.value=i[0].portal.name,Q(()=>r=!1)),e.$set(o)},i(i){t||(h(e.$$.fragment,i),t=!0)},o(i){b(e.$$.fragment,i),t=!1},d(i){E(e,i)}}}function Ot(n){let e,r,t,l,a,i,s=n[1]&&ze(n),o=(!n[1]||!n[0].portalInherit.name)&&Le(n);return{c(){e=N("div"),r=A("Name of the portal as known to patients"),t=T(),s&&s.c(),l=T(),o&&o.c(),a=F(),this.h()},l(f){e=P(f,"DIV",{class:!0});var p=V(e);r=O(p,"Name of the portal as known to patients"),p.forEach(d),t=D(f),s&&s.l(f),l=D(f),o&&o.l(f),a=F(),this.h()},h(){S(e,"class","bx--form__helper-text")},m(f,p){g(f,e,p),U(e,r),g(f,t,p),s&&s.m(f,p),g(f,l,p),o&&o.m(f,p),g(f,a,p),i=!0},p(f,p){f[1]?s?s.p(f,p):(s=ze(f),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null),!f[1]||!f[0].portalInherit.name?o?(o.p(f,p),p[0]&3&&h(o,1)):(o=Le(f),o.c(),h(o,1),o.m(a.parentNode,a)):o&&(te(),b(o,1,1,()=>{o=null}),re())},i(f){i||(h(o),i=!0)},o(f){b(o),i=!1},d(f){f&&d(e),f&&d(t),s&&s.d(f),f&&d(l),o&&o.d(f),f&&d(a)}}}function je(n){var f,p;let e,r,t,l=(p=(f=n[5])==null?void 0:f.portal)!=null&&p.description?n[5].portal.description.slice(40)+"...":"",a,i,s,o;return{c(){e=N("div"),r=N("input"),t=A(`
          Use description from Primary Brand ("`),a=A(l),i=A('")'),this.h()},l(u){e=P(u,"DIV",{});var c=V(e);r=P(c,"INPUT",{type:!0}),t=O(c,`
          Use description from Primary Brand ("`),a=O(c,l),i=O(c,'")'),c.forEach(d),this.h()},h(){S(r,"type","checkbox")},m(u,c){g(u,e,c),U(e,r),r.checked=n[0].portalInherit.description,U(e,t),U(e,a),U(e,i),s||(o=Be(r,"change",n[26]),s=!0)},p(u,c){var m,$;c[0]&1&&(r.checked=u[0].portalInherit.description),c[0]&32&&l!==(l=($=(m=u[5])==null?void 0:m.portal)!=null&&$.description?u[5].portal.description.slice(40)+"...":"")&&ne(a,l)},d(u){u&&d(e),s=!1,o()}}}function Me(n){let e,r,t;function l(i){n[27](i)}let a={invalid:!1,placeholder:"Access your clinical records..."};return n[0].portal.description!==void 0&&(a.value=n[0].portal.description),e=new ae({props:a}),W.push(()=>K(e,"value",l)),{c(){I(e.$$.fragment)},l(i){y(e.$$.fragment,i)},m(i,s){B(e,i,s),t=!0},p(i,s){const o={};s[0]&1&&(o.invalid=!1),!r&&s[0]&1&&(r=!0,o.value=i[0].portal.description,Q(()=>r=!1)),e.$set(o)},i(i){t||(h(e.$$.fragment,i),t=!0)},o(i){b(e.$$.fragment,i),t=!1},d(i){E(e,i)}}}function Nt(n){let e,r,t,l,a,i,s=n[1]&&je(n),o=(!n[1]||!n[0].portalInherit.description)&&Me(n);return{c(){e=N("div"),r=A(`Description of the portal to help patients connect to the right place.
        Explain the intended audience of the portal, if you offer more than one
        portal for different audiences.`),t=T(),s&&s.c(),l=T(),o&&o.c(),a=F(),this.h()},l(f){e=P(f,"DIV",{class:!0});var p=V(e);r=O(p,`Description of the portal to help patients connect to the right place.
        Explain the intended audience of the portal, if you offer more than one
        portal for different audiences.`),p.forEach(d),t=D(f),s&&s.l(f),l=D(f),o&&o.l(f),a=F(),this.h()},h(){S(e,"class","bx--form__helper-text")},m(f,p){g(f,e,p),U(e,r),g(f,t,p),s&&s.m(f,p),g(f,l,p),o&&o.m(f,p),g(f,a,p),i=!0},p(f,p){f[1]?s?s.p(f,p):(s=je(f),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null),!f[1]||!f[0].portalInherit.description?o?(o.p(f,p),p[0]&3&&h(o,1)):(o=Me(f),o.c(),h(o,1),o.m(a.parentNode,a)):o&&(te(),b(o,1,1,()=>{o=null}),re())},i(f){i||(h(o),i=!0)},o(f){b(o),i=!1},d(f){f&&d(e),f&&d(t),s&&s.d(f),f&&d(l),o&&o.d(f),f&&d(a)}}}function Pt(n){let e,r=`${n[1]?"Affiliated":"Primary"} Brand Details`,t,l,a,i,s,o,f,p,u,c,m,$,w,q,R,z="Patient Portal Details",J,H,j,Y,G,Z,X,le;return a=new ee({props:{legendText:"Brand name",$$slots:{default:[kt]},$$scope:{ctx:n}}}),s=new ee({props:{legendText:"Brand website (https only)",$$slots:{default:[It]},$$scope:{ctx:n}}}),f=new ee({props:{legendText:"Brand aliases (optional)",$$slots:{default:[Bt]},$$scope:{ctx:n}}}),u=new ee({props:{legendText:"Brand logo",$$slots:{default:[Et]},$$scope:{ctx:n}}}),m=new ee({props:{legendText:"Locations (optional)",$$slots:{default:[Tt]},$$scope:{ctx:n}}}),w=new ee({props:{legendText:"Categories (optional)",$$slots:{default:[Dt]},$$scope:{ctx:n}}}),j=new ee({props:{legendText:"Portal URL",$$slots:{default:[At]},$$scope:{ctx:n}}}),G=new ee({props:{legendText:"Portal name",$$slots:{default:[Ot]},$$scope:{ctx:n}}}),X=new ee({props:{legendText:"Portal description",$$slots:{default:[Nt]},$$scope:{ctx:n}}}),{c(){e=N("h5"),t=A(r),l=T(),I(a.$$.fragment),i=T(),I(s.$$.fragment),o=T(),I(f.$$.fragment),p=T(),I(u.$$.fragment),c=T(),I(m.$$.fragment),$=T(),I(w.$$.fragment),q=T(),R=N("h5"),J=A(z),H=T(),I(j.$$.fragment),Y=T(),I(G.$$.fragment),Z=T(),I(X.$$.fragment)},l(_){e=P(_,"H5",{});var v=V(e);t=O(v,r),v.forEach(d),l=D(_),y(a.$$.fragment,_),i=D(_),y(s.$$.fragment,_),o=D(_),y(f.$$.fragment,_),p=D(_),y(u.$$.fragment,_),c=D(_),y(m.$$.fragment,_),$=D(_),y(w.$$.fragment,_),q=D(_),R=P(_,"H5",{});var ie=V(R);J=O(ie,z),ie.forEach(d),H=D(_),y(j.$$.fragment,_),Y=D(_),y(G.$$.fragment,_),Z=D(_),y(X.$$.fragment,_)},m(_,v){g(_,e,v),U(e,t),g(_,l,v),B(a,_,v),g(_,i,v),B(s,_,v),g(_,o,v),B(f,_,v),g(_,p,v),B(u,_,v),g(_,c,v),B(m,_,v),g(_,$,v),B(w,_,v),g(_,q,v),g(_,R,v),U(R,J),g(_,H,v),B(j,_,v),g(_,Y,v),B(G,_,v),g(_,Z,v),B(X,_,v),le=!0},p(_,v){(!le||v[0]&2)&&r!==(r=`${_[1]?"Affiliated":"Primary"} Brand Details`)&&ne(t,r);const ie={};v[0]&1|v[1]&4&&(ie.$$scope={dirty:v,ctx:_}),a.$set(ie);const ce={};v[0]&1|v[1]&4&&(ce.$$scope={dirty:v,ctx:_}),s.$set(ce);const k={};v[0]&9|v[1]&4&&(k.$$scope={dirty:v,ctx:_}),f.$set(k);const C={};v[0]&5|v[1]&4&&(C.$$scope={dirty:v,ctx:_}),u.$set(C);const L={};v[0]&17|v[1]&4&&(L.$$scope={dirty:v,ctx:_}),m.$set(L);const x={};v[0]&1|v[1]&4&&(x.$$scope={dirty:v,ctx:_}),w.$set(x);const me={};v[0]&35|v[1]&4&&(me.$$scope={dirty:v,ctx:_}),j.$set(me);const $e={};v[0]&35|v[1]&4&&($e.$$scope={dirty:v,ctx:_}),G.$set($e);const oe={};v[0]&35|v[1]&4&&(oe.$$scope={dirty:v,ctx:_}),X.$set(oe)},i(_){le||(h(a.$$.fragment,_),h(s.$$.fragment,_),h(f.$$.fragment,_),h(u.$$.fragment,_),h(m.$$.fragment,_),h(w.$$.fragment,_),h(j.$$.fragment,_),h(G.$$.fragment,_),h(X.$$.fragment,_),le=!0)},o(_){b(a.$$.fragment,_),b(s.$$.fragment,_),b(f.$$.fragment,_),b(u.$$.fragment,_),b(m.$$.fragment,_),b(w.$$.fragment,_),b(j.$$.fragment,_),b(G.$$.fragment,_),b(X.$$.fragment,_),le=!1},d(_){_&&d(e),_&&d(l),E(a,_),_&&d(i),E(s,_),_&&d(o),E(f,_),_&&d(p),E(u,_),_&&d(c),E(m,_),_&&d($),E(w,_),_&&d(q),_&&d(R),_&&d(H),E(j,_),_&&d(Y),E(G,_),_&&d(Z),E(X,_)}}}function Ct(n){let e,r,t=n[0]&&Pe(n);return{c(){t&&t.c(),e=F()},l(l){t&&t.l(l),e=F()},m(l,a){t&&t.m(l,a),g(l,e,a),r=!0},p(l,a){l[0]?t?(t.p(l,a),a[0]&1&&h(t,1)):(t=Pe(l),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(te(),b(t,1,1,()=>{t=null}),re())},i(l){r||(h(t),r=!0)},o(l){b(t),r=!1},d(l){t&&t.d(l),l&&d(e)}}}function Rt(n,e,r){let{brand:t}=e,{brands:l}=e,a,i=[],s=[],o=!1,f;async function p(){r(0,t.alias=t.alias||[],t).push(""),await Te(),i.slice(-1)[0].focus()}async function u(){r(0,t.locations=[...t.locations,{text:""}],t),await Te(),s.slice(-1)[0].focus()}function c(k){n.$$.not_equal(t.name,k)&&(t.name=k,r(0,t),r(8,l),r(1,o))}function m(k){n.$$.not_equal(t.website,k)&&(t.website=k,r(0,t),r(8,l),r(1,o))}function $(k,C){n.$$.not_equal(t.alias[C],k)&&(t.alias[C]=k,r(0,t),r(8,l),r(1,o))}function w(k,C){n.$$.not_equal(i[C],k)&&(i[C]=k,r(3,i))}const q=async k=>{k.key==="Enter"&&p()},R=k=>r(0,t.alias=t.alias.filter((C,L)=>L!==k),t);function z(k){W[k?"unshift":"push"](()=>{a=k,r(2,a)})}const J=async function(C){console.log(C.detail);const L=C.detail[0],x=new Uint8Array(await L.arrayBuffer());console.log(x);const me=it(x);let $e=L.name.split(".")[1],oe=`data:image/${{svg:"svg+xml",png:"png"}[$e]};base64,${me}`;r(0,t.logo=oe,t),console.log(oe),a.clearFiles()};function H(k,C){n.$$.not_equal(C.text,k)&&(C.text=k,r(0,t),r(8,l),r(1,o))}function j(k,C){n.$$.not_equal(s[C],k)&&(s[C]=k,r(4,s))}const Y=async k=>{k.key==="Enter"&&u()},G=k=>{r(0,t.locations=t.locations.filter((C,L)=>L!==k),t)};function Z(k){n.$$.not_equal(t.categories,k)&&(t.categories=k,r(0,t),r(8,l),r(1,o))}function X(){t.portalInherit.website=this.checked,r(0,t),r(8,l),r(1,o)}function le(k){n.$$.not_equal(t.portal.website,k)&&(t.portal.website=k,r(0,t),r(8,l),r(1,o))}function _(){t.portalInherit.name=this.checked,r(0,t),r(8,l),r(1,o)}function v(k){n.$$.not_equal(t.portal.name,k)&&(t.portal.name=k,r(0,t),r(8,l),r(1,o))}function ie(){t.portalInherit.description=this.checked,r(0,t),r(8,l),r(1,o)}function ce(k){n.$$.not_equal(t.portal.description,k)&&(t.portal.description=k,r(0,t),r(8,l),r(1,o))}return n.$$set=k=>{"brand"in k&&r(0,t=k.brand),"brands"in k&&r(8,l=k.brands)},n.$$.update=()=>{n.$$.dirty[0]&259&&(t!=null&&t.parentId&&(r(1,o=!0),r(5,f=l[t.parentId])),t&&!(t!=null&&t.portal)&&(r(0,t.portal={},t),r(0,t.portalInherit={name:o,website:o,description:o},t))),n.$$.dirty[0]&1&&t&&r(0,t.locations=(t.locations||[]).map(k=>{let C=k.text,L=C.match(/^((.*?),\s+)?((.+?),?\s+)?([A-z][A-z]),?\s*?([\d-]{5,})?$/);if(!L){let x=C.match(/^[A-z][A-z]$/);return console.log("ParsedState",x,`|${C}|`),x?{text:C,state:x[0]}:{text:C}}return{text:C,line:L[2]&&L[4]?[L[2]]:void 0,city:L[4]||L[2],state:L[5],postalCode:L[6]}}),t)},[t,o,a,i,s,f,p,u,l,c,m,$,w,q,R,z,J,H,j,Y,G,Z,X,le,_,v,ie,ce]}class St extends we{constructor(e){super();ve(this,e,Rt,Ct,ge,{brand:0,brands:8},null,[-1,-1])}}function Vt(){let n=null;return(e,r)=>{n&&clearInterval(n),n=setTimeout(e,r)}}function Fe(n){try{return new URL(n).origin.replace(/^https:\/\/www\./,"https://")}catch{return}}const qt="https://example.org/fhir";function zt(n){let e=n.match(/(https:\/\/.+)\/[^/]+\/[^/]+/);return e?e[1]:qt}function Lt(n){var e,r;return`${(e=n==null?void 0:n.line)!=null&&e.length?n.line.join(" ")+" ":""}${n.city?n.city+", ":""}${n.state?n.state+" ":""}${(r=n.postalCode)!=null?r:""}`.trim()}function jt(n){var s,o,f,p;const e={id:n.id,parentId:(s=n==null?void 0:n.partOf)!=null&&s.reference?n.partOf.reference.split("Organization/")[1]:void 0,name:n.name,alias:n.alias,categories:(n.type||[]).map(u=>u.coding[0].code),locations:n.address.map(u=>_e(fe({},u),{text:Lt(u)})),portal:{},portalInherit:{name:!1,description:!1,website:!1}},r=n.extension.filter(u=>u.url==="https://argonaut.fhir.us/brand-logo");r.length>0&&(e.logo=r[0].valueUrl);const t=n.extension.filter(u=>u.url==="https://argonaut.fhir.us/patient-access-name");t.length>0&&(e.portal.name=t[0].valueString);const l=n.extension.filter(u=>u.url==="https://argonaut.fhir.us/patient-access-description");l.length>0&&(e.portal.description=l[0].valueString);const a=n.extension.filter(u=>u.url==="https://argonaut.fhir.us/patient-access-url");a.length>0&&(e.portal.website=a[0].valueUrl),e.parentId&&((o=e==null?void 0:e.portal)!=null&&o.name||(e.portalInherit.name=!0),(f=e==null?void 0:e.portal)!=null&&f.description||(e.portalInherit.description=!0),(p=e==null?void 0:e.portal)!=null&&p.website||(e.portalInherit.website=!0));const i=n.telecom.filter(u=>u.system==="url");return i.length>0&&(e.website=i[0].value),e}function Mt(n,e){const r=n.entry.filter(s=>s.resource.resourceType==="Organization").map(s=>s.resource).filter(s=>{var o;return!e||s.id===e||((o=s==null?void 0:s.partOf)==null?void 0:o.reference.endsWith(e))});console.log("root",e,r);const t=n.entry.map(s=>s.fullUrl).filter(s=>s.startsWith("https://")).map(zt);let l=ot.uniq(t);l.length>1&&(console.log("Can't determine base URL",l),l=[]);const a=l[0];console.log("base",a);const i=r.map(s=>jt(s));return{baseUrl:a,brands:Object.fromEntries(i.map(s=>[s.id,s]))}}function Ft(n,e){var l,a,i,s,o,f;const r=n.id,t={fullUrl:`${e}/Organization/${r}`,resource:{resourceType:"Organization",id:r,extension:[...n!=null&&n.logo?[{url:"https://argonaut.fhir.us/brand-logo",valueUrl:n.logo}]:[],...!((l=n==null?void 0:n.portalInherit)!=null&&l.website)&&((a=n==null?void 0:n.portal)==null?void 0:a.website)?[{url:"https://argonaut.fhir.us/patient-access-url",valueUrl:n.portal.website}]:[],...!((i=n==null?void 0:n.portalInherit)!=null&&i.name)&&((s=n.portal)==null?void 0:s.name)?[{url:"https://argonaut.fhir.us/patient-access-name",valueString:n.portal.name}]:[],...!((o=n.portalInherit)!=null&&o.description)&&((f=n.portal)==null?void 0:f.description)?[{url:"https://argonaut.fhir.us/patient-access-description",valueString:n.portal.description}]:[]],name:n.name,partOf:n.parentId?{reference:`Organization/${n.parentId}`}:void 0,alias:n.alias,address:(n.locations||[]).map(p=>({line:p==null?void 0:p.line,city:p==null?void 0:p.city,state:p==null?void 0:p.state,postalCode:p==null?void 0:p.postalCode})),telecom:[{system:"url",value:n.website}],identifier:[...Fe(n==null?void 0:n.website)?[{system:"urn:ietf:rfc:3986",value:Fe(n==null?void 0:n.website)}]:[]],type:((n==null?void 0:n.categories)||[]).map(p=>({coding:[{system:"https://argonaut.fhir.us",code:p}]}))}};return["alias","address","extension","identifier","type"].forEach(p=>{var u,c;((c=(u=t==null?void 0:t.resource)==null?void 0:u[p])==null?void 0:c.length)===0&&delete t.resource[p]}),t}function Gt(n,e){return{resourceType:"Bundle",type:"collection",meta:{lastUpdated:new Date().toISOString()},entry:Object.entries(n).map(([r,t])=>Ft(t,e))}}function Ge(n,e,r){const t=n.slice();return t[10]=e[r][0],t[11]=e[r][1],t}function Ht(n){let e,r,t,l,a;return{c(){e=N("h1"),r=A("SMART Patient Access: Brand Editor ("),t=N("a"),l=A("?"),a=A(")"),this.h()},l(i){e=P(i,"H1",{class:!0});var s=V(e);r=O(s,"SMART Patient Access: Brand Editor ("),t=P(s,"A",{target:!0,href:!0});var o=V(t);l=O(o,"?"),o.forEach(d),a=O(s,")"),s.forEach(d),this.h()},h(){S(t,"target","_blank"),S(t,"href","https://hackmd.io/@argonaut/patient-access-brands"),S(e,"class","svelte-1ggurck")},m(i,s){g(i,e,s),U(e,r),U(e,t),U(t,l),U(e,a)},d(i){i&&d(e)}}}function Wt(n){let e,r;return e=new pe({props:{sm:4,$$slots:{default:[Ht]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const a={};l&16384&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Jt(n){let e,r,t,l,a;return l=new ut({props:{style:"position: absolute; top: 0px; right: 1rem;",text:n[1],feedback:"Copied Brand Bundle to clipboard"}}),{c(){e=N("pre"),r=A(n[1]),t=T(),I(l.$$.fragment),this.h()},l(i){e=P(i,"PRE",{style:!0});var s=V(e);r=O(s,n[1]),s.forEach(d),t=D(i),y(l.$$.fragment,i),this.h()},h(){M(e,"overflow-x","clip"),M(e,"margin-bottom","1em")},m(i,s){g(i,e,s),U(e,r),g(i,t,s),B(l,i,s),a=!0},p(i,s){(!a||s&2)&&ne(r,i[1]);const o={};s&2&&(o.text=i[1]),l.$set(o)},i(i){a||(h(l.$$.fragment,i),a=!0)},o(i){b(l.$$.fragment,i),a=!1},d(i){i&&d(e),i&&d(t),E(l,i)}}}function Kt(n){let e,r,t;return e=new vt({props:{brand:n[11],parentBrand:n[0][n[11].parentId]}}),e.$on("add-affiliated-brand",function(){Ae(n[3](n[10]))&&n[3](n[10]).apply(this,arguments)}),e.$on("remove-affiliated-brand",function(){Ae(n[4](n[10]))&&n[4](n[10]).apply(this,arguments)}),{c(){I(e.$$.fragment),r=T()},l(l){y(e.$$.fragment,l),r=D(l)},m(l,a){B(e,l,a),g(l,r,a),t=!0},p(l,a){n=l;const i={};a&1&&(i.brand=n[11]),a&1&&(i.parentBrand=n[0][n[11].parentId]),e.$set(i)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){b(e.$$.fragment,l),t=!1},d(l){E(e,l),l&&d(r)}}}function He(n){let e,r;return e=new pe({props:{class:"tile-column",sm:4,$$slots:{default:[Kt]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const a={};l&16385&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Qt(n){let e,r,t=Object.entries(n[0]),l=[];for(let i=0;i<t.length;i+=1)l[i]=He(Ge(n,t,i));const a=i=>b(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=F()},l(i){for(let s=0;s<l.length;s+=1)l[s].l(i);e=F()},m(i,s){for(let o=0;o<l.length;o+=1)l[o].m(i,s);g(i,e,s),r=!0},p(i,s){if(s&25){t=Object.entries(i[0]);let o;for(o=0;o<t.length;o+=1){const f=Ge(i,t,o);l[o]?(l[o].p(f,s),h(l[o],1)):(l[o]=He(f),l[o].c(),h(l[o],1),l[o].m(e.parentNode,e))}for(te(),o=t.length;o<l.length;o+=1)a(o);re()}},i(i){if(!r){for(let s=0;s<t.length;s+=1)h(l[s]);r=!0}},o(i){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)b(l[s]);r=!1},d(i){ye(l,i),i&&d(e)}}}function Xt(n){let e,r;return e=new he({props:{$$slots:{default:[Qt]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const a={};l&16385&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function Yt(n){let e,r;return e=new ke({props:{noGutter:!0,$$slots:{default:[Xt]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const a={};l&16385&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}function We(n){let e,r,t;function l(i){n[6](i)}let a={brands:n[0]};return n[0][n[2].id]!==void 0&&(a.brand=n[0][n[2].id]),e=new St({props:a}),W.push(()=>K(e,"brand",l)),{c(){I(e.$$.fragment)},l(i){y(e.$$.fragment,i)},m(i,s){B(e,i,s),t=!0},p(i,s){const o={};s&1&&(o.brands=i[0]),!r&&s&5&&(r=!0,o.brand=i[0][i[2].id],Q(()=>r=!1)),e.$set(o)},i(i){t||(h(e.$$.fragment,i),t=!0)},o(i){b(e.$$.fragment,i),t=!1},d(i){E(e,i)}}}function Zt(n){let e=n[2].id,r,t,l=We(n);return{c(){l.c(),r=F()},l(a){l.l(a),r=F()},m(a,i){l.m(a,i),g(a,r,i),t=!0},p(a,i){i&4&&ge(e,e=a[2].id)?(te(),b(l,1,1,pt),re(),l=We(a),l.c(),h(l),l.m(r.parentNode,r)):l.p(a,i)},i(a){t||(h(l),t=!0)},o(a){b(l),t=!1},d(a){a&&d(r),l.d(a)}}}function xt(n){let e,r,t,l,a,i;return e=new pe({props:{style:"position: relative;",lg:4,sm:4,$$slots:{default:[Jt]},$$scope:{ctx:n}}}),t=new pe({props:{lg:4,sm:4,style:"margin-bottom: 1em;",$$slots:{default:[Yt]},$$scope:{ctx:n}}}),a=new pe({props:{lg:8,sm:4,$$slots:{default:[Zt]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment),r=T(),I(t.$$.fragment),l=T(),I(a.$$.fragment)},l(s){y(e.$$.fragment,s),r=D(s),y(t.$$.fragment,s),l=D(s),y(a.$$.fragment,s)},m(s,o){B(e,s,o),g(s,r,o),B(t,s,o),g(s,l,o),B(a,s,o),i=!0},p(s,o){const f={};o&16386&&(f.$$scope={dirty:o,ctx:s}),e.$set(f);const p={};o&16385&&(p.$$scope={dirty:o,ctx:s}),t.$set(p);const u={};o&16389&&(u.$$scope={dirty:o,ctx:s}),a.$set(u)},i(s){i||(h(e.$$.fragment,s),h(t.$$.fragment,s),h(a.$$.fragment,s),i=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),b(a.$$.fragment,s),i=!1},d(s){E(e,s),s&&d(r),E(t,s),s&&d(l),E(a,s)}}}function er(n){let e,r,t,l;return e=new he({props:{$$slots:{default:[Wt]},$$scope:{ctx:n}}}),t=new he({props:{$$slots:{default:[xt]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment),r=T(),I(t.$$.fragment)},l(a){y(e.$$.fragment,a),r=D(a),y(t.$$.fragment,a)},m(a,i){B(e,a,i),g(a,r,i),B(t,a,i),l=!0},p(a,i){const s={};i&16384&&(s.$$scope={dirty:i,ctx:a}),e.$set(s);const o={};i&16391&&(o.$$scope={dirty:i,ctx:a}),t.$set(o)},i(a){l||(h(e.$$.fragment,a),h(t.$$.fragment,a),l=!0)},o(a){b(e.$$.fragment,a),b(t.$$.fragment,a),l=!1},d(a){E(e,a),a&&d(r),E(t,a)}}}function tr(n){let e,r;return e=new ke({props:{$$slots:{default:[er]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,[l]){const a={};l&16391&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){E(e,t)}}}const rr="https://ehr.example.org";function nr(n,e,r){let t;Je(n,se,m=>r(2,t=m));let l={id:De(),name:"TODO: Add a name"},a={},i=rr;ft(async()=>{const m=new URLSearchParams(window.location.search),$=m.get("source"),w=m.get("root");if($){let q=await fetch($).then(z=>z.json()),R=Mt(q,w);r(5,i=R.baseUrl),r(0,a=R.brands)}else r(0,a={[l.id]:fe({},l)});s()});function s(){let m=Object.values(a);m.length!==0&&(m.length===1?ue(se,t={id:m[0].id},t):ue(se,t={id:m.filter($=>!$.parentId)[0].id},t))}let o="",f=Vt();function p(m){return $=>{const w=_e(fe({},l),{id:De(),parentId:m});r(0,a=_e(fe({},a),{[w.id]:w})),ue(se,t={id:w.id},t)}}function u(m){return $=>{r(0,a=Object.fromEntries(Object.entries(a).filter(([w,q])=>w!==m)))}}function c(m){n.$$.not_equal(a[t.id],m)&&(a[t.id]=m,r(0,a))}return n.$$.update=()=>{n.$$.dirty&33&&f(()=>{r(1,o=JSON.stringify(Gt(a,i||"https://ehr.example.org"),null,2))},200)},[a,o,t,p,u,i,c]}class sr extends we{constructor(e){super();ve(this,e,nr,tr,ge,{})}}export{sr as default};
