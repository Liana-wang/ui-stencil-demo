'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-56afdc95.js');

const selectPopoverCss = ".sc-ai-select-popover-h{display:block;padding:8px 0;cursor:pointer}.item.sc-ai-select-popover{padding:5px 16px;min-height:20px}.item.sc-ai-select-popover:hover,.item.sc-ai-select-popover:active{background:rgba(220, 234, 249, 0.65)}.selected.sc-ai-select-popover{background:#f0f2f7}.selected.sc-ai-select-popover:hover,.selected.sc-ai-select-popover:active{background:rgba(220, 234, 249, 0.65)}.disabled.sc-ai-select-popover{color:#999;background:#fff;cursor:default}.disabled.sc-ai-select-popover:hover,.disabled.sc-ai-select-popover:active{color:#999;background:#fff;opacity:1}";

const SelectPopover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, this.options.map(option => index.h("div", { class: { 'item': true, 'selected': option.checked, 'disabled': option.disabled }, onClick: () => option.handler() }, option.text))));
  }
};
SelectPopover.style = selectPopoverCss;

exports.ai_select_popover = SelectPopover;
