import { LitElement, html } from 'lit-element';

export class CardOptions extends LitElement {

    createRenderRoot() {
        return this;
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
                <select class="custom-select" id="inputGroupSelect01">
                    <option value="0" selected>A1Z26</option>
                    <option value="1">ROT13</option>
                    <option value="2">Atbash</option>
                    <option value="3">Escítala</option>
                    <option value="4">Polybios</option>
                    <option value="5">Repetition</option>
                    <option value="6">Vigenère</option>
                    <option value="7">Cesar</option>
                    <option value="8">NumericalBase</option>
                    <option value="9">Reverse</option>
                    <option value="10">Emoji</option>
                </select>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('card-options', CardOptions);