import { LitElement, html } from 'lit-element';

export class CardResult extends LitElement {

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"><i class="fab fa-redhat"></i> Result</h4>
                    
                    <div class="form-group">
                        <textarea rows="4" class="form-control" placeholder="Your text"></textarea>
                    </div>

                    <button type="button" class="btn btn-success">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                </div>
            </div>
        `;
    }
}

customElements.define('card-result', CardResult);