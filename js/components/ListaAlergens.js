class LlistaAlergens extends HTMLElement {
    connectedCallback() {
        const allergens = [
            { name: 'Gluten', image: 'img/gluten.png' },
            { name: 'Lactosa', image: 'img/lactosa.png' },
            { name: 'Frutos Secos', image: 'img/frutos-secos.png' },
        ];

        this.innerHTML = `
            <h3>Tipos de Alérgenos</h3>
            <div class="allergens-list">
                ${allergens.map(allergen => `
                    <div class="allergen-item">
                        <img src="${allergen.image}" alt="${allergen.name}">
                        <p>${allergen.name}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

customElements.define('llista-alergens', LlistaAlergens);
