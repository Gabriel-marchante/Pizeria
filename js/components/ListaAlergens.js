export class LlistaAlergens extends HTMLElement {
    constructor() {
        super(); 
        this.attachShadow({ mode: 'open' }); 
    }
    connectedCallback() {        
        const alergens = this.getAttribute('alergens'); 
        this.render(alergens); 
    }

    render(alergens) {
        if (!alergens) {   
            this.shadowRoot.innerHTML = `
                <p>No hay alérgenos especificados.</p>
            `;            
        }

        const alergensArray = alergens.split(',');

        let llista = ''; 
        for (let i of alergensArray) { 
            const alergen = i.trim();
            llista += `
                <img src="./img/${alergen}.png" alt="${alergen}" title="${alergen}"
                style="width: 35px; height: 35px; margin: 2px;">
            `;
        }

        this.shadowRoot.innerHTML = `
            <style>
                div {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 10px;
                }
            </style>
            <div>${llista}</div>
        `;
    }
}

customElements.define('llista-alergens', LlistaAlergens);