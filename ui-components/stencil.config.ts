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
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@ai/ui-components',
      directivesProxyFile: '../ui-components-angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings
    }),
    reactOutputTarget({
      componentCorePackage: '@ai/ui-components',
      proxiesFile: '../ui-components-react/src/components.ts',
      includePolyfills: true,
      includeDefineCustomElements: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@ai/ui-components',
      proxiesFile: '../ui-components-vue3/src/proxies.ts',
      includePolyfills: true,
      includeDefineCustomElements: true,
      componentModels: [
        {
          elements: ['ai-input'],
          event: 'aiChange',
          targetAttr: 'value',
        },
      ]
    }),
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