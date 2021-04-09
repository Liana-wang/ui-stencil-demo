'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ddea3caa.js');

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if ( !(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-32af3d0c.js'); }).then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
                return index.plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["ai-popover.cjs",[[2,"ai-popover",{"overlayIndex":[2,"overlay-index"],"component":[1],"componentProps":[16],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"event":[8],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ai-button_3.cjs",[[1,"ai-button",{"type":[1],"htmlType":[1,"html-type"],"size":[1],"danger":[4],"ghost":[4],"block":[4],"shap":[1],"href":[1],"target":[1],"disabled":[1028]}],[1,"ai-input",{"allowClear":[4,"allow-clear"],"bordered":[4],"defaultValue":[1,"default-value"],"disabled":[1028],"maxLength":[2,"max-length"],"hasPrefix":[4,"has-prefix"],"hasSuffix":[16],"placeholder":[1],"readonly":[4],"value":[1025],"focused":[32]}],[1,"ai-select",{"disabled":[4],"placeholder":[1],"selected":[1032],"compareWith":[1,"compare-with"],"isExpanded":[32],"open":[64]}]]],["ai-control.cjs",[[1,"ai-control"]]],["ai-select-option.cjs",[[1,"ai-select-option",{"disabled":[4],"option":[8]}]]],["ai-select-popover.cjs",[[2,"ai-select-popover",{"options":[16]},[[0,"aiChange","onSelect"]]]]],["ai-stringfy.cjs",[[1,"ai-stringfy",{"data":[8]}]]],["ai-backdrop.cjs",[[1,"ai-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
