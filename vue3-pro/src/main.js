import { createApp } from "vue";
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from "./App.vue";

import { AiVue3 } from '@ai.s/ui-components-vue3'

createApp(App).use(AiVue3, '#app');