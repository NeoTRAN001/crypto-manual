import { LitElement, html, css } from 'lit-element';

export class HeaderComponent extends LitElement {

    static get styles() {
        return css`
            :host {
                width: 100%;
            }

            .header-text {
                margin: 0;
                font-family: 'Faster One', 'Josefin Sans', cursive;
                animation-name: authorAnimation;
                animation-duration: 3s;
                animation-iteration-count: infinite;
                animation-direction: alternate;
                color: #414141;
            }

            @keyframes authorAnimation {
                0% {
                    transform: scale(0.8);
                }
                100% {
                    transform: scale(1.1);
                }
            }
        `;
    }

    render() {
        return html`
            <center>
                <h1 class="header-text">CryptoManual 1</h1>
                <p  class="header-text">Team WASP</p>
            </center>
        `
    }
};


customElements.define('header-component', HeaderComponent);