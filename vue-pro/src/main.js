// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/my-\w*/]

applyPolyfills().then(() => {
  defineCustomElements();
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
