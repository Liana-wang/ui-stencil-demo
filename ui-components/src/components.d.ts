/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AiButton {
        "disabled": boolean;
        "text": string;
    }
    interface AiControl {
    }
    interface AiInput {
        "defaultValue": string;
        "placeholder": string;
        "type": string;
        "value": string;
    }
}
declare global {
    interface HTMLAiButtonElement extends Components.AiButton, HTMLStencilElement {
    }
    var HTMLAiButtonElement: {
        prototype: HTMLAiButtonElement;
        new (): HTMLAiButtonElement;
    };
    interface HTMLAiControlElement extends Components.AiControl, HTMLStencilElement {
    }
    var HTMLAiControlElement: {
        prototype: HTMLAiControlElement;
        new (): HTMLAiControlElement;
    };
    interface HTMLAiInputElement extends Components.AiInput, HTMLStencilElement {
    }
    var HTMLAiInputElement: {
        prototype: HTMLAiInputElement;
        new (): HTMLAiInputElement;
    };
    interface HTMLElementTagNameMap {
        "ai-button": HTMLAiButtonElement;
        "ai-control": HTMLAiControlElement;
        "ai-input": HTMLAiInputElement;
    }
}
declare namespace LocalJSX {
    interface AiButton {
        "disabled"?: boolean;
        "onAiClick"?: (event: CustomEvent<MouseEvent>) => void;
        "text"?: string;
    }
    interface AiControl {
    }
    interface AiInput {
        "defaultValue"?: string;
        "onAiBlur"?: (event: CustomEvent<any>) => void;
        "onAiChange"?: (event: CustomEvent<any>) => void;
        "onAiInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        "placeholder"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface IntrinsicElements {
        "ai-button": AiButton;
        "ai-control": AiControl;
        "ai-input": AiInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ai-button": LocalJSX.AiButton & JSXBase.HTMLAttributes<HTMLAiButtonElement>;
            "ai-control": LocalJSX.AiControl & JSXBase.HTMLAttributes<HTMLAiControlElement>;
            "ai-input": LocalJSX.AiInput & JSXBase.HTMLAttributes<HTMLAiInputElement>;
        }
    }
}
