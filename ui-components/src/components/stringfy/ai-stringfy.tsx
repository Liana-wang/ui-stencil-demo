import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ai-stringfy',
  styleUrl: 'ai-stringfy.css',
  shadow: true,
})
export class AiStringfy {
  /** data */
  @Prop({ reflect: false }) data: any;

  render() {
    return <div>{JSON.stringify(this.data)}</div>;
  }

}
