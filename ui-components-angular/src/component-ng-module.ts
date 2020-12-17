
import { NgModule } from "@angular/core";
import { defineCustomElements } from "@ai/ui-components/loader";
import { TextValueAccessor } from './directives/text-value-accessor';
import { AiButton, AiInput } from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
    // proxies
    AiButton,
    AiInput,

    // Value Accessors
    TextValueAccessor,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [],
    providers: []
})
export class ComponentNgModule { }