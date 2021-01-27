import { r as registerInstance, h, g as getElement, H as Host } from './index-e34d4d15.js';

const selectOptionCss = ":host{display:none}";

const AiSelectOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputId = `ai-selopt-${selectOptionIds++}`;
    /**
     * 是否禁用
     */
    this.disabled = false;
  }
  render() {
    return (h(Host, { role: "option", id: this.inputId }));
  }
  get el() { return getElement(this); }
};
let selectOptionIds = 0;
AiSelectOption.style = selectOptionCss;

export { AiSelectOption as ai_select_option };
