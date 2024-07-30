"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["global-user-nav-drawer"],{78209:(e,t,a)=>{a.d(t,{A:()=>f,E:()=>p});var r=a(96540),n=a(38267),i=a(59299),o=a(44999),s=a(7707),l=a(65574),c=a(44683),d=a(14744),u=a.n(d);function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(null,arguments)}let p=20,h=n.Ay.img.attrs(e=>({height:e.size,width:e.size})).withConfig({displayName:"Avatar__StyledAvatar",componentId:"sc-2lv0r8-0"})(["display:inline-block;overflow:hidden;line-height:",";vertical-align:middle;border-radius:",";box-shadow:0 0 0 1px ",";height:var(--avatar-size);width:var(--avatar-size);",""],(0,i.Jt)("lineHeights.condensedUltra"),e=>e.square?"clamp(4px, var(--avatar-size) - 24px, 6px)":"50%",(0,i.Jt)("colors.avatar.border"),o.A),f=r.forwardRef(function({alt:e="",size:t=p,square:a=!1,sx:n=c.E,...i},o){let d=(0,s.W8)(t)?u()((0,l.D)(t,"--avatar-size",e=>`${e||p}px`),n):u()({"--avatar-size":`${t}px`},n);return r.createElement(h,m({"data-component":"Avatar",ref:o,alt:e,size:t,square:a,sx:d},i))})},21949:(e,t,a)=>{a.d(t,{A:()=>f});var r=a(96540),n=a(75177);a(14744);var i=a(55847),o=a(86519),s=a(59299);let l=a(38267).Ay.div.withConfig({displayName:"Blankslate__StyledBlankslate",componentId:"sc-4802l5-0"})(["container-type:inline-size;.Blankslate{--blankslate-outer-padding-block:var(--base-size-32);--blankslate-outer-padding-inline:var(--base-size-32);display:grid;justify-items:center;padding:var(--blankslate-outer-padding-block) var(--blankslate-outer-padding-inline);}.Blankslate[data-spacious='true']{--blankslate-outer-padding-block:var(--base-size-80);--blankslate-outer-padding-inline:var(--base-size-40);}.Blankslate[data-border='true']{border:var(--borderWidth-thin) solid var(--borderColor-default,",");border-radius:var(--borderRadius-medium);}.Blankslate[data-narrow='true']{margin:0 auto;max-width:485px;}.Blankslate-Heading,.Blankslate-Description{margin:0;margin-bottom:var(--stack-gap-condensed);}.Blankslate-Heading{font-size:var(--text-title-size-medium);font-weight:var(--text-title-weight-medium);}.Blankslate-Description{color:var(--fgColor-muted,",");font-size:var(--text-body-size-large);}.Blankslate-Action{margin-top:var(--stack-gap-normal);}.Blankslate-Action:first-of-type{margin-top:var(--stack-gap-spacious);}.Blankslate-Action:last-of-type{margin-bottom:var(--stack-gap-condensed);}"],(0,s.Jt)("colors.border.default"),(0,s.Jt)("colors.fg.muted")),c=`
  /* At the time these styles were written,
  34rem was our "small" breakpoint width */
  @container (max-width: 34rem) {
    ${l} .Blankslate {
    --blankslate-outer-padding-block: var(--base-size-20);
    --blankslate-outer-padding-inline: var(--base-size-20);
  }

  ${l} .Blankslate[data-spacious='true'] {
    --blankslate-outer-padding-block: var(--base-size-44);
    --blankslate-outer-padding-inline: var(--base-size-28);
  }

  ${l} .Blankslate-Visual {
    margin-bottom: var(--stack-gap-condensed);
    max-width: var(--base-size-24);
  }

  ${l} .Blankslate-Visual svg {
    width: 100%;
  }

  ${l} .Blankslate-Heading {
    font-size: var(--text-title-size-small);
  }

  ${l} .Blankslate-Description {
    font-size: var(--text-body-size-medium);
  }

  ${l} .Blankslate-Action {
    margin-top: var(--stack-gap-condensed);
  }

  ${l} .Blankslate-Action:first-of-type {
    margin-top: var(--stack-gap-normal);
  }

  ${l} .Blankslate-Action:last-of-type {
    margin-bottom: calc(var(--stack-gap-condensed) / 2);
  }
`;function d({children:e}){return r.createElement("span",{className:"Blankslate-Visual"},e)}function u({as:e="h2",children:t}){return r.createElement(n.A,{as:e,className:"Blankslate-Heading"},t)}function m({children:e}){return r.createElement("p",{className:"Blankslate-Description"},e)}function p({children:e,href:t}){return r.createElement("div",{className:"Blankslate-Action"},r.createElement(i.Q,{as:"a",href:t,variant:"primary"},e))}function h({children:e,href:t}){return r.createElement("div",{className:"Blankslate-Action"},r.createElement(o.A,{href:t},e))}d.displayName="Visual",u.displayName="Heading",m.displayName="Description",p.displayName="PrimaryAction",h.displayName="SecondaryAction";var f=Object.assign(function({border:e,children:t,narrow:a,spacious:n}){return r.createElement(r.Fragment,null,r.createElement("style",{type:"text/css"},c),r.createElement(l,null,r.createElement("div",{className:"Blankslate","data-border":e,"data-narrow":a,"data-spacious":n},t)))},{Visual:d,Heading:u,Description:m,PrimaryAction:p,SecondaryAction:h})},86079:(e,t,a)=>{a.d(t,{l:()=>T});var r=a(96540),n=a(38267),i=a(75177),o=a(44999),s=a(64515),l=a(55847),c=a(59299),d=a(81425),u=a(77393),m=a(94120),p=a(32947),h=a(90495),f=a(30729),g=a(73990),y=a(82678),x=a(16255),b=a(5278);function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(null,arguments)}let w=(0,n.Ay)("div").withConfig({displayName:"Dialog__Backdrop",componentId:"sc-uaxjsn-0"})(["position:fixed;top:0;left:0;bottom:0;right:0;display:flex;align-items:center;justify-content:center;background-color:",";animation:dialog-backdrop-appear 200ms ",";&[data-position-regular='center']{align-items:center;justify-content:center;}&[data-position-regular='left']{align-items:center;justify-content:flex-start;}&[data-position-regular='right']{align-items:center;justify-content:flex-end;}.DialogOverflowWrapper{flex-grow:1;}@media (max-width:767px){&[data-position-narrow='center']{align-items:center;justify-content:center;}&[data-position-narrow='bottom']{align-items:end;justify-content:center;}}@keyframes dialog-backdrop-appear{0%{opacity:0;}100%{opacity:1;}}"],(0,c.Jt)("colors.primer.canvas.backdrop"),(0,c.Jt)("animation.easeOutCubic")),j={small:"480px",large:"640px",auto:"auto"},_={small:"296px",medium:"320px",large:"480px",xlarge:"640px"},A=n.Ay.div.withConfig({displayName:"Dialog__StyledDialog",componentId:"sc-uaxjsn-1"})(["display:flex;flex-direction:column;background-color:",";box-shadow:",";width:",";height:",";min-width:296px;max-width:calc(100dvw - 64px);max-height:calc(100dvh - 64px);border-radius:12px;opacity:1;@media screen and (prefers-reduced-motion:no-preference){animation:Overlay--motion-scaleFade 0.2s cubic-bezier(0.33,1,0.68,1) 0s 1 normal none running;}&[data-position-regular='center']{border-radius:var(--borderRadius-large,0.75rem);@media screen and (prefers-reduced-motion:no-preference){animation:Overlay--motion-scaleFade 0.2s cubic-bezier(0.33,1,0.68,1) 0s 1 normal none running;}}&[data-position-regular='left']{height:100dvh;max-height:unset;border-radius:var(--borderRadius-large,0.75rem);border-top-left-radius:0;border-bottom-left-radius:0;@media screen and (prefers-reduced-motion:no-preference){animation:Overlay--motion-slideInRight 0.25s cubic-bezier(0.33,1,0.68,1) 0s 1 normal none running;}}&[data-position-regular='right']{height:100dvh;max-height:unset;border-radius:var(--borderRadius-large,0.75rem);border-top-right-radius:0;border-bottom-right-radius:0;@media screen and (prefers-reduced-motion:no-preference){animation:Overlay--motion-slideInLeft 0.25s cubic-bezier(0.33,1,0.68,1) 0s 1 normal none running;}}@media (max-width:767px){&[data-position-narrow='center']{border-radius:var(--borderRadius-large,0.75rem);width:",";height:",";}&[data-position-narrow='bottom']{width:100dvw;height:auto;max-width:100dvw;max-height:calc(100dvh - 64px);border-radius:var(--borderRadius-large,0.75rem);border-bottom-right-radius:0;border-bottom-left-radius:0;@media screen and (prefers-reduced-motion:no-preference){animation:Overlay--motion-slideUp 0.25s cubic-bezier(0.33,1,0.68,1) 0s 1 normal none running;}}&[data-position-narrow='fullscreen']{width:100%;max-width:100dvw;height:100%;max-height:100dvh;border-radius:unset !important;flex-grow:1;@media screen and (prefers-reduced-motion:no-preference){animation:Overlay--motion-scaleFade 0.2s cubic-bezier(0.33,1,0.68,1) 0s 1 normal none running;}}}@keyframes Overlay--motion-scaleFade{0%{opacity:0;transform:scale(0.5);}100%{opacity:1;transform:scale(1);}}@keyframes Overlay--motion-slideUp{from{transform:translateY(100%);}}@keyframes Overlay--motion-slideInRight{from{transform:translateX(-100%);}}@keyframes Overlay--motion-slideInLeft{from{transform:translateX(100%);}}",";"],(0,c.Jt)("colors.canvas.overlay"),(0,c.Jt)("shadows.overlay.shadow"),e=>{var t;return _[null!==(t=e.width)&&void 0!==t?t:"xlarge"]},e=>{var t;return j[null!==(t=e.height)&&void 0!==t?t:"auto"]},e=>{var t;return _[null!==(t=e.width)&&void 0!==t?t:"xlarge"]},e=>{var t;return j[null!==(t=e.height)&&void 0!==t?t:"auto"]},o.A),k=({dialogLabelId:e,title:t,subtitle:a,dialogDescriptionId:n,onClose:o})=>{let s=(0,r.useCallback)(()=>{o("close-button")},[o]);return r.createElement(T.Header,null,r.createElement(i.A,{display:"flex"},r.createElement(i.A,{display:"flex",px:2,py:"6px",flexDirection:"column",flexGrow:1},r.createElement(T.Title,{id:e},null!=t?t:"Dialog"),a&&r.createElement(T.Subtitle,{id:n},a)),r.createElement(T.CloseButton,{onClose:s})))};k.displayName="DefaultHeader";let N=({children:e})=>r.createElement(T.Body,null,e);N.displayName="DefaultBody";let S=({footerButtons:e})=>{let{containerRef:t}=(0,y.G)({bindKeys:m.z0.ArrowHorizontal|m.z0.Tab,focusInStrategy:"closest"});return e?r.createElement(T.Footer,{ref:t},r.createElement(T.Buttons,{buttons:e})):null},I={narrow:"center",regular:"center"},E=r.forwardRef((e,t)=>{let{title:a="Dialog",subtitle:n="",renderHeader:i,renderBody:o,renderFooter:l,onClose:c,role:d="dialog",width:m="xlarge",height:f="auto",footerButtons:g=[],position:y=I,returnFocusRef:j,initialFocusRef:_,sx:E}=e,C=(0,p.B)(),O=(0,p.B)(),z=(0,r.useRef)(null);for(let e of g)e.autoFocus&&(e.ref=z);let D={...e,title:a,subtitle:n,role:d,dialogLabelId:C,dialogDescriptionId:O},R=(0,r.useCallback)(e=>{e.target===e.currentTarget&&c("escape")},[c]),P=(0,r.useRef)(null);(0,s.T)(t,P);let L=(0,r.useRef)(null);(0,h.r)({containerRef:P,initialFocusRef:null!=_?_:z,restoreFocusOnCleanUp:null==j||!j.current,returnFocusRef:j}),(0,u.P)(e=>{c("escape"),e.preventDefault()},[c]),r.useEffect(()=>{let e=document.body.style.overflow||"";if("hidden"!==e)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[]);let T=(null!=i?i:k)(D),B=(null!=o?o:N)(D),U=(null!=l?l:S)(D),H="string"==typeof y?{"data-position-regular":y}:Object.fromEntries(Object.entries(y).map(([e,t])=>[`data-position-${e}`,t]));return r.createElement(r.Fragment,null,r.createElement(x.Z,null,r.createElement(w,v({ref:L},H,{onClick:R}),r.createElement(A,v({width:m,height:f,ref:P,role:d,"aria-labelledby":C,"aria-describedby":O,"aria-modal":!0},H,{sx:E}),T,r.createElement(b.k,{"aria-labelledby":C,className:"DialogOverflowWrapper"},B),U))))});E.displayName="Dialog";let C=n.Ay.div.withConfig({displayName:"Dialog__Header",componentId:"sc-uaxjsn-2"})(["box-shadow:0 1px 0 ",";padding:",";z-index:1;flex-shrink:0;",";"],(0,c.Jt)("colors.border.default"),(0,c.Jt)("space.2"),o.A),O=n.Ay.h1.withConfig({displayName:"Dialog__Title",componentId:"sc-uaxjsn-3"})(["font-size:",";font-weight:",";margin:0;",";"],(0,c.Jt)("fontSizes.1"),(0,c.Jt)("fontWeights.bold"),o.A),z=n.Ay.h2.withConfig({displayName:"Dialog__Subtitle",componentId:"sc-uaxjsn-4"})(["font-size:",";color:",";margin:0;margin-top:",";font-weight:normal;",";"],(0,c.Jt)("fontSizes.0"),(0,c.Jt)("colors.fg.muted"),(0,c.Jt)("space.1"),o.A),D=n.Ay.div.withConfig({displayName:"Dialog__Body",componentId:"sc-uaxjsn-5"})(["flex-grow:1;overflow:auto;padding:",";",";"],(0,c.Jt)("space.3"),o.A),R=n.Ay.div.withConfig({displayName:"Dialog__Footer",componentId:"sc-uaxjsn-6"})(["box-shadow:0 -1px 0 ",";padding:",";display:flex;flex-flow:wrap;justify-content:flex-end;gap:",";z-index:1;flex-shrink:0;",";"],(0,c.Jt)("colors.border.default"),(0,c.Jt)("space.3"),(0,c.Jt)("space.2"),o.A),P=(0,n.Ay)(l.Q).withConfig({displayName:"Dialog__DialogCloseButton",componentId:"sc-uaxjsn-7"})(["border-radius:4px;background:transparent;border:0;vertical-align:middle;color:",";padding:",";align-self:flex-start;line-height:normal;box-shadow:none;"],(0,c.Jt)("colors.fg.muted"),(0,c.Jt)("space.2")),L=({onClose:e})=>r.createElement(P,{"aria-label":"Close",onClick:e},r.createElement(f.A,{icon:g.uv5}));L.displayName="CloseButton";let T=Object.assign(E,{Header:C,Title:O,Subtitle:z,Body:D,Footer:R,Buttons:({buttons:e})=>{var t;let a=(0,d.L)(null===(t=e.find(e=>e.autoFocus))||void 0===t?void 0:t.ref),n=0,[i,o]=(0,r.useState)(0);return(0,r.useEffect)(()=>{if(1===i){var e;null===(e=a.current)||void 0===e||e.focus()}else o(i+1)},[a,i]),r.createElement(r.Fragment,null,e.map((e,t)=>{let{content:i,buttonType:o="default",autoFocus:s=!1,...c}=e;return r.createElement(l.Q,v({key:t},c,{variant:"normal"===o?"default":o,ref:s&&0===n?(n++,a):null}),i)}))},CloseButton:L})},85053:(e,t,a)=>{a.d(t,{A:()=>d});var r=a(96540),n=a(38267),i=a(57304),o=a(59299),s=a(44999);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(null,arguments)}let c=n.Ay.span.withConfig({displayName:"Label__StyledLabel",componentId:"sc-1dgcne-0"})(["align-items:center;background-color:transparent;border-width:1px;border-radius:999px;border-style:solid;display:inline-flex;font-weight:",";font-size:",";line-height:1;white-space:nowrap;",";",";",";"],(0,o.Jt)("fontWeights.bold"),(0,o.Jt)("fontSizes.0"),(0,i.Ox)({variants:{default:{borderColor:"border.default"},primary:{borderColor:"fg.default"},secondary:{borderColor:"border.muted",color:"fg.muted"},accent:{borderColor:"accent.emphasis",color:"accent.fg"},success:{borderColor:"success.emphasis",color:"success.fg"},attention:{borderColor:"attention.emphasis",color:"attention.fg"},severe:{borderColor:"severe.emphasis",color:"severe.fg"},danger:{borderColor:"danger.emphasis",color:"danger.fg"},done:{borderColor:"done.emphasis",color:"done.fg"},sponsors:{borderColor:"sponsors.emphasis",color:"sponsors.fg"}}}),(0,i.Ox)({prop:"size",variants:{small:{height:"20px",padding:"0 7px"},large:{height:"24px",padding:"0 10px"}}}),s.A),d=r.forwardRef(function({as:e,size:t="small",variant:a="default",...n},i){return r.createElement(c,l({as:e,size:t,variant:a,ref:i},n))})},30729:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(96540),n=a(38267),i=a(44999);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(null,arguments)}let s=r.forwardRef((e,t)=>{let{icon:a,...n}=e;return r.createElement(a,o({},n,{ref:t}))}),l=(0,n.Ay)(s).withConfig({displayName:"Octicon",componentId:"sc-9kayk9-0"})(["",""],({color:e,sx:t})=>(0,i.A)({sx:{color:e,...t}}))},69909:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(38267),n=a(59299),i=a(44999);let o=r.Ay.span.withConfig({displayName:"Text",componentId:"sc-17v1xeu-0"})(["",";",";",";"],n.K4,n.Sq,i.A)},58044:(e,t,a)=>{a.d(t,{Q:()=>i});var r=a(96540),n=a(7129);function i(e,t){let a=(0,r.useContext)(o),[i,s]=r.useState(()=>void 0!==a[e]?a[e]:void 0!==t?t:!!n.S&&window.matchMedia(e).matches);return(0,r.useEffect)(()=>{void 0!==a[e]&&s(a[e])},[a,e]),(0,r.useEffect)(()=>{if(void 0!==a[e])return;function t(e){s(e.matches)}let r=window.matchMedia(e);return r.addEventListener?r.addEventListener("change",t):r.addListener(t),s(r.matches),()=>{r.addEventListener?r.removeEventListener("change",t):r.removeListener(t)}},[a,e]),i}let o=(0,r.createContext)({})},7707:(e,t,a)=>{a.d(t,{DX:()=>n,W8:()=>i,tv:()=>o});var r=a(58044);let n={narrow:"(max-width: calc(768px - 0.02px))",regular:"(min-width: 768px)",wide:"(min-width: 1400px)"};function i(e){return"object"==typeof e&&Object.keys(e).some(e=>["narrow","regular","wide"].includes(e))}function o(e,t){let a=(0,r.Q)(n.narrow,!1),o=(0,r.Q)(n.regular,!1),s=(0,r.Q)(n.wide,!1);return i(e)?a&&"narrow"in e?e.narrow:s&&"wide"in e?e.wide:o&&"regular"in e?e.regular:t:e}},5278:(e,t,a)=>{a.d(t,{k:()=>l});var r=a(96540),n=a(75177),i=a(31456);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(null,arguments)}let s={position:"relative",overflow:"auto"};function l({"aria-labelledby":e,children:t,...a}){let l=r.useRef(null),c=(0,i.s)(l);return r.createElement(n.A,o({},a,c?{"aria-labelledby":e,role:"region",tabIndex:0}:{},{ref:l,sx:s}),t)}l.displayName="ScrollableRegion"},31456:(e,t,a)=>{a.d(t,{s:()=>n});var r=a(96540);function n(e){let[t,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(null===e.current)return;let t=new ResizeObserver(e=>{for(let t of e)a(t.target.scrollHeight>t.target.clientHeight||t.target.scrollWidth>t.target.clientWidth)});return t.observe(e.current),()=>{t.disconnect()}},[e]),t}},7129:(e,t,a)=>{a.d(t,{S:()=>r});let r=!!("undefined"!=typeof window&&window.document&&window.document.createElement)},65574:(e,t,a)=>{a.d(t,{D:()=>i});var r=a(7707),n=a(98232);function i(e,t,a){if(!(0,r.W8)(e))return{[t]:a(e)};{let r="narrow"in e?{[n.HP.narrow]:{[t]:a(e.narrow)}}:{},i="regular"in e?{[n.HP.regular]:{[t]:a(e.regular)}}:{},o="wide"in e?{[n.HP.wide]:{[t]:a(e.wide)}}:{};return!function(e){if("narrow"in e&&"regular"in e&&"wide"in e){let t=Object.values(e);return t.every(e=>e===t[0])}return!1}(e)?"regular"in e&&"wide"in e&&e.regular===e.wide?{...r,...i}:{...r,...i,...o}:{[t]:a(e.narrow)}}}},98232:(e,t,a)=>{a.d(t,{HP:()=>s});var r,n=a(71659);let i={xsmall:{width:"320px"},small:{width:n.A.breakpoints[0]},medium:{width:n.A.breakpoints[1]},large:{width:n.A.breakpoints[2]},xlarge:{width:n.A.breakpoints[3]},xxlarge:{width:"1400px"}};function o(e){return`@media screen and (min-width: ${e})`}let s={narrow:(r=i.medium.width,`@media screen and (max-width: calc(${r} - 0.02px))`),regular:o(i.medium.width),wide:o(i.xxlarge.width)}},56390:(e,t,a)=>{var r=a(7059),n=a(74848),i=a(59857),o=a(17909),s=a(30729),l=a(85053),c=a(38553),d=a(30631),u=a(96540),m=a(15806),p=a(87098),h=a(81613),f=a(22228),g=a(86079),y=a(57402),x=a(5225),b=a(63494),v=a(78478);async function w(e){return e.set("_method","put"),(await (0,v.DI)("/users/status",{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"},body:e})).json()}function j({onClose:e}){let[t,a]=(0,u.useState)(!1),r=(0,u.useRef)(null),o=(0,u.useId)(),s=(0,u.useCallback)(t=>{t.preventDefault(),e(w(new FormData(t.target)))},[e]),l=(0,u.useCallback)(()=>{w(new FormData),e(Promise.resolve({}))},[e]);return(0,u.useEffect)(()=>{let e=r.current;if(e)return e.addEventListener("load",t),()=>{e.removeEventListener("load",t)};function t(){a(!0)}},[r]),(0,n.jsx)(g.l,{width:"large",title:"Edit status",onClose:e,footerButtons:[{buttonType:"normal",content:"Clear status",onClick:l},{buttonType:"primary",type:"submit",content:"Set status",form:o,disabled:!t}],children:(0,n.jsx)("form",{id:o,onSubmit:s,className:"user-status-dialog-fragment js-user-status-container",children:(0,n.jsxs)("include-fragment",{src:"/users/status",accept:"text/fragment+html",ref:r,...(0,m.G)("user-status-dialog-include-fragment"),children:[(0,n.jsx)("p",{className:"text-center mt-3","data-hide-on-error":!0,children:(0,n.jsx)(c.A,{})}),(0,n.jsxs)("p",{className:"flash flash-error mb-0 mt-2","data-show-on-error":!0,hidden:!0,children:[(0,n.jsx)(i.AlertIcon,{}),"Sorry, something went wrong and we were not able to fetch the user settings form"]})]})})})}try{j.displayName||(j.displayName="UserStatusDialog")}catch{}let _={emojiIcon:"styles-module__emojiIcon--AXyd_",emojiContainer:"styles-module__emojiContainer--yBvrp"};var A=a(20053);function k(e){let{class:t}=e.attributes,a=(0,A.$)(t,_.emojiIcon),r={...e.attributes};switch(delete r.class,e.tag){case"g-emoji":return(0,u.createElement)(e.tag,{...r,class:a},e.raw);case"img":return(0,n.jsx)("img",{alt:"",src:e.imgPath,...r,className:a})}return(0,n.jsx)(n.Fragment,{})}try{k.displayName||(k.displayName="Emoji")}catch{}var N=a(21949);function S({title:e,error:t,onClose:a}){return(0,n.jsx)(g.l,{onClose:a,title:e,children:(0,n.jsx)(g.l.Body,{children:(0,n.jsxs)(N.A,{children:[(0,n.jsx)(N.A.Visual,{children:(0,n.jsx)(i.AlertIcon,{size:"medium",className:"fgColor-danger"})}),t]})})})}try{S.displayName||(S.displayName="ErrorDialog")}catch{}var I=a(281),E=a(87330),C=a(80577),O=a(47767),z=a(94686);function D({addAccountPath:e,canAddAccount:t,switchAccountPath:a,stashedAccounts:r,loginAccountPath:o,setError:s}){let l=`account-switcher-tooltip-id-${(0,u.useId)()}`,[c,d]=(0,u.useState)(!1),m=null===r,p=!m&&r.length>0;return(0,n.jsxs)(I.W,{open:c,onOpenChange:d,children:[(0,n.jsx)(I.W.Anchor,{children:(0,n.jsx)(C.m,{text:"Account switcher",type:"label",id:l,children:(0,n.jsx)(E.K,{unsafeDisableTooltip:!0,icon:i.ArrowSwitchIcon,"aria-labelledby":l,variant:"invisible"})})}),m?(0,n.jsx)(R,{}):p?(0,n.jsx)(T,{stashedAccounts:r,canAddAccount:t,addAccountPath:e,switchAccountPath:a,loginAccountPath:o,setError:s}):(0,n.jsx)(P,{addAccountPath:e})]})}function R(){return(0,n.jsx)(I.W.Overlay,{align:"end",children:(0,n.jsx)(o.l,{children:(0,n.jsxs)(o.l.Item,{children:[(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(c.A,{size:"small"})}),"Loading..."]})})})}function P({addAccountPath:e}){return(0,n.jsx)(I.W.Overlay,{align:"end",children:(0,n.jsx)(o.l,{children:(0,n.jsx)(L,{href:e})})})}function L({href:e,inactive:t}){return(0,n.jsxs)(o.l.LinkItem,{href:e||void 0,inactiveText:t||void 0,children:[(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(i.PersonAddIcon,{})}),"Add account"]})}function T({addAccountPath:e,canAddAccount:t,switchAccountPath:a,stashedAccounts:r,loginAccountPath:s,setError:l}){return(0,n.jsx)(I.W.Overlay,{align:"end",width:"small",children:(0,n.jsxs)(o.l,{children:[(0,n.jsxs)(o.l.Group,{children:[(0,n.jsx)(o.l.GroupHeading,{children:"Switch account"}),r.map(e=>"number"==typeof e.userSessionId?(0,n.jsx)(B,{switchAccountPath:a,account:e,setError:l},e.login):(0,n.jsx)(U,{loginAccountPath:s,account:e},e.login)),(0,n.jsx)(o.l.Divider,{})]}),(0,n.jsx)(L,{href:t?e:void 0,inactive:t?void 0:"Maximum accounts reached"}),(0,n.jsxs)(o.l.LinkItem,{href:"/logout",children:[(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(i.SignOutIcon,{})}),"Sign out..."]})]})})}function B({account:e,switchAccountPath:t,setError:a}){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.l.Item,{onSelect:()=>H(t,e.userSessionId,a),children:[(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(y.r,{src:e.avatarUrl,size:20})}),e.login,(0,n.jsx)(o.l.Description,{children:e.name})]})})}function U({account:e,loginAccountPath:t}){let a=(0,O.zy)(),r=(0,u.useMemo)(()=>{let a=new URL(t,z.fV.toString());return a.searchParams.set("login",e.login),a.searchParams.set("return_to",z.fV.toString()),a.toString()},[t,e.login,a.key]);return(0,n.jsxs)(o.l.LinkItem,{href:r,children:[(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(y.r,{src:e.avatarUrl,size:20,className:"inactive-user-avatar"})}),e.login,(0,n.jsx)(o.l.Description,{children:e.name})]})}async function H(e,t,a){try{let r=new FormData;r.append("user_session_id",String(t)),r.append("from","nav_panel");let n=await (0,v.DI)(e,{method:"POST",body:r,headers:{Accept:"application/json"}});if(n.ok)window.location.reload();else{let{error:e,reason:t}=await n.json();a(F(e,t))}}catch(e){a(F("An error occurred while switching accounts. Please try again."))}}function F(e,t){return{title:"Switch account",error:"enterprise access denied"===t?(0,n.jsx)(N.A.Description,{children:e}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.A.Heading,{children:"Unable to switch to the selected account."}),(0,n.jsx)(N.A.Description,{children:"Please try again. If the issue persists, try adding the account again."})]})}}try{D.displayName||(D.displayName="AccountSwitcher")}catch{}try{R.displayName||(R.displayName="AccountSwitcherOverlayLoading")}catch{}try{P.displayName||(P.displayName="AccountSwitcherOverlayEmpty")}catch{}try{L.displayName||(L.displayName="AddAccountLinkItem")}catch{}try{T.displayName||(T.displayName="AccountSwitcherOverlayHasAccounts")}catch{}try{B.displayName||(B.displayName="StashedAccountItem")}catch{}try{U.displayName||(U.displayName="InactiveStashedAccountItem")}catch{}var G=a(72620);let J=(0,x.A)(async function(e){let t=await fetch(e);if(!t.ok)throw Error(`Failed to fetch data from ${e}`);return t.json()}),M={fetchError:!0,userStatus:{},hasUnseenFeatures:!1,stashedAccounts:[]};function $({href:e,icon:t,analyticsCategory:a="Global navigation",analyticsAction:r,analyticsLabel:i,children:l}){let{sendClickAnalyticsEvent:c}=(0,b.S)(),d=(0,u.useCallback)(()=>{c({category:a,action:r,label:i})},[c,a,r,i]);return(0,n.jsxs)(o.l.LinkItem,{href:e,onClick:d,children:[(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(s.A,{icon:t})}),l]})}let V=(0,u.memo)(function({lazyLoadItemData:e,onClick:t}){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.l.Item,{...(0,m.G)("global-user-nav-set-status-item"),onSelect:t,children:[(0,n.jsx)(o.l.LeadingVisual,{children:e?.userStatus?.emojiAttributes?(0,n.jsx)(k,{...e?.userStatus.emojiAttributes}):(0,n.jsx)(s.A,{icon:i.SmileyIcon})}),e?(0,n.jsx)(p.oG,{className:_.emojiContainer,unverifiedHTML:e.userStatus.messageHtml||"Set status"}):(0,n.jsx)(h.O,{height:"md"})]})})});function W(e){let t=e.lazyLoadItemData?.enterpriseTrialUrl;return t?(0,n.jsxs)($,{href:t,icon:i.UploadIcon,analyticsCategory:"start_a_free_trial",analyticsAction:"click_to_set_up_enterprise_trial",analyticsLabel:"ref_loc:side_panel;ref_cta:try_enterprise",children:["Try Enterprise",(0,n.jsx)(o.l.TrailingVisual,{children:(0,n.jsx)(l.A,{variant:"primary",children:"Free"})})]}):(0,n.jsx)($,{href:"/account/choose?action=upgrade",icon:i.UploadIcon,analyticsAction:"UPGRADE_PLAN",children:"Upgrade"})}function Y({onClose:e,login:t}){return(0,n.jsx)(g.l,{title:"Feature preview dialog",sx:{width:960},onClose:e,renderBody:()=>(0,n.jsx)(g.l.Body,{className:"p-0",children:(0,n.jsxs)("include-fragment",{src:`/users/${t}/feature_previews`,children:[(0,n.jsx)("p",{className:"text-center mt-3","data-hide-on-error":!0,children:(0,n.jsx)(c.A,{})}),(0,n.jsxs)("p",{className:"flash flash-error mb-0 mt-2","data-show-on-error":!0,hidden:!0,children:[(0,n.jsx)(i.AlertIcon,{}),"Sorry, something went wrong and we were not able to fetch the feature previews"]})]})})})}function X(e){let[t,a]=(0,u.useState)(null),[r,c]=(0,u.useState)(!1),[m,p]=(0,u.useState)(!1),{onClose:h,owner:f}=e,x=`/${f.login}`,{sendClickAnalyticsEvent:v}=(0,b.S)(),w=(0,u.useCallback)(()=>{c(!0),v({category:"Global navigation",action:"USER_STATUS"})},[v]),_=(0,u.useCallback)(async e=>{if(c(!1),e&&"string"!=typeof e&&t)try{let r=await e;a({...t,userStatus:r})}catch(e){}},[t]),A=(0,u.useCallback)(()=>{p(!0),v({category:"Global navigation",action:"FEATURE_PREVIEW"})},[v]);(0,u.useEffect)(()=>{t||(async()=>{try{let t=await J(e.lazyLoadItemDataFetchUrl);a({fetchError:!1,...t})}catch(e){a(M)}})()},[e.lazyLoadItemDataFetchUrl,t]);let k=(0,u.useCallback)(({dialogLabelId:a})=>(0,n.jsxs)("div",{className:"d-flex pr-3 pl-3 pt-3",id:a,"aria-label":"User navigation",role:"heading","aria-level":1,children:[(0,n.jsx)("div",{className:"d-flex flex-1",children:(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)(y.r,{src:f.avatarUrl,size:32}),(0,n.jsxs)("div",{className:"lh-condensed overflow-hidden d-flex flex-column flex-justify-center ml-2 f5 mr-auto",children:[(0,n.jsx)("div",{className:"text-bold",children:(0,n.jsx)(d.A,{title:f.login,children:f.login})}),(0,n.jsx)("div",{className:"fgColor-muted",children:(0,n.jsx)(d.A,{title:f.name,children:f.name})})]})]})}),e.showAccountSwitcher&&(0,n.jsx)(D,{canAddAccount:e.canAddAccount,addAccountPath:e.addAccountPath,switchAccountPath:e.switchAccountPath,stashedAccounts:t?.stashedAccounts??null,loginAccountPath:e.loginAccountPath,setError:I}),(0,n.jsx)(g.l.CloseButton,{onClose:()=>h("close-button")})]}),[h,f,t?.stashedAccounts,e.canAddAccount,e.addAccountPath,e.switchAccountPath,e.loginAccountPath,e.showAccountSwitcher]),[N,I]=(0,u.useState)(!1);return N?(0,n.jsx)(S,{...N,onClose:()=>I(!1)}):(0,n.jsxs)(g.l,{onClose:e.onClose,width:"medium",position:"right",renderHeader:k,children:[r&&(0,n.jsx)(j,{onClose:_}),m&&(0,n.jsx)(Y,{onClose:()=>p(!1),login:e.owner.login}),(0,n.jsxs)(o.l,{variant:"full",children:[(0,n.jsx)(V,{lazyLoadItemData:t,onClick:w}),(0,n.jsx)(o.l.Divider,{}),(0,n.jsx)($,{href:x,icon:i.PersonIcon,analyticsAction:"PROFILE",children:"Your profile"}),(0,n.jsx)($,{href:`${x}?tab=repositories`,icon:i.RepoIcon,analyticsAction:"YOUR_REPOSITORIES",children:"Your repositories"}),(0,n.jsx)($,{href:"/github-copilot/signup",icon:i.CopilotIcon,analyticsCategory:"try_copilot",analyticsAction:"click_to_try_copilot",analyticsLabel:"ref_loc:side_panel;ref_cta:your_copilot",children:"Your Copilot"}),(0,n.jsx)($,{href:e.projectsPath,icon:i.ProjectIcon,analyticsAction:"YOUR_PROJECTS",children:"Your projects"}),(0,n.jsx)($,{href:`${x}?tab=stars`,icon:i.StarIcon,analyticsAction:"YOUR_STARS",children:"Your stars"}),e.showGists&&(0,n.jsx)($,{href:e.gistsUrl,icon:i.CodeSquareIcon,analyticsAction:"YOUR_GISTS",children:"Your gists"}),(0,n.jsx)($,{href:"/settings/organizations",icon:i.OrganizationIcon,analyticsAction:"YOUR_ORGANIZATIONS",children:"Your organizations"}),e.showEnterprises&&(0,n.jsx)($,{href:"/settings/enterprises",icon:i.GlobeIcon,analyticsCategory:"enterprises_more_discoverable",analyticsAction:"click_your_enterprises",analyticsLabel:"ref_loc:side_panel;ref_cta:your_enterprises;is_navigation_redesign:true",children:"Your enterprises"}),e.showEnterprise&&(0,n.jsx)($,{href:e.yourEnterpriseUrl,icon:i.GlobeIcon,analyticsAction:"YOUR_ENTERPRISE",children:"Your enterprise"}),e.showSponsors&&(0,n.jsx)($,{href:"/sponsors/accounts",icon:i.HeartIcon,analyticsAction:"SPONSORS",children:"Your sponsors"}),(0,n.jsx)(o.l.Divider,{}),(0,n.jsx)(G.O,{...e.createMenuProps}),(0,n.jsx)(W,{lazyLoadItemData:t}),e.showFeaturesPreviews&&(0,n.jsxs)(o.l.Item,{onSelect:A,children:[(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(s.A,{icon:i.BeakerIcon})}),t?.hasUnseenFeatures&&(0,n.jsx)(o.l.TrailingVisual,{children:(0,n.jsx)(l.A,{variant:"accent",children:"New"})}),"Feature preview"]}),(0,n.jsx)($,{href:"/settings/profile",icon:i.GearIcon,analyticsAction:"SETTINGS",children:"Settings"}),e.showEnterpriseSettings&&(0,n.jsx)($,{href:e.enterpriseSettingsUrl,icon:i.GlobeIcon,analyticsAction:"ENTERPRISE_SETTINGS",children:"Enterprise settings"}),(0,n.jsx)(o.l.Divider,{}),(0,n.jsx)($,{href:e.docsUrl,icon:i.BookIcon,analyticsAction:"DOCS",children:"GitHub Docs"}),(0,n.jsx)($,{href:e.supportUrl,icon:i.PeopleIcon,analyticsAction:"SUPPORT",children:"GitHub Support"}),(0,n.jsx)($,{href:"https://community.github.com",icon:i.CommentDiscussionIcon,analyticsAction:"COMMUNITY",children:"GitHub Community"}),(0,n.jsx)(o.l.Divider,{}),(0,n.jsx)($,{href:"/logout",icon:i.SignOutIcon,analyticsAction:"LOGOUT",children:"Sign out"})]})]})}function q(e){let{open:t,setOpen:a,ref:r}=(0,f.Mm)(e.reactPartialAnchor),i=(0,u.useCallback)(()=>{a(!1),setTimeout(()=>{r.current?.focus()})},[a,r]);return t?(0,n.jsx)(X,{...e,onClose:i}):(0,n.jsx)(n.Fragment,{})}function Q(e){return e.reactPartialAnchor?(0,n.jsx)(q,{...e,reactPartialAnchor:e.reactPartialAnchor}):(0,n.jsx)(X,{...e})}try{$.displayName||($.displayName="NavLink")}catch{}try{V.displayName||(V.displayName="UserStatusNavItem")}catch{}try{W.displayName||(W.displayName="UpgradeNavItem")}catch{}try{Y.displayName||(Y.displayName="FeaturePreviewDialog")}catch{}try{X.displayName||(X.displayName="GlobalUserNavDrawerDialog")}catch{}try{q.displayName||(q.displayName="ExternallyAnchoredGlobalUserNavDrawer")}catch{}try{Q.displayName||(Q.displayName="GlobalUserNavDrawer")}catch{}(0,r.k)("global-user-nav-drawer",{Component:Q})},15806:(e,t,a)=>{a.d(t,{G:()=>r});let r=e=>({"data-testid":e})},78478:(e,t,a)=>{function r(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let a={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:a})}function n(e,t){let a={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},n=t?.body?JSON.stringify(t.body):void 0;return r(e,{...t,body:n,headers:a})}function i(e,t={}){let a={...t.headers,"GitHub-Is-React":"true"};return r(e,{...t,headers:a})}function o(e,t){let a={...t?.headers??{},"GitHub-Is-React":"true"};return n(e,{...t,headers:a})}a.d(t,{DI:()=>r,QJ:()=>i,Sr:()=>o,lS:()=>n})},57402:(e,t,a)=>{a.d(t,{r:()=>s});var r=a(74848),n=a(94686),i=a(78209),o=a(96540);let s=(0,o.forwardRef)(function({src:e,size:t=20,...a},s){let l=(0,o.useMemo)(()=>{let a=new URL(e,n.fV.origin);return a.searchParams.has("size")||a.searchParams.has("s")||a.searchParams.set("size",String(2*Number(t))),a.toString()},[e,t]);return(0,r.jsx)(i.A,{ref:s,src:l,size:t,"data-testid":"github-avatar",...a})});try{s.displayName||(s.displayName="GitHubAvatar")}catch{}},87098:(e,t,a)=>{a.d(t,{mo:()=>h,oG:()=>u,yx:()=>m});var r,n=a(74848),i=a(75177),o=a(69909),s=a(42838),l=a.n(s),c=a(96540);function d(e){if("html"in e&&void 0!==e.html){let{html:t,...a}=e;return{safeHTML:t,props:a}}let{unverifiedHTML:t,unverifiedHTMLConfig:a,...r}=e,n={...a,RETURN_DOM:!1,RETURN_DOM_FRAGMENT:!1};return{safeHTML:l().sanitize(t,n),props:r}}let u=p(i.A);u.displayName="SafeHTMLBox";let m=p(o.A);function p(e){return(0,c.forwardRef)((t,a)=>{let{safeHTML:r,props:i}=d(t);return(0,n.jsx)(e,{ref:a,...i,dangerouslySetInnerHTML:r?{__html:r}:void 0})})}m.displayName="SafeHTMLText";let h=(0,c.forwardRef)((e,t)=>{let{safeHTML:a,props:r}=d(e);return(0,n.jsx)("div",{ref:t,...r,dangerouslySetInnerHTML:a?{__html:a}:void 0})});h.displayName="SafeHTMLDiv";try{(r=SafeHTMLComponent).displayName||(r.displayName="SafeHTMLComponent")}catch{}},81613:(e,t,a)=>{a.d(t,{O:()=>u});var r=a(75177),n=a(59299),i=a(44999),o=a(38267);let s=(0,o.i7)(["0%{transform:translateX(-100%);}50%{transform:translateX(100%);}100%{transform:translateX(100%);}"]),l=(0,o.AH)(["animation:"," 1.5s infinite linear;"],s),c=(0,o.i7)(["0%{opacity:.3;}10%{opacity:1;}100%{opacity:.3;}"]),d=(0,o.AH)(["animation:"," 2s infinite linear;"],c),u=(0,o.Ay)(r.A).withConfig({displayName:"LoadingSkeleton",componentId:"sc-bcbf24f9-0"})(["position:relative;overflow:hidden;mask-image:radial-gradient(white,black);",";&::after{",";background:linear-gradient(90deg,transparent,",",transparent);content:'';position:absolute;transform:translateX(-100%);bottom:0;left:0;right:0;top:0;}background-color:",";border-radius:",";display:block;height:1.2em;"," width:",";height:",";",""],({animationStyle:e})=>"pulse"===e&&d,({animationStyle:e})=>"pulse"!==e&&l,(0,n.Jt)("colors.neutral.subtle"),(0,n.Jt)("colors.neutral.subtle"),({theme:e,variant:t})=>{switch(t){case"rounded":return(0,n.Jt)("radii.1")(e);case"pill":return"100px";case"elliptical":return"50%";default:return"0"}},({variant:e})=>"elliptical"===e&&{borderRadius:"50%"},({width:e})=>{switch(e){case"random":return`${Math.floor(40*Math.random()+40)}%`;case"xl":return"32px";case"lg":return"24px";case"md":return"20px";case"sm":return"16px";default:return e}},({height:e})=>{switch(e){case"xl":return"32px";case"lg":return"24px";case"md":return"20px";case"sm":return"16px";default:return e}},i.A);try{u.displayName||(u.displayName="LoadingSkeleton")}catch{}}},e=>{var t=t=>e(e.s=t);e.O(0,["react-lib","vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_primer_octicons-react_di-b40d97","vendors-node_modules_primer_react_lib-esm_Box_Box_js","vendors-node_modules_primer_react_lib-esm_Button_Button_js","vendors-node_modules_primer_react_lib-esm_TooltipV2_Tooltip_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_clsx_dist_clsx_m_js-node_modules_primer_react_node_modules_primer_octico-c56103","vendors-node_modules_primer_react_lib-esm_ActionList_index_js","vendors-node_modules_primer_react_lib-esm_ActionMenu_ActionMenu_js-node_modules_primer_react_-5b2420","vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_primer_re-d6531f","ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c","ui_packages_react-core_register-partial_ts-ui_packages_global-create-menu_GlobalCreateMenu_tsx"],()=>t(56390)),e.O()}]);
//# sourceMappingURL=global-user-nav-drawer-87e1ab2c8260.js.map