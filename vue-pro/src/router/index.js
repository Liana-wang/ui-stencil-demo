import Vue from 'vue'
import Router from 'vue-router'
import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';
import HelloWorld from '@/components/HelloWorld'

applyPolyfills().then(() => {
  defineCustomElements();
});

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})


