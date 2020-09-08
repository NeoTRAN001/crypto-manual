import { LitElement, html } from 'lit-element';

export class CryptoInfo extends LitElement {
    
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="container mt-4">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">CryptoManual 1</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                </div>
            </div>
            <div class="container mt-4">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Team Wasp</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                </div>
            </div>
            <div class="container mt-4">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">LitElement</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                </div>
            </div>

        `;
    }
}

customElements.define('crypto-info', CryptoInfo);