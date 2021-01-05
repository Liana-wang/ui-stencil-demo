import { ComponentInterface } from '../../stencil-public-runtime';
export declare class SelectPopover implements ComponentInterface {
  /**
   * 选项
   */
  options: ReadonlyArray<any>;
  onSelect(ev: any): void;
  render(): any;
}
