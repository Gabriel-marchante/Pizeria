class PizzaCard extends HTMLElement {
    connectedCallback() {
        const pizza = JSON.parse(this.getAttribute('data-pizza'));
        const imageUrl = pizza.img ? `https://pizza-rest-server-production.up.railway.app${pizza.img}` : 'https://via.placeholder.com/400x200';

        const allergenImages = {
            'Gluten': 'gluten.png',
            'Lactosa': 'lactosa.png',
            'Frutos Secos': 'frutos-secos.png',
            'Huevo': 'huevo.png',
            'Soja': 'soja.png',
            'Pescado': 'pescado.png',
            'Mariscos': 'mariscos.png',
            'Cacahuetes': 'cacahuetes.png',
            'Altramuces': 'altramuces.png',
            'Sésamo': 'sesamo.png',
            'Mostaza': 'mostaza.png',
            'Apio': 'apio.png',
            'Dióxido de Azufre': 'dioxido-azufre.png',
            'Moluscos': 'moluscos.png',
        };

        const allergenImagesHTML = pizza.alergens.map(allergen => {
            const imageName = allergenImages[allergen];
            if (!imageName) {
                console.error(`No se encontró la imagen para el alérgeno: ${allergen}`);
                return '';
            }
            return `<img src="img/${imageName}" alt="${allergen}" class="allergen-image" onerror="console.error('Error cargando la imagen: img/${imageName}')">`;
        }).join('');

        this.innerHTML = `
            <div class="pizza-card">
                <img src="${imageUrl}" alt="${pizza.nom}" onerror="this.src='https://via.placeholder.com/400x200'">
                <h2>${pizza.nom}</h2>
                <p>${pizza.desc || "Sense descripció disponible"}</p>
                <p class="price">${pizza.preu ? pizza.preu.toFixed(2) + " €" : "Preu no disponible"}</p>
                <p><strong>Vegetariana:</strong> ${pizza.vegetariana ? "Sí" : "No"}</p>
                <div class="allergens-container">
                    <strong>Al·lèrgens:</strong>
                    ${pizza.alergens.length > 0 ? allergenImagesHTML : "Cap"}
                </div>
            </div>
        `;
    }
}

customElements.define('pizza-card', PizzaCard);