/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@ai/ui-components';

import { applyPolyfills, defineCustomElements } from '@ai/ui-components/loader';

applyPolyfills().then(() => defineCustomElements());

const customElementTags: string[] = [
 'ai-button',
 'ai-input',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];


export const AiButton = /*@__PURE__*/ Vue.extend({

  props: {
    text: {} as PropOptions<Components.AiButton['text']>,
    disabled: {} as PropOptions<Components.AiButton['disabled']>,
  },


  render: createCommonRender('ai-button', ['aiClick']),
});


export const AiInput = /*@__PURE__*/ Vue.extend({

  props: {
    defaultValue: {} as PropOptions<Components.AiInput['defaultValue']>,
    placeholder: {} as PropOptions<Components.AiInput['placeholder']>,
    type: {} as PropOptions<Components.AiInput['type']>,
    value: {} as PropOptions<Components.AiInput['value']>,
  },

  model: {
    prop: 'value',
    event: 'aiChange'
  },

  render: createCommonRender('ai-input', ['aiChange', 'aiInput', 'aiBlur']),
});

