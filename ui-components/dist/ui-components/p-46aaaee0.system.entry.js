System.register(["./p-3a6f7bbd.system.js"],(function(e){"use strict";var t,o,r;return{setters:[function(e){t=e.r;o=e.h;r=e.H}],execute:function(){var c=".sc-ai-select-popover-h{display:block;padding:8px 0;cursor:pointer}.item.sc-ai-select-popover{padding:5px 16px;min-height:20px}.item.sc-ai-select-popover:hover,.item.sc-ai-select-popover:active{background:rgba(220, 234, 249, 0.65)}.selected.sc-ai-select-popover{background:#f0f2f7}.selected.sc-ai-select-popover:hover,.selected.sc-ai-select-popover:active{background:rgba(220, 234, 249, 0.65)}.disabled.sc-ai-select-popover{color:#999;background:#fff;cursor:default}.disabled.sc-ai-select-popover:hover,.disabled.sc-ai-select-popover:active{color:#999;background:#fff;opacity:1}";var i=e("ai_select_popover",function(){function e(e){t(this,e);this.options=[]}e.prototype.onSelect=function(e){var t=this.options.find((function(t){return t.option===e.target.value}));if(t){if(typeof t.handler==="function"){t.handler()}}};e.prototype.render=function(){return o(r,null,this.options.map((function(e){return o("div",{class:{item:true,selected:e.checked,disabled:e.disabled},onClick:function(){return e.handler()}},e.text)})))};return e}());i.style=c}}}));