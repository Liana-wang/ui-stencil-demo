System.register(["./p-3a6f7bbd.system.js"],(function(t){"use strict";var e,i,r,s;return{setters:[function(t){e=t.r;i=t.c;r=t.h;s=t.H}],execute:function(){var o=function(){function t(){this.gestureId=0;this.requestedStart=new Map;this.disabledGestures=new Map;this.disabledScroll=new Set}t.prototype.createGesture=function(t){return new n(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)};t.prototype.createBlocker=function(t){if(t===void 0){t={}}return new a(this,this.newID(),t.disable,!!t.disableScroll)};t.prototype.start=function(t,e,i){if(!this.canStart(t)){this.requestedStart.delete(e);return false}this.requestedStart.set(e,i);return true};t.prototype.capture=function(t,e,i){if(!this.start(t,e,i)){return false}var r=this.requestedStart;var s=-1e4;r.forEach((function(t){s=Math.max(s,t)}));if(s===i){this.capturedId=e;r.clear();var o=new CustomEvent("aiGestureCaptured",{detail:{gestureName:t}});document.dispatchEvent(o);return true}r.delete(e);return false};t.prototype.release=function(t){this.requestedStart.delete(t);if(this.capturedId===t){this.capturedId=undefined}};t.prototype.disableGesture=function(t,e){var i=this.disabledGestures.get(t);if(i===undefined){i=new Set;this.disabledGestures.set(t,i)}i.add(e)};t.prototype.enableGesture=function(t,e){var i=this.disabledGestures.get(t);if(i!==undefined){i.delete(e)}};t.prototype.disableScroll=function(t){this.disabledScroll.add(t);if(this.disabledScroll.size===1){document.body.classList.add(l)}};t.prototype.enableScroll=function(t){this.disabledScroll.delete(t);if(this.disabledScroll.size===0){document.body.classList.remove(l)}};t.prototype.canStart=function(t){if(this.capturedId!==undefined){return false}if(this.isDisabled(t)){return false}return true};t.prototype.isCaptured=function(){return this.capturedId!==undefined};t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0};t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);if(e&&e.size>0){return true}return false};t.prototype.newID=function(){this.gestureId++;return this.gestureId};return t}();var n=function(){function t(t,e,i,r,s){this.id=e;this.name=i;this.disableScroll=s;this.priority=r*1e6+e;this.ctrl=t}t.prototype.canStart=function(){if(!this.ctrl){return false}return this.ctrl.canStart(this.name)};t.prototype.start=function(){if(!this.ctrl){return false}return this.ctrl.start(this.name,this.id,this.priority)};t.prototype.capture=function(){if(!this.ctrl){return false}var t=this.ctrl.capture(this.name,this.id,this.priority);if(t&&this.disableScroll){this.ctrl.disableScroll(this.id)}return t};t.prototype.release=function(){if(this.ctrl){this.ctrl.release(this.id);if(this.disableScroll){this.ctrl.enableScroll(this.id)}}};t.prototype.destroy=function(){this.release();this.ctrl=undefined};return t}();var a=function(){function t(t,e,i,r){this.id=e;this.disable=i;this.disableScroll=r;this.ctrl=t}t.prototype.block=function(){if(!this.ctrl){return}if(this.disable){for(var t=0,e=this.disable;t<e.length;t++){var i=e[t];this.ctrl.disableGesture(i,this.id)}}if(this.disableScroll){this.ctrl.disableScroll(this.id)}};t.prototype.unblock=function(){if(!this.ctrl){return}if(this.disable){for(var t=0,e=this.disable;t<e.length;t++){var i=e[t];this.ctrl.enableGesture(i,this.id)}}if(this.disableScroll){this.ctrl.enableScroll(this.id)}};t.prototype.destroy=function(){this.unblock();this.ctrl=undefined};return t}();var l="backdrop-no-scroll";var c=new o;var d=":host{display:block;position:absolute;top:0;left:0;bottom:0;right:0;background-color:#000;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:default;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}";var u=t("ai_backdrop",function(){function t(t){e(this,t);this.aiBackdropTap=i(this,"aiBackdropTap",7);this.blocker=c.createBlocker({disableScroll:true});this.visible=true;this.tappable=true;this.stopPropagation=true}t.prototype.connectedCallback=function(){if(this.stopPropagation){this.blocker.block()}};t.prototype.disconnectedCallback=function(){this.blocker.unblock()};t.prototype.onMouseDown=function(t){this.emitTap(t)};t.prototype.emitTap=function(t){if(this.stopPropagation){t.preventDefault();t.stopPropagation()}if(this.tappable){this.aiBackdropTap.emit()}};t.prototype.render=function(){return r(s,{tabindex:"-1",class:{"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})};return t}());u.style=d}}}));