const ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};ne();function E(){}function Q(e){return e()}function U(){return Object.create(null)}function v(e){e.forEach(Q)}function re(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let N;function V(e,t){return N||(N=document.createElement("a")),N.href=t,e===N.href}function oe(e){return Object.keys(e).length===0}const le=typeof window!="undefined";let ue=le?e=>requestAnimationFrame(e):E;function y(e,t){e.appendChild(t)}function M(e,t,n){e.insertBefore(t,n||null)}function B(e){e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function se(e){return document.createTextNode(e)}function z(){return se(" ")}function k(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function W(e){return e===""?null:+e}function ce(e){return Array.from(e.childNodes)}function L(e,t){e.value=t==null?"":t}let K;function w(e){K=e}const $=[],P=[],x=[],D=[],ae=Promise.resolve();let T=!1;function fe(){T||(T=!0,ae.then(X))}function q(e){x.push(e)}const C=new Set;let O=0;function X(){const e=K;do{for(;O<$.length;){const t=$[O];O++,w(t),de(t.$$)}for(w(null),$.length=0,O=0;P.length;)P.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];C.has(n)||(C.add(n),n())}x.length=0}while($.length);for(;D.length;)D.pop()();T=!1,C.clear(),w(e)}function de(e){if(e.fragment!==null){e.update(),v(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const j=new Set;let b;function pe(){b={r:0,c:[],p:b}}function _e(){b.r||v(b.c),b=b.p}function S(e,t){e&&e.i&&(j.delete(e),e.i(t))}function F(e,t,n,r){if(e&&e.o){if(j.has(e))return;j.add(e),b.c.push(()=>{j.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function ge(e){e&&e.c()}function Y(e,t,n,r){const{fragment:o,on_mount:l,on_destroy:i,after_update:f}=e.$$;o&&o.m(t,n),r||q(()=>{const d=l.map(Q).filter(re);i?i.push(...d):v(d),e.$$.on_mount=[]}),f.forEach(q)}function Z(e,t){const n=e.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function me(e,t){e.$$.dirty[0]===-1&&($.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ee(e,t,n,r,o,l,i,f=[-1]){const d=K;w(e);const s=e.$$={fragment:null,ctx:null,props:l,update:E,not_equal:o,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:U(),dirty:f,skip_bound:!1,root:t.target||d.$$.root};i&&i(s.root);let h=!1;if(s.ctx=n?n(e,t.props||{},(a,u,...A)=>{const c=A.length?A[0]:u;return s.ctx&&o(s.ctx[a],s.ctx[a]=c)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](c),h&&me(e,a)),u}):[],s.update(),h=!0,v(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const a=ce(t.target);s.fragment&&s.fragment.l(a),a.forEach(B)}else s.fragment&&s.fragment.c();t.intro&&S(e.$$.fragment),Y(e,t.target,t.anchor,t.customElement),X()}w(d)}class te{$destroy(){Z(this,1),this.$destroy=E}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(e){let t,n,r,o,l=!0,i=!1,f,d,s;function h(){cancelAnimationFrame(f),t.paused||(f=ue(h),i=!0),e[7].call(t)}return{c(){t=m("video"),n=m("track"),r=m("source"),g(n,"kind","captions"),V(r.src,o=e[0])||g(r,"src",o),g(t,"class","mx-auto"),t.controls=!0,e[2]===void 0&&q(()=>e[5].call(t))},m(a,u){M(a,t,u),y(t,n),y(t,r),e[8](t),d||(s=[k(t,"durationchange",e[5]),k(t,"play",e[6]),k(t,"pause",e[6]),k(t,"timeupdate",h)],d=!0)},p(a,u){u&1&&!V(r.src,o=a[0])&&g(r,"src",o),u&16&&l!==(l=a[4])&&t[l?"pause":"play"](),!i&&u&8&&!isNaN(a[3])&&(t.currentTime=a[3]),i=!1},d(a){a&&B(t),e[8](null),d=!1,v(s)}}}function he(e){let t,n,r,o=e[0],l=G(e);return{c(){t=m("main"),n=m("div"),r=m("div"),l.c(),g(n,"class","relative")},m(i,f){M(i,t,f),y(t,n),y(n,r),l.m(r,null)},p(i,[f]){f&1&&I(o,o=i[0])?(l.d(1),l=G(i),l.c(),l.m(r,null)):l.p(i,f)},i:E,o:E,d(i){i&&B(t),l.d(i)}}}function ye(e,t,n){let{videoSource:r}=t,o,l,i=0,f=!0;function d(){l=this.duration,n(2,l)}function s(){f=this.paused,n(4,f)}function h(){i=this.currentTime,n(3,i)}function a(u){P[u?"unshift":"push"](()=>{o=u,n(1,o)})}return e.$$set=u=>{"videoSource"in u&&n(0,r=u.videoSource)},[r,o,l,i,f,d,s,h,a]}class be extends te{constructor(t){super(),ee(this,t,ye,he,I,{videoSource:0})}}function H(e,t,n){const r=e.slice();return r[5]=t[n],r}function J(e){let t,n;return t=new be({props:{videoSource:e[5]}}),{c(){ge(t.$$.fragment)},m(r,o){Y(t,r,o),n=!0},p(r,o){const l={};o&4&&(l.videoSource=r[5]),t.$set(l)},i(r){n||(S(t.$$.fragment,r),n=!0)},o(r){F(t.$$.fragment,r),n=!1},d(r){Z(t,r)}}}function ve(e){let t,n,r,o,l,i,f,d,s,h,a=e[2],u=[];for(let c=0;c<a.length;c+=1)u[c]=J(H(e,a,c));const A=c=>F(u[c],1,1,()=>{u[c]=null});return{c(){t=m("main"),n=m("div"),r=m("input"),o=z(),l=m("input"),i=z(),f=m("div");for(let c=0;c<u.length;c+=1)u[c].c();g(r,"type","text"),g(r,"class","bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"),g(l,"type","number"),g(l,"step","20"),g(l,"class","bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"),g(n,"class","grid gap-6 mb-6 md:grid-cols-2"),g(f,"class","grid gap-6 mb-6 md:grid-cols-4"),g(t,"class","svelte-uj09p6")},m(c,_){M(c,t,_),y(t,n),y(n,r),L(r,e[1]),y(n,o),y(n,l),L(l,e[0]),y(t,i),y(t,f);for(let p=0;p<u.length;p+=1)u[p].m(f,null);d=!0,s||(h=[k(r,"input",e[3]),k(l,"input",e[4])],s=!0)},p(c,[_]){if(_&2&&r.value!==c[1]&&L(r,c[1]),_&1&&W(l.value)!==c[0]&&L(l,c[0]),_&4){a=c[2];let p;for(p=0;p<a.length;p+=1){const R=H(c,a,p);u[p]?(u[p].p(R,_),S(u[p],1)):(u[p]=J(R),u[p].c(),S(u[p],1),u[p].m(f,null))}for(pe(),p=a.length;p<u.length;p+=1)A(p);_e()}},i(c){if(!d){for(let _=0;_<a.length;_+=1)S(u[_]);d=!0}},o(c){u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)F(u[_]);d=!1},d(c){c&&B(t),ie(u,c),s=!1,v(h)}}}function ke(e){let t=e.toString();return t[0]+"0".repeat(t.length-1)}function $e(e,t,n){let r,o=20080,l="https://acdn3.sexcelebrity.net/content/videos/";function i(){l=this.value,n(1,l)}function f(){o=W(this.value),n(0,o)}return e.$$.update=()=>{e.$$.dirty&3&&n(2,r=Array.from({length:20},(d,s)=>`${l}${ke(o+s)}/${(o+s).toString()}/${(o+s).toString()}_1080p.mp4`))},[o,l,r,i,f]}class we extends te{constructor(t){super(),ee(this,t,$e,ve,I,{})}}new we({target:document.getElementById("app")});
