const e=e=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e);let t=0;const n=new WeakMap,o=(e=>({create:t=>s(e,t),dismiss:(t,n,o)=>r(document,t,n,e,o),getTop:async()=>i(document,e)}))("ai-popover"),a=e=>{const n=t++;e.overlayIndex=n,e.hasAttribute("id")||(e.id="ai-overlay-"+n)},s=(e,t)=>"undefined"!=typeof customElements?customElements.whenDefined(e).then((()=>{const n=document.createElement(e);return n.classList.add("overlay-hidden"),Object.assign(n,t),p(document).appendChild(n),n.componentOnReady()})):Promise.resolve(),r=(e,t,n,o,a)=>{const s=i(e,o,a);return s?s.dismiss(t,n):Promise.reject("overlay does not exist")},i=(e,t,n)=>{const o=((e,t)=>Array.from(e.querySelectorAll(t)).filter((e=>e.overlayIndex>0)))(e,t);return void 0===n?o[o.length-1]:o.find((e=>e.id===n))},c=async(e,t,n)=>{e.presented||(e.presented=!0,e.willPresent.emit(),await u(e,t,e.el,n)&&e.didPresent.emit(),e.didPresent.emit())},m=async(e,t,o,a,s)=>{if(!e.presented)return!1;e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:t,role:o}),await u(e,a,e.el,s),e.didDismiss.emit({data:t,role:o}),n.delete(e)}catch(e){console.error(e)}return e.el.remove(),!0},u=async(e,t,o,a)=>{o.classList.remove("overlay-hidden");const s=t(o.shadowRoot||e.el,a);e.keyboardClose&&s.beforeAddWrite((()=>{const e=o.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()}));const r=n.get(e)||[];return n.set(e,[...r,s]),await s.play(),!0},d=(e,t)=>{let n;const o=new Promise((e=>n=e));return y(e,t,(e=>{n(e.detail)})),o},y=(e,t,n)=>{const o=a=>{((e,t,n)=>{e.removeEventListener(t,n,void 0)})(e,t,o),n(a)};((e,t,n)=>{e.addEventListener(t,n,void 0)})(e,t,o)},p=e=>e.querySelector("ai-app")||e.body;export{a,c as b,m as d,d as e,o as p,e as r}