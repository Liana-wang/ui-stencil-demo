import { Component, Host, Listen, Prop, h } from '@stencil/core';
export class SelectPopover {
  constructor() {
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
  static get is() { return "ai-select-popover"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["select-popover.css"]
  }; }
  static get styleUrls() { return {
    "$": ["select-popover.css"]
  }; }
  static get properties() { return {
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ReadonlyArray<any>",
        "resolved": "readonly any[]",
        "references": {
          "ReadonlyArray": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "\u9009\u9879"
      },
      "defaultValue": "[]"
    }
  }; }
  static get listeners() { return [{
      "name": "aiChange",
      "method": "onSelect",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
