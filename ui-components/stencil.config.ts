import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['ai-input'],
    event: 'aiChange',
    targetAttr: 'value',
    type: 'text'
  }
];

export const config: Config = {
  namespace: 'ui-components',
  buildEs5: 'prod',
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  },
  outputTargets: [
    // angularOutputTarget({
    //   componentCorePackage: '@ai/ui-components',
    //   directivesProxyFile: '../ui-components-angular/src/directives/proxies.ts',
    //   valueAccessorConfigs: angularValueAccessorBindings
    // }),
    reactOutputTarget({
      componentCorePackage: '@ai/ui-components',
      proxiesFile: '../ui-components-react/src/components.ts',
      includePolyfills: true,
      includeDefineCustomElements: true,
    }),
    // vueOutputTarget({
    //   componentCorePackage: '@ai/ui-components',
    //   proxiesFile: '../ui-components-vue3/src/proxies.ts',
    //   includePolyfills: true,
    //   includeDefineCustomElements: true,
    //   componentModels: [
    //     {
    //       elements: ['ai-input'],
    //       event: 'aiChange',
    //       targetAttr: 'value',
    //     },
    //   ]
    // }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      strict: true
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};