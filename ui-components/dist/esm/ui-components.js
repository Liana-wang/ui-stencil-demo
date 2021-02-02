import { p as plt, w as win, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-3f63a081.js';

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    // @ts-ignore
    const scriptElm =  Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        ;
    const opts =  scriptElm['data-opts'] || {} ;
    if ( 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if ( !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-424264d0.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};

patchBrowser().then(options => {
  return bootstrapLazy([["ai-popover",[[2,"ai-popover",{"overlayIndex":[2,"overlay-index"],"component":[1],"componentProps":[16],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"event":[8],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],["ai-button_3",[[1,"ai-button",{"text":[1],"disabled":[1028]}],[0,"ai-input",{"disabled":[4],"placeholder":[1],"readonly":[4],"type":[1],"value":[1025],"hasFocus":[32]}],[1,"ai-select",{"disabled":[4],"placeholder":[1],"selected":[1032],"compareWith":[1,"compare-with"],"isExpanded":[32],"open":[64]}]]],["ai-control",[[1,"ai-control"]]],["ai-select-option",[[1,"ai-select-option",{"disabled":[4],"option":[8]}]]],["ai-select-popover",[[2,"ai-select-popover",{"options":[16]},[[0,"aiChange","onSelect"]]]]],["ai-stringfy",[[1,"ai-stringfy",{"data":[8]}]]],["ai-backdrop",[[1,"ai-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]]], options);
});
