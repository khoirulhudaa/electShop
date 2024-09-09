import{r as o,R as x}from"./index-c43d25d1.js";function _(t){return s=>!!s.type&&s.type.tabsRole===t}const $=_("Tab"),K=_("TabList"),j=_("TabPanel");function ue(t){return $(t)||K(t)||j(t)}function U(t,s){return o.Children.map(t,n=>n===null?null:ue(n)?s(n):n.props&&n.props.children&&typeof n.props.children=="object"?o.cloneElement(n,{...n.props,children:U(n.props.children,s)}):n)}function W(t,s){return o.Children.forEach(t,n=>{n!==null&&($(n)||j(n)?s(n):n.props&&n.props.children&&typeof n.props.children=="object"&&(K(n)&&s(n),W(n.props.children,s)))})}function X(t){var s,n,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t))for(s=0;s<t.length;s++)t[s]&&(n=X(t[s]))&&(a&&(a+=" "),a+=n);else for(s in t)t[s]&&(a&&(a+=" "),a+=s);return a}function v(){for(var t,s,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(s=X(t))&&(a&&(a+=" "),a+=s);return a}function Y(t){let s=0;return W(t,n=>{$(n)&&s++}),s}function Z(t){return t&&"getAttribute"in t}function Q(t){return Z(t)&&t.getAttribute("data-rttab")}function w(t){return Z(t)&&t.getAttribute("aria-disabled")==="true"}let P;function ie(t){const s=t||(typeof window<"u"?window:void 0);try{P=!!(typeof s<"u"&&s.document&&s.document.activeElement)}catch{P=!1}}const fe={className:"react-tabs",focus:!1},ee=t=>{let s=o.useRef([]),n=o.useRef([]);const a=o.useRef();function d(e,r){if(e<0||e>=f())return;const{onSelect:l,selectedIndex:h}=t;l(e,h,r)}function b(e){const r=f();for(let l=e+1;l<r;l++)if(!w(c(l)))return l;for(let l=0;l<e;l++)if(!w(c(l)))return l;return e}function p(e){let r=e;for(;r--;)if(!w(c(r)))return r;for(r=f();r-- >e;)if(!w(c(r)))return r;return e}function y(){const e=f();for(let r=0;r<e;r++)if(!w(c(r)))return r;return null}function m(){let e=f();for(;e--;)if(!w(c(e)))return e;return null}function f(){const{children:e}=t;return Y(e)}function c(e){return s.current[`tabs-${e}`]}function E(){let e=0;const{children:r,disabledTabClassName:l,focus:h,forceRenderTabPanel:u,selectedIndex:T,selectedTabClassName:C,selectedTabPanelClassName:H,environment:q}=t;n.current=n.current||[];let le=n.current.length-f();const oe=o.useId();for(;le++<0;)n.current.push(`${oe}${n.current.length}`);return U(r,R=>{let D=R;if(K(R)){let g=0,z=!1;P==null&&ie(q);const B=q||(typeof window<"u"?window:void 0);P&&B&&(z=x.Children.toArray(R.props.children).filter($).some((G,k)=>B.document.activeElement===c(k))),D=o.cloneElement(R,{children:U(R.props.children,G=>{const k=`tabs-${g}`,J=T===g,O={tabRef:ce=>{s.current[k]=ce},id:n.current[g],selected:J,focus:J&&(h||z)};return C&&(O.selectedClassName=C),l&&(O.disabledClassName=l),g++,o.cloneElement(G,O)})})}else if(j(R)){const g={id:n.current[e],selected:T===e};u&&(g.forceRender=u),H&&(g.selectedClassName=H),e++,D=o.cloneElement(R,g)}return D})}function I(e){const{direction:r,disableUpDownKeys:l,disableLeftRightKeys:h}=t;if(N(e.target)){let{selectedIndex:u}=t,T=!1,C=!1;(e.code==="Space"||e.keyCode===32||e.code==="Enter"||e.keyCode===13)&&(T=!0,C=!1,i(e)),!h&&(e.keyCode===37||e.code==="ArrowLeft")||!l&&(e.keyCode===38||e.code==="ArrowUp")?(r==="rtl"?u=b(u):u=p(u),T=!0,C=!0):!h&&(e.keyCode===39||e.code==="ArrowRight")||!l&&(e.keyCode===40||e.code==="ArrowDown")?(r==="rtl"?u=p(u):u=b(u),T=!0,C=!0):e.keyCode===35||e.code==="End"?(u=m(),T=!0,C=!0):(e.keyCode===36||e.code==="Home")&&(u=y(),T=!0,C=!0),T&&e.preventDefault(),C&&d(u,e)}}function i(e){let r=e.target;do if(N(r)){if(w(r))return;const l=[].slice.call(r.parentNode.children).filter(Q).indexOf(r);d(l,e);return}while((r=r.parentNode)!=null)}function N(e){if(!Q(e))return!1;let r=e.parentElement;do{if(r===a.current)return!0;if(r.getAttribute("data-rttabs"))break;r=r.parentElement}while(r);return!1}const{children:A,className:S,disabledTabClassName:ye,domRef:M,focus:Ne,forceRenderTabPanel:ge,onSelect:Ee,selectedIndex:Re,selectedTabClassName:we,selectedTabPanelClassName:he,environment:xe,disableUpDownKeys:Ie,disableLeftRightKeys:Ae,...ae}={...fe,...t};return x.createElement("div",Object.assign({},ae,{className:v(S),onClick:i,onKeyDown:I,ref:e=>{a.current=e,M&&M(e)},"data-rttabs":!0}),E())};ee.propTypes={};const de=0,L=1,be={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},pe=t=>t.selectedIndex===null?L:de,te=t=>{const{children:s,defaultFocus:n,defaultIndex:a,focusTabOnClick:d,onSelect:b,...p}={...be,...t},[y,m]=o.useState(n),[f]=o.useState(pe(p)),[c,E]=o.useState(f===L?a||0:null);if(o.useEffect(()=>{m(!1)},[]),f===L){const N=Y(s);o.useEffect(()=>{if(c!=null){const A=Math.max(0,N-1);E(Math.min(c,A))}},[N])}const I=(N,A,S)=>{typeof b=="function"&&b(N,A,S)===!1||(d&&m(!0),f===L&&E(N))};let i={...t,...p};return i.focus=y,i.onSelect=I,c!=null&&(i.selectedIndex=c),delete i.defaultFocus,delete i.defaultIndex,delete i.focusTabOnClick,x.createElement(ee,i,s)};te.propTypes={};te.tabsRole="Tabs";const me={className:"react-tabs__tab-list"},ne=t=>{const{children:s,className:n,...a}={...me,...t};return x.createElement("ul",Object.assign({},a,{className:v(n),role:"tablist"}),s)};ne.tabsRole="TabList";ne.propTypes={};const F="react-tabs__tab",Te={className:F,disabledClassName:`${F}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${F}--selected`},se=t=>{let s=o.useRef();const{children:n,className:a,disabled:d,disabledClassName:b,focus:p,id:y,selected:m,selectedClassName:f,tabIndex:c,tabRef:E,...I}={...Te,...t};return o.useEffect(()=>{m&&p&&s.current.focus()},[m,p]),x.createElement("li",Object.assign({},I,{className:v(a,{[f]:m,[b]:d}),ref:i=>{s.current=i,E&&E(i)},role:"tab",id:`tab${y}`,"aria-selected":m?"true":"false","aria-disabled":d?"true":"false","aria-controls":`panel${y}`,tabIndex:c||(m?"0":null),"data-rttab":!0}),n)};se.propTypes={};se.tabsRole="Tab";const V="react-tabs__tab-panel",Ce={className:V,forceRender:!1,selectedClassName:`${V}--selected`},re=t=>{const{children:s,className:n,forceRender:a,id:d,selected:b,selectedClassName:p,...y}={...Ce,...t};return x.createElement("div",Object.assign({},y,{className:v(n,{[p]:b}),role:"tabpanel",id:`panel${d}`,"aria-labelledby":`tab${d}`}),a||b?s:null)};re.tabsRole="TabPanel";re.propTypes={};export{te as T,ne as a,se as b,re as c};