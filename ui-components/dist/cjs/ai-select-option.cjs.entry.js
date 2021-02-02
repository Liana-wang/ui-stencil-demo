'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ddea3caa.js');

const selectOptionCss = ":host{display:none}";

const AiSelectOption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inputId = `ai-selopt-${selectOptionIds++}`;
    /**
     * 是否禁用
     */
    this.disabled = false;
  }
  render() {
    return (index.h(index.Host, { role: "option", id: this.inputId }));
  }
  get el() { return index.getElement(this); }
};
let selectOptionIds = 0;
AiSelectOption.style = selectOptionCss;

exports.ai_select_option = AiSelectOption;
