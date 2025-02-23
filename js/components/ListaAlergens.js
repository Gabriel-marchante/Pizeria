class LlistaAlergens extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const alergens = JSON.parse(this.getAttribute("alergens")) || [];
        this.shadowRoot.innerHTML = `
            <ul>
                ${alergens.map(alergen => `<li>${alergen}</li>`).join("")}
            </ul>
        `;
    }
}
customElements.define("llista-alergens", LlistaAlergens);
