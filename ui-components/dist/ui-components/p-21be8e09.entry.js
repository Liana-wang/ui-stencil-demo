import{r as t,c as e,h as i,H as s,g as o}from"./p-2c82b12c.js";import{p as n}from"./p-7c4a2d2f.js";const r=class{constructor(i){t(this,i),this.aiClick=e(this,"aiClick",7),this.disabled=!1,this.handleClick=t=>{this.disabled?t.preventDefault():this.aiClick.emit(t)}}connectedCallback(){console.log("btn-value",this.btnValue)}render(){return i(s,null,i("span",null,this.btnValue&&this.btnValue.text?this.btnValue.text:""),i("button",{class:{btn:!0,"btn-disabled":this.disabled},onClick:this.handleClick},i("slot",{name:"btn-icon"}),this.text?this.text:i("slot",null)))}};r.style=":host{display:block}.btn{height:30px;padding:0 8px;border:1px solid #d3d4db;border-radius:4px;background-color:#fff;color:#505050;box-shadow:none;line-height:normal;text-align:center;outline:none;cursor:pointer;font-size:13px}.btn:hover{border-color:#d3d4db;background-color:rgba(228, 230, 237, 0.25)}.btn:active{background-color:rgba(228, 230, 237, 0.45)}.btn-disabled{border-color:rgba(211, 212, 219, 0.8);background-color:#fff;opacity:0.5;cursor:pointer}";const a=class{constructor(i){t(this,i),this.aiChange=e(this,"aiChange",7),this.aiInput=e(this,"aiInput",7),this.aiBlur=e(this,"aiBlur",7),this.placeholder="",this.type="text",this.value="",this.onInput=t=>{const e=t.target;e&&(this.value=e.value||""),this.aiInput.emit(t)},this.onBlur=t=>{this.aiBlur.emit(t)}}valueChanged(){this.aiChange.emit({value:null==this.value?this.value:this.value.toString()})}render(){return i(s,null,i("div",{class:"box"},i("input",{class:"ai-input",type:this.type,placeholder:this.placeholder,onInput:this.onInput,value:this.value,onBlur:this.onBlur})))}static get watchers(){return{value:["valueChanged"]}}};a.style=":host{display:block}.box{position:relative;display:inline-block;width:198px;padding:4px 10px 5px 10px;border:1px solid #d3d4db;border-radius:4px;background-color:#fff}.ai-input{padding:0;margin:0;box-shadow:none;border:none;line-height:normal;font-size:13px;outline:none}";const l=(t,e)=>{if(1===t.nodeType)return(t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e))).find((e=>e.value===t.value))},h=class{constructor(i){t(this,i),this.aiChange=e(this,"aiChange",7),this.aiCancel=e(this,"aiCancel",7),this.aiFocus=e(this,"aiFocus",7),this.aiBlur=e(this,"aiBlur",7),this.aiStyle=e(this,"aiStyle",7),this.inputId="ai-sel-"+x++,this.isExpanded=!1,this.disabled=!1,this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.aiFocus.emit()},this.onBlur=()=>{this.aiBlur.emit()}}disabledChanged(){this.emitStyle()}valueChanged(){this.updateOptions(),this.emitStyle()}async connectedCallback(){this.updateOptions(),this.updateOverlayOptions(),this.emitStyle(),this.mutationO=((t,e,i)=>{if("undefined"==typeof MutationObserver)return;const s=new MutationObserver((t=>{i(((t,e)=>{let i;t.forEach((t=>{for(let s=0;s<t.addedNodes.length;s++)i=l(t.addedNodes[s],e)||i}))})(t,"ai-select-option"))}));return s.observe(t,{childList:!0,subtree:!0}),s})(this.el,0,(async()=>{this.updateOverlayOptions()}))}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){}async open(t){if(this.disabled||this.isExpanded)return;const e=this.overlay=await this.createOverlay(t);return this.isExpanded=!0,e.onDidDismiss().then((()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()})),await e.present(),e}createOverlay(t){return this.openPopover(t)}updateOverlayOptions(){const t=this.overlay;if(!t)return;const e=this.childOpts,i=this.selected,s=t.querySelector("ai-select-popover");s&&(s.options=this.createPopoverOptions(e,i))}createPopoverOptions(t,e){return t.map((t=>{const i=d(t),s=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" ");return{text:t.textContent||"",cssClass:`${g} ${s}`,option:i,checked:c(i,e,this.compareWith),disabled:t.disabled,handler:()=>{this.selected=i,this.aiChange.emit({selected:i}),this.close()}}}))}async openPopover(t){const e=this.selected,i={component:"ai-select-popover",cssClass:["select-popover"],event:t,componentProps:{selected:e,options:this.createPopoverOptions(this.childOpts,e)}};return n.create(i)}close(){return this.overlay?(this.isExpanded=!1,this.overlay.dismiss()):Promise.resolve(!1)}updateOptions(){let t=!0;const{selected:e,childOpts:i,compareWith:s}=this;for(const o of i){const i=d(o),n=t&&c(e,i,s);o.selected=n,n&&(t=!1)}}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ai-select-option"))}getText(){return u(this.childOpts,this.selected,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.aiStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{disabled:t,inputId:e,isExpanded:o,placeholder:n}=this;let r=!1,a=this.getText();""===a&&null!=n&&(a=n,r=!0);const l=a;return i(s,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":t?"true":null,"aria-label":l,class:{"select-disabled":t,"ai-focused":o}},i("div",{"aria-hidden":"true",class:{"select-text":!0,"select-placeholder":r},part:r?"placeholder":"text"},a),i("div",{class:"select-icon",role:"presentation",part:"icon"},i("div",{class:"select-icon-inner"})),i("label",null,l),i("button",{type:"button",disabled:t,id:e,"aria-haspopup":"listbox","aria-expanded":""+o,onFocus:this.onFocus,onBlur:this.onBlur,ref:t=>this.focusEl=t}))}get el(){return o(this)}static get watchers(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],selected:["valueChanged"]}}},c=(t,e,i)=>void 0!==t&&(Array.isArray(t)?t.some((t=>p(t,e,i))):p(t,e,i)),d=t=>{const e=t.option;return void 0===e?t.textContent||"":e},p=(t,e,i)=>"function"==typeof i?i(t,e):"string"==typeof i?t[i]===e[i]:Array.isArray(e)?e.includes(t):t===e,u=(t,e,i)=>void 0===e?"":Array.isArray(e)?e.map((e=>b(t,e,i))).filter((t=>null!==t)).join(", "):b(t,e,i)||"",b=(t,e,i)=>{const s=t.find((t=>p(d(t),e,i)));return s?s.textContent:null};let x=0;const g="select-interface-option";h.style=":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding:6px;display:flex;position:relative;height:30px;border:1px solid #d3d4db;border-radius:4px;background-color:#fff;box-sizing:border-box;align-items:center;overflow:hidden;z-index:2}:host(:hover){border:1px solid #779eea}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ai-focused){border:1px solid #779eea;box-shadow:0 0 0 2px rgba(119, 158, 234, .35)}.select-placeholder{color:#444;opacity:0.8}label{display:flex;align-items:center;opacity:0}button{position:absolute;inset:0px;width:100%;height:100%;margin:0px;padding:0px;border:0px;outline:0px;clip:rect(0px, 0px, 0px, 0px);opacity:0;overflow:hidden;appearance:none}.select-icon{position:relative;opacity:.33;width:16px;height:16px;line-height:16px}.select-text{flex:1;min-width:16px;font-size:13px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{position:absolute;left:3px;top:50%;margin-top:-2px;width:0px;height:0px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentcolor;pointer-events:none}label{left:0px;top:0px;margin:0px;position:absolute;width:100%;height:100%;border:0px;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}";export{r as ai_button,a as ai_input,h as ai_select}