export type ComponentRef = Function | HTMLElement | string | null;
export type ComponentProps<T = null> = { [key: string]: any };

export type BackButtonEvent = CustomEvent<BackButtonEventDetail>;
export interface BackButtonEventDetail {
    register(priority: number, handler: (processNextHandler: () => void) => Promise<any> | void): void;
}
export interface StyleEventDetail {
    [styleName: string]: boolean;
}