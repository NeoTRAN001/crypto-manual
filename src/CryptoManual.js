import { LitElement, html, css } from 'lit-element';
import './js/Components/HeaderComponent';
import './js/Components/CardInput';

export class CryptoManual extends LitElement {

  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      encryption: { type: String },
      inputs:     { type: Number },
      result:     { type: Array },
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
