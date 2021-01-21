'use strict';

const index = require('./index-56afdc95.js');

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('ui-components.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["ai-popover.cjs",[[2,"ai-popover",{"overlayIndex":[2,"overlay-index"],"component":[1],"componentProps":[16],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"event":[8],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ai-button_3.cjs",[[4,"ai-button",{"text":[1],"disabled":[1028]}],[0,"ai-input",{"disabled":[4],"placeholder":[1],"readonly":[4],"type":[1],"value":[1025],"hasFocus":[32]}],[1,"ai-select",{"disabled":[4],"placeholder":[1],"selected":[1032],"compareWith":[1,"compare-with"],"isExpanded":[32],"open":[64]}]]],["ai-control.cjs",[[1,"ai-control"]]],["ai-select-option.cjs",[[1,"ai-select-option",{"disabled":[4],"option":[8]}]]],["ai-select-popover.cjs",[[2,"ai-select-popover",{"options":[16]},[[0,"aiChange","onSelect"]]]]],["ai-stringfy.cjs",[[1,"ai-stringfy",{"data":[8]}]]],["ai-backdrop.cjs",[[1,"ai-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]]], options);
});
