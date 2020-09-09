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
    this.encryption = 'A1Z26';
    this.inputs = [];
    this.result = [];
  }

  static get properties() {
    return {
      encryption: { type: String },
      inputs:     { type: Array },
      result:     { type: Array },
    };
  }

  selectedMethod(method) {
    this.encryption = method;
    this.inputs = [];

    if(method == 'Escítala') 
      this.inputs = ['Rows', 'Columns'];
    else if (method == 'Vigenère')
      this.inputs = ['Keyword'];
    else if (method == 'Cesar')
      this.inputs = ['Key'];
    else if (method == 'NumericalBase')
      this.inputs = ['NumericalBase'];
    
  }

  render() {
    return html`
      <header-component></header-component>
      
      <div class="container grid">
        <div class="grid-right">
          <card-options @method="${m => this.selectedMethod(m.detail.method)}"></card-options>
          <card-result></card-result>
        </div>
        <card-input 
          .encryption=${this.encryption} 
          .inputs=${this.inputs}
          .more=${this.inputs.length ===  0}>
        </card-input>
      </div>

      <crypto-info .encryption=${this.encryption}></crypto-info>
    `;
  }
}
