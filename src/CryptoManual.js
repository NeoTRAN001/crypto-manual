import { LitElement, html, css } from 'lit-element';
import './js/Components/HeaderComponent';
import './js/Components/CardInput';

export class CryptoManual extends LitElement {

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.encryption = 'Numerical Base';

    this.inputs = [{
      quantity: [{
        'base': 16
      }],
      text: 'Default text'
    }];

    this.result = [{
      quantity: [{
        'base': 16
      }],
      text: 'Default text'
    }];

    console.log(this.result);
  }

  static get properties() {
    return {
      encryption: { type: String },
      inputs:     { type: Array },
      result:     { type: Array },
    };
  }

  render() {
    return html`
      <header-component></header-component>
      <div class="container grid">
        <card-input .encryption=${this.encryption}></card-input>
        <div></div>
      </div>
    `;
  }
}
