/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@ai/ui-components';




const customElementTags: string[] = [
 'ai-button',
 'ai-input',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];


export const AiButton = /*@__PURE__*/ Vue.extend({

  props: {
    text: {} as PropOptions<Components.AiButton['text']>,
  },


  render: createCommonRender('ai-button', []),
});


export const AiInput = /*@__PURE__*/ Vue.extend({

  props: {
    color: {} as PropOptions<Components.AiInput['color']>,
    accept: {} as PropOptions<Components.AiInput['accept']>,
    autocapitalize: {} as PropOptions<Components.AiInput['autocapitalize']>,
    autocomplete: {} as PropOptions<Components.AiInput['autocomplete']>,
    autocorrect: {} as PropOptions<Components.AiInput['autocorrect']>,
    autofocus: {} as PropOptions<Components.AiInput['autofocus']>,
    clearInput: {} as PropOptions<Components.AiInput['clearInput']>,
    clearOnEdit: {} as PropOptions<Components.AiInput['clearOnEdit']>,
    disabled: {} as PropOptions<Components.AiInput['disabled']>,
    enterkeyhint: {} as PropOptions<Components.AiInput['enterkeyhint']>,
    inputmode: {} as PropOptions<Components.AiInput['inputmode']>,
    max: {} as PropOptions<Components.AiInput['max']>,
    maxlength: {} as PropOptions<Components.AiInput['maxlength']>,
    min: {} as PropOptions<Components.AiInput['min']>,
    minlength: {} as PropOptions<Components.AiInput['minlength']>,
    multiple: {} as PropOptions<Components.AiInput['multiple']>,
    name: {} as PropOptions<Components.AiInput['name']>,
    pattern: {} as PropOptions<Components.AiInput['pattern']>,
    placeholder: {} as PropOptions<Components.AiInput['placeholder']>,
    readonly: {} as PropOptions<Components.AiInput['readonly']>,
    required: {} as PropOptions<Components.AiInput['required']>,
    spellcheck: {} as PropOptions<Components.AiInput['spellcheck']>,
    step: {} as PropOptions<Components.AiInput['step']>,
    size: {} as PropOptions<Components.AiInput['size']>,
    type: {} as PropOptions<Components.AiInput['type']>,
    value: {} as PropOptions<Components.AiInput['value']>,
  },

  model: {
    prop: 'value',
    event: 'aiChange'
  },

  methods: {
    setFocus: createCommonMethod('setFocus') as Components.AiInput['setFocus'],
    getInputElement: createCommonMethod('getInputElement') as Components.AiInput['getInputElement'],
  },
  render: createCommonRender('ai-input', ['myInput', 'myChange', 'myBlur', 'myFocus']),
});

