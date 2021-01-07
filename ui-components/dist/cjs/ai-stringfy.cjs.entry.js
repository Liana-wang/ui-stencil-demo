'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-78c9c8a6.js');

const aiStringfyCss = ":host{display:block}";

const AiStringfy = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("div", null, JSON.stringify(this.data));
  }
};
AiStringfy.style = aiStringfyCss;

exports.ai_stringfy = AiStringfy;
