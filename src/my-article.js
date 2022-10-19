import { LitElement, html, css } from 'lit-element';

export class MyArticle extends LitElement {

    static get styles() {
        return css `
        article{
            padding: 20px;
            font-family: 'Open Sans', sans-serif;
        }
        `
    }
    render() {
        return html `
        <article>
            <p>
                Manage complexity by building large, complex components
                out of smaller, simpler components that do one thing well
            </p>
        </article>
        `;
    }

}
customElements.define('my-article', MyArticle);