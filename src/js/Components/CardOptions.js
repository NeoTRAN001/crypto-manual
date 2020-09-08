import { LitElement, html } from 'lit-element';

export class CardOptions extends LitElement {

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
        <div class="card text-center">
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
                    <option selected>A1Z26</option>
                    <option value="1">Numerical Base</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('card-options', CardOptions);