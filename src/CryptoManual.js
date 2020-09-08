import { LitElement, html } from 'lit-element';
import './js/Components/HeaderComponent';
import './js/Components/CardInput';
import './js/Components/CardOptions';
import './js/Components/CardResult';
import './js/Components/CryptoInfo';

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
        <div class="grid-right">
          <card-options></card-options>
          <card-result></card-result>
        </div>
        <card-input .encryption=${this.encryption}></card-input>
      </div>
      
      <div class="mt-4 alert alert-dismissible alert-primary">
        Welcome to <strong>CryptoManual</strong>, a classic crypto website
      </div>
      
      <crypto-info></crypto-info>
    `;
  }
}
