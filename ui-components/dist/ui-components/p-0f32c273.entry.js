import{r as e,h as c,H as o}from"./p-2c82b12c.js";const s=class{constructor(c){e(this,c),this.options=[]}onSelect(e){const c=this.options.find((c=>c.value===e.target.value));c&&"function"==typeof c.handler&&c.handler()}render(){return c(o,null,this.options.map((e=>c("div",{class:{item:!0,selected:e.checked,disabled:e.disabled},onClick:()=>e.handler()},e.text))))}};s.style=".sc-ai-select-popover-h{display:block;padding:8px 0;cursor:pointer}.item.sc-ai-select-popover{padding:5px 16px;min-height:20px}.item.sc-ai-select-popover:hover,.item.sc-ai-select-popover:active{background:rgba(220, 234, 249, 0.65)}.selected.sc-ai-select-popover{background:#f0f2f7}.selected.sc-ai-select-popover:hover,.selected.sc-ai-select-popover:active{background:rgba(220, 234, 249, 0.65)}.disabled.sc-ai-select-popover{color:#999;background:#fff;cursor:default}.disabled.sc-ai-select-popover:hover,.disabled.sc-ai-select-popover:active{color:#999;background:#fff;opacity:1}";export{s as ai_select_popover}