import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['demo-component'],
    event: 'slideChanged',
    targetAttr: 'value',
    type: 'number'
  }
];

export const config: Config = {
  namespace: 'ui-components',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'ui-components',
      directivesProxyFile: '../ui-components-angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings
    }),
    reactOutputTarget({
      componentCorePackage: 'ui-components',
      proxiesFile: '../ui-components-react/src/components.ts'
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};