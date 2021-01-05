'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-78c9c8a6.js');

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["ai-popover.cjs",[[2,"ai-popover",{"overlayIndex":[2,"overlay-index"],"component":[1],"componentProps":[16],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ai-button_3.cjs",[[4,"ai-button",{"text":[1],"disabled":[1028],"value":[1032]}],[0,"ai-input",{"defaultValue":[1,"default-value"],"placeholder":[1],"type":[1],"value":[1025]}],[1,"ai-select",{"disabled":[4],"placeholder":[1],"value":[1032],"compareWith":[1,"compare-with"],"isExpanded":[32],"open":[64]}]]],["ai-control.cjs",[[1,"ai-control"]]],["ai-select-option.cjs",[[1,"ai-select-option",{"disabled":[4],"value":[8]}]]],["ai-select-popover.cjs",[[2,"ai-select-popover",{"options":[16]},[[0,"aiChange","onSelect"]]]]],["ai-backdrop.cjs",[[1,"ai-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
