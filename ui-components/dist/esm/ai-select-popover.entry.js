import { r as registerInstance, h, H as Host } from './index-e34d4d15.js';

const selectPopoverCss = ".sc-ai-select-popover-h{display:block;padding:8px 0;cursor:pointer}.item.sc-ai-select-popover{padding:5px 16px;min-height:20px}.item.sc-ai-select-popover:hover,.item.sc-ai-select-popover:active{background:rgba(220, 234, 249, 0.65)}.selected.sc-ai-select-popover{background:#f0f2f7}.selected.sc-ai-select-popover:hover,.selected.sc-ai-select-popover:active{background:rgba(220, 234, 249, 0.65)}.disabled.sc-ai-select-popover{color:#999;background:#fff;cursor:default}.disabled.sc-ai-select-popover:hover,.disabled.sc-ai-select-popover:active{color:#999;background:#fff;opacity:1}";

const SelectPopover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * 选项
     */
    this.options = [];
  }
  onSelect(ev) {
    const option = this.options.find(o => o.option === ev.target.value);
    if (option) {
      if (typeof option.handler === 'function') {
        option.handler();
      }
    }
  }
  render() {
    return (h(Host, null, this.options.map(option => h("div", { class: { 'item': true, 'selected': option.checked, 'disabled': option.disabled }, onClick: () => option.handler() }, option.text))));
  }
};
SelectPopover.style = selectPopoverCss;

export { SelectPopover as ai_select_popover };
