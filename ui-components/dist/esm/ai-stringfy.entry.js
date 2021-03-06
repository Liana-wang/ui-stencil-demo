import { r as registerInstance, h } from './index-3f63a081.js';

const aiStringfyCss = ":host{display:block}";

const AiStringfy = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", null, JSON.stringify(this.data));
  }
};
AiStringfy.style = aiStringfyCss;

export { AiStringfy as ai_stringfy };
