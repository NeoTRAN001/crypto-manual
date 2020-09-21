import { LitElement, html, css } from 'lit-element';
import { CryptographyDictionary } from '../Scripts/CryptographyDictionary';

const cryptography = new CryptographyDictionary();

export class CardInput extends LitElement {

    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
        this.encryption = 'A1Z26';
        this.inputs = [];
        this.more = false;
    }
    
    static get properties() {
        return {
            encryption: { type: String },
            more: { type: Boolean },
            inputs: { type: Array }
        }
    }

    static get styles() {
        return css`
            :host {
                font-family: 'Josefin Sans';
            }
        `;
    }

    _cipher() {
        const message = this.querySelector('#message').value;
        const result = cryptography.main(message, this.encryption, this.inputs, true);
        this._result(result);
    }

    _decipher() {
        const message = this.querySelector('#message').value;
        const result = cryptography.main(message, this.encryption, this.inputs, false);
        this._result(result);
    }

    _result(message) {
        this.dispatchEvent(new CustomEvent('result', {
            detail: { message }, 
            bubbles: true, composed: true
        }));
    }

    _clean() {
        this.querySelector('#message').value = '';
    }

    render() {
        return html`
            <div class="card">
                <h4 class="card-header"> <i class="fa fa-shield-alt"></i> Encryption: ${ this.encryption }</h4>
                <div class="card-body">
                    <h4 class="card-title"><i class="fas fa-keyboard"></i> User Text</h4>
                    
                    ${this.more 
                        ? html`` 
                        : html`
                            ${this.inputs.map(option => html`
                            <div class="form-group">
                                <label for="${option}">${option}</label>
                                <input type="text" class="form-control" id="${option}" placeholder="Enter ${option}">
                            </div>
                            `)}
                        `
                     }

                    <div class="form-group">
                        <textarea id="message" rows="8" class="form-control" placeholder="Your text"></textarea>
                    </div>
                    <div class="form-group">
                        <button @click="${this._cipher}" type="button" class="btn btn-info">
                            <i class="fas fa-eye-slash"></i> Cipher
                        </button>
                        <button @click="${this._decipher} type="button" class="btn btn-dark">
                            <i class="fas fa-eye"></i> Decipher
                        </button>
                        <button @click="${this._clean}" type="button" class="btn btn-warning">
                            <i class="fas fa-trash-alt"></i> Clear
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('card-input', CardInput);