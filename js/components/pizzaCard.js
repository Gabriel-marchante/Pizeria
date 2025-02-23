class PizzaCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .card { border: 1px solid #ccc; padding: 10px; margin: 10px; }
                img { width: 100px; height: 100px; }
            </style>
            <div class="card">
                <img src="${this.getAttribute("img")}" alt="${this.getAttribute("nom")}">
                <h2>${this.getAttribute("nom")}</h2>
                <p>${this.getAttribute("desc")}</p>
                <p><strong>Preu:</strong> ${this.getAttribute("preu")}</p>
                <p><strong>Vegetariana:</strong> ${this.getAttribute("vegetariana") === "true" ? "Sí" : "No"}</p>
                <p><strong>Al·lèrgens:</strong> ${JSON.parse(this.getAttribute("alergens")).join(", ") || "Cap"}</p>
            </div>
        `;
    }
}
customElements.define("pizza-card", PizzaCard);