import{p as plt,w as win,d as doc,N as NAMESPACE,a as promiseResolve,b as bootstrapLazy}from"./index-3f63a081.js";var getDynamicImportFunction=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var patchBrowser=function(){{plt.$cssShim$=win.__cssshim}var e=Array.from(doc.querySelectorAll("script")).find((function(e){return new RegExp("/"+NAMESPACE+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===NAMESPACE}));var o=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{o.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,win.location.href)).href;{patchDynamicImport(o.resourcesUrl,e)}if(!win.customElements){return import("./dom-424264d0.js").then((function(){return o}))}}return promiseResolve(o)};var patchDynamicImport=function(e,o){var t=getDynamicImportFunction(NAMESPACE);try{win[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var r=new Map;win[t]=function(i){var n=new URL(i,e).href;var a=r.get(n);if(!a){var s=doc.createElement("script");s.type="module";s.crossOrigin=o.crossOrigin;s.src=URL.createObjectURL(new Blob(["import * as m from '"+n+"'; window."+t+".m = m;"],{type:"application/javascript"}));a=new Promise((function(e){s.onload=function(){e(win[t].m);s.remove()}}));r.set(n,a);doc.head.appendChild(s)}return a}}};patchBrowser().then((function(e){return bootstrapLazy([["ai-popover",[[2,"ai-popover",{overlayIndex:[2,"overlay-index"],component:[1],componentProps:[16],backdropDismiss:[4,"backdrop-dismiss"],showBackdrop:[4,"show-backdrop"],event:[8],present:[64],dismiss:[64],onDidDismiss:[64],onWillDismiss:[64]}]]],["ai-button_3",[[1,"ai-button",{text:[1],disabled:[1028]}],[0,"ai-input",{disabled:[4],placeholder:[1],readonly:[4],type:[1],value:[1025],hasFocus:[32]}],[1,"ai-select",{disabled:[4],placeholder:[1],selected:[1032],compareWith:[1,"compare-with"],isExpanded:[32],open:[64]}]]],["ai-control",[[1,"ai-control"]]],["ai-select-option",[[1,"ai-select-option",{disabled:[4],option:[8]}]]],["ai-select-popover",[[2,"ai-select-popover",{options:[16]},[[0,"aiChange","onSelect"]]]]],["ai-stringfy",[[1,"ai-stringfy",{data:[8]}]]],["ai-backdrop",[[1,"ai-backdrop",{visible:[4],tappable:[4],stopPropagation:[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]]],e)}));