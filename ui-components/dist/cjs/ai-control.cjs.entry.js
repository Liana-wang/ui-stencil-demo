'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-78c9c8a6.js');

const controlCss = ":host{display:block;padding:10px 10px}";

const AiControl = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
AiControl.style = controlCss;

exports.ai_control = AiControl;
