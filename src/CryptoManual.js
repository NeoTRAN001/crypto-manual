import { LitElement, html, css } from 'lit-element';
import './HeaderComponent';
import './CardInput';

export class CryptoManual extends LitElement {

  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  render() {
    return html`
      <header-component></header-component>
      <div class="container grid">
        <card-input></card-input>
        <div></div>
      </div>
    `;
  }
}
