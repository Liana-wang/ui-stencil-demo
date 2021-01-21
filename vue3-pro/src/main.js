import { createApp } from "vue";
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from "./App.vue";
import {
    applyPolyfills,
    defineCustomElements,
} from "@ai/ui-components/loader";
// import { AiVue3 } from '@ai/ui-components-vue3'

const ael = (el, eventName, cb, opts) => el.addEventListener(eventName.toLowerCase(), cb, opts);
const rel = (el, eventName, cb, opts) => el.removeEventListener(eventName.toLowerCase(), cb, opts);

const app = createApp(App);

applyPolyfills().then(() => {
    defineCustomElements(window, {
        ce: (eventName, opts) => new CustomEvent(eventName.toLowerCase(), opts),
        ael,
        rel
    }).then(() => {
        app.mount("#app");
    });
});

// import {
//     applyPolyfills,
//     defineCustomElements,
// } from "elwins-test-web-components/loader";

// const app = createApp(App);

// applyPolyfills().then(() => {
//     defineCustomElements().then(() => {
//         app.mount("#app");
//     });
// });

// import { AiVue3 } from '@ai/ui-components-vue3'

// createApp(App).use(AiVue3).mount("#app");