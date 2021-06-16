import { html, css, LitElement, customElement } from 'lit-element';
import '../src/plant-tracker';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <plant-tracker title="Hello">
        <div slot="my-slot">Some LightDOM Content</div>
      </plant-tracker>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--your-webcomponent-text-color, #000);
    }
  `;
}
