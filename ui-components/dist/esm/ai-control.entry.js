import { r as registerInstance, h, H as Host } from './index-df92ec43.js';

const controlCss = ":host{display:block;padding:10px 10px}";

const AiControl = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
AiControl.style = controlCss;

export { AiControl as ai_control };
