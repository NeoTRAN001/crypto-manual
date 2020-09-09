import { LitElement, html } from 'lit-element';

export class CardOptions extends LitElement {

    createRenderRoot() {
        return this;
    }

    selectedMethod() {
        console.log(this.querySelector('#selectMethods').value);
    }

    render() {
        return html`
        <div class="card">
            <div class="card-header">
                <h4>
                    <i class="fas fa-book-dead"></i>
                    Methods
                </h4>
            </div>
            <div class="card-body">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Select</label>
                </div>
                <select @change="${this.selectedMethod}" id="selectMethods" class="custom-select" id="inputGroupSelect01">
                    <option selected>A1Z26</option>
                    <option>ROT13</option>
                    <option>Atbash</option>
                    <option>Escítala</option>
                    <option>Polybios</option>
                    <option>Repetition</option>
                    <option>Vigenère</option>
                    <option>Cesar</option>
                    <option>NumericalBase</option>
                    <option>Reverse</option>
                    <option>Emoji</option>
                </select>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('card-options', CardOptions);