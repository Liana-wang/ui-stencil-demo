import { C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-3f63a081.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if ( !(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-8de9f2ac.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["ai-popover",[[2,"ai-popover",{"overlayIndex":[2,"overlay-index"],"component":[1],"componentProps":[16],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"event":[8],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ai-button_3",[[1,"ai-button",{"type":[1],"htmlType":[1,"html-type"],"size":[1],"danger":[4],"ghost":[4],"block":[4],"shap":[1],"href":[1],"target":[1],"disabled":[1028]}],[0,"ai-input",{"disabled":[4],"placeholder":[1],"readonly":[4],"type":[1],"value":[1025],"hasFocus":[32]}],[1,"ai-select",{"disabled":[4],"placeholder":[1],"selected":[1032],"compareWith":[1,"compare-with"],"isExpanded":[32],"open":[64]}]]],["ai-control",[[1,"ai-control"]]],["ai-select-option",[[1,"ai-select-option",{"disabled":[4],"option":[8]}]]],["ai-select-popover",[[2,"ai-select-popover",{"options":[16]},[[0,"aiChange","onSelect"]]]]],["ai-stringfy",[[1,"ai-stringfy",{"data":[8]}]]],["ai-backdrop",[[1,"ai-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]]], options);
  });
};

export { defineCustomElements };
