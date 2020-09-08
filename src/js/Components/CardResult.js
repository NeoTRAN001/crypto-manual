import { LitElement, html } from 'lit-element';

export class CardResult extends LitElement {

    createRenderRoot() {
        return this;
    }

    render() {
        return html``;
    }
}

customElements.define('card-result', CardResult);