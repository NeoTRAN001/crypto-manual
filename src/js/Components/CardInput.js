import { LitElement, html, css } from 'lit-element';

export class CardInput extends LitElement {

    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
        this.encryption = 'A1Z26';
        this.more = false;
    }
    
    static get properties() {
        return {
            encryption: { type: String },
            more: { type: Boolean }
        }
    }

    static get styles() {
        return css`
            :host {
                font-family: 'Josefin Sans';
            }
        `;
    }

    render() {
        return html`
            <div class="card">
                <h4 class="card-header"> <i class="fa fa-shield-alt"></i> Encryption: ${ this.encryption }</h4>
                <div class="card-body">
                    <h4 class="card-title"><i class="fas fa-keyboard"></i> User Text</h4>
                    
                    ${this.more 
                        ? html`` : html``
                     }

                    <div class="form-group">
                        <textarea rows="8" class="form-control" placeholder="Your text"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-info">
                        <i class="fas fa-eye-slash"></i> Cipher
                        </button>
                        <button type="button" class="btn btn-dark">
                            <i class="fas fa-eye"></i> Decipher
                        </button>
                        <button type="button" class="btn btn-warning">
                            <i class="fas fa-trash-alt"></i> Clear
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('card-input', CardInput);