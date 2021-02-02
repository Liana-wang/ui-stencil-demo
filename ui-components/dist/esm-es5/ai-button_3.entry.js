var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{l(i.next(e))}catch(t){o(t)}}function s(e){try{l(i["throw"](e))}catch(t){o(t)}}function l(e){e.done?n(e.value):r(e.value).then(a,s)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(s){a=[6,s];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};import{r as registerInstance,c as createEvent,h,H as Host,g as getElement}from"./index-3f63a081.js";import{p as popoverController}from"./overlays-e9675823.js";var buttonCss=":host{display:inline-block}.btn{height:30px;padding:0 8px;border:none;border-radius:4px;background:#6775CD;color:#fff;-webkit-box-shadow:none;box-shadow:none;line-height:normal;text-align:center;cursor:pointer;outline:none;font-size:13px}.btn:hover{-webkit-filter:saturate(.9) brightness(1.2);filter:saturate(.9) brightness(1.2)}.btn:active{-webkit-filter:saturate(.9) brightness(1.2);filter:saturate(.9) brightness(1.2)}.btn-disabled{border-color:rgba(211, 212, 219, 0.8);background-color:#fff;opacity:0.5;cursor:pointer}";var AiButton=function(){function e(e){var t=this;registerInstance(this,e);this.aiClick=createEvent(this,"aiClick",7);this.disabled=false;this.handleClick=function(e){if(t.disabled){e.preventDefault()}else{t.aiClick.emit(e)}}}e.prototype.render=function(){return h(Host,null,h("button",{class:{btn:true,"btn-disabled":this.disabled},onClick:this.handleClick},h("slot",{name:"btn-icon"}),this.text?this.text:h("slot",null)))};return e}();AiButton.style=buttonCss;var inputCss=":host{display:block}:host(.has-focus.has-value){visibility:visible}:host(.has-focus){pointer-events:none}.box{position:relative;display:inline-block;width:198px;padding:4px 10px 5px 10px;border:1px solid #d3d4db;border-radius:4px;background-color:#fff}.ai-input{padding:0;margin:0;-webkit-box-shadow:none;box-shadow:none;border:none;line-height:normal;font-size:13px;outline:none}";var AiInput=function(){function e(e){var t=this;registerInstance(this,e);this.aiChange=createEvent(this,"aiChange",7);this.aiInput=createEvent(this,"aiInput",7);this.aiBlur=createEvent(this,"aiBlur",7);this.aiFocus=createEvent(this,"aiFocus",7);this.hasFocus=false;this.disabled=false;this.placeholder="";this.readonly=false;this.type="text";this.value="";this.onInput=function(e){var n=e.target;if(n){t.value=n.value||""}t.aiInput.emit(e)};this.onBlur=function(){t.hasFocus=false;t.aiBlur.emit()};this.onFocus=function(){t.hasFocus=true;t.aiFocus.emit()}}e.prototype.valueChanged=function(){console.log("value",this.value);this.aiChange.emit({value:this.value})};e.prototype.getValue=function(){return this.value||""};e.prototype.hasValue=function(){return this.getValue().length>0};e.prototype.render=function(){return h(Host,{class:{"has-value":this.hasValue(),"has-focus":this.hasFocus}},h("div",{class:"box"},h("input",{class:"ai-input",type:this.type,placeholder:this.placeholder,onInput:this.onInput,value:this.value,readOnly:this.readonly,onBlur:this.onBlur,onFocus:this.onFocus})))};Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:false,configurable:true});return e}();AiInput.style=inputCss;var watchForOptions=function(e,t,n){if(typeof MutationObserver==="undefined"){return}var i=new MutationObserver((function(e){n(getSelectedOption(e,t))}));i.observe(e,{childList:true,subtree:true});return i};var getSelectedOption=function(e,t){var n;e.forEach((function(e){for(var i=0;i<e.addedNodes.length;i++){n=findCheckedOption(e.addedNodes[i],t)||n}}));return n};var findCheckedOption=function(e,t){if(e.nodeType!==1){return undefined}var n=e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t));return n.find((function(t){return t.value===e.value}))};var selectCss=":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding:6px;display:-ms-flexbox;display:flex;position:relative;height:30px;border:1px solid #d3d4db;border-radius:4px;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;overflow:hidden;z-index:2}:host(:hover){border:1px solid #779eea}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ai-focused){border:1px solid #779eea;-webkit-box-shadow:0 0 0 2px rgba(119, 158, 234, .35);box-shadow:0 0 0 2px rgba(119, 158, 234, .35)}.select-placeholder{color:#444;opacity:0.8}label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}button{position:absolute;inset:0px;width:100%;height:100%;margin:0px;padding:0px;border:0px;outline:0px;clip:rect(0px, 0px, 0px, 0px);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.select-icon{position:relative;opacity:.33;width:16px;height:16px;line-height:16px}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:13px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{position:absolute;left:3px;top:50%;margin-top:-2px;width:0px;height:0px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentcolor;pointer-events:none}label{left:0px;top:0px;margin:0px;position:absolute;width:100%;height:100%;border:0px;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}";var AiSelect=function(){function e(e){var t=this;registerInstance(this,e);this.aiChange=createEvent(this,"aiChange",7);this.aiCancel=createEvent(this,"aiCancel",7);this.aiFocus=createEvent(this,"aiFocus",7);this.aiBlur=createEvent(this,"aiBlur",7);this.aiStyle=createEvent(this,"aiStyle",7);this.inputId="ai-sel-"+selectIds++;this.isExpanded=false;this.disabled=false;this.onClick=function(e){t.setFocus();t.open(e)};this.onFocus=function(){t.aiFocus.emit()};this.onBlur=function(){t.aiBlur.emit()}}e.prototype.disabledChanged=function(){this.emitStyle()};e.prototype.valueChanged=function(){this.updateOptions();this.emitStyle()};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.updateOptions();this.updateOverlayOptions();this.emitStyle();this.mutationO=watchForOptions(this.el,"ai-select-option",(function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){this.updateOverlayOptions();return[2]}))}))}));return[2]}))}))};e.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};e.prototype.open=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;var i=this;return __generator(this,(function(r){switch(r.label){case 0:if(this.disabled||this.isExpanded){return[2,undefined]}n=this;return[4,this.createOverlay(e)];case 1:t=n.overlay=r.sent();this.isExpanded=true;t.onDidDismiss().then((function(){i.overlay=undefined;i.isExpanded=false;i.setFocus()}));return[4,t.present()];case 2:r.sent();return[2,t]}}))}))};e.prototype.createOverlay=function(e){return this.openPopover(e)};e.prototype.updateOverlayOptions=function(){var e=this.overlay;if(!e){return}var t=this.childOpts;var n=this.selected;var i=e.querySelector("ai-select-popover");if(i){i.options=this.createPopoverOptions(t,n)}};e.prototype.createPopoverOptions=function(e,t){var n=this;var i=e.map((function(e){var i=getOptionValue(e);var r=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var o=OPTION_CLASS+" "+r;return{text:e.textContent||"",cssClass:o,option:i,checked:isOptionSelected(i,t,n.compareWith),disabled:e.disabled,handler:function(){n.selected=i;n.aiChange.emit({selected:i});n.close()}}}));return i};e.prototype.openPopover=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;return __generator(this,(function(i){t=this.selected;n={component:"ai-select-popover",cssClass:["select-popover"],event:e,componentProps:{selected:t,options:this.createPopoverOptions(this.childOpts,t)}};return[2,popoverController.create(n)]}))}))};e.prototype.close=function(){if(!this.overlay){return Promise.resolve(false)}this.isExpanded=false;return this.overlay.dismiss()};e.prototype.updateOptions=function(){var e=true;var t=this,n=t.selected,i=t.childOpts,r=t.compareWith;for(var o=0,a=i;o<a.length;o++){var s=a[o];var l=getOptionValue(s);var u=e&&isOptionSelected(n,l,r);s.selected=u;if(u){e=false}}};e.prototype.hasValue=function(){return this.getText()!==""};Object.defineProperty(e.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("ai-select-option"))},enumerable:false,configurable:true});e.prototype.getText=function(){return generateText(this.childOpts,this.selected,this.compareWith)};e.prototype.setFocus=function(){if(this.focusEl){this.focusEl.focus()}};e.prototype.emitStyle=function(){this.aiStyle.emit({interactive:true,select:true,"has-placeholder":this.placeholder!=null,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})};e.prototype.render=function(){var e=this;var t=this,n=t.disabled,i=t.inputId,r=t.isExpanded,o=t.placeholder;var a=this.getText();var s=false;var l=a;if(l===""&&o!=null){l=o;s=true}var u={"select-text":true,"select-placeholder":s};var c=s?"placeholder":"text";var p=l;return h(Host,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":n?"true":null,"aria-label":p,class:{"select-disabled":n,"ai-focused":r}},h("div",{"aria-hidden":"true",class:u,part:c},l),h("div",{class:"select-icon",role:"presentation",part:"icon"},h("div",{class:"select-icon-inner"})),h("label",null,p),h("button",{type:"button",disabled:n,id:i,"aria-haspopup":"listbox","aria-expanded":""+r,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(t){return e.focusEl=t}}))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],selected:["valueChanged"]}},enumerable:false,configurable:true});return e}();var isOptionSelected=function(e,t,n){if(e===undefined){return false}if(Array.isArray(e)){return e.some((function(e){return compareOptions(e,t,n)}))}else{return compareOptions(e,t,n)}};var getOptionValue=function(e){var t=e.option;return t===undefined?e.textContent||"":t};var compareOptions=function(e,t,n){if(typeof n==="function"){return n(e,t)}else if(typeof n==="string"){return e[n]===t[n]}else{return Array.isArray(t)?t.includes(e):e===t}};var generateText=function(e,t,n){if(t===undefined){return""}if(Array.isArray(t)){return t.map((function(t){return textForValue(e,t,n)})).filter((function(e){return e!==null})).join(", ")}else{return textForValue(e,t,n)||""}};var textForValue=function(e,t,n){var i=e.find((function(e){return compareOptions(getOptionValue(e),t,n)}));return i?i.textContent:null};var selectIds=0;var OPTION_CLASS="select-interface-option";AiSelect.style=selectCss;export{AiButton as ai_button,AiInput as ai_input,AiSelect as ai_select};