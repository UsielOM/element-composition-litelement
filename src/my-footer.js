import { LitElement, html, css } from 'lit-element';

export class MyFooter extends LitElement {

    static get styles() {
        return css `
        :host{

            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
        }
        footer{
            display: flex;
            justify-content: cente;
            font-family: Manrope, sans-serif;
        }
        `
    }

    render() {
        return html `
        <footer>THE END</footer>
        `;
    }
}
customElements.define('my-footer', MyFooter);