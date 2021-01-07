import { createApp } from "vue";
import App from "./App.vue";
import {
    applyPolyfills,
    defineCustomElements,
} from "@ai/ui-components/loader";
import { AiVue3 } from '@ai/ui-components-vue3'

const app = createApp(App);

applyPolyfills().then(() => {
    defineCustomElements().then(() => {
        app.use(AiVue3).mount("#app");
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