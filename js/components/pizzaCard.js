import './ListaAlergens.js';

export class PizzaCard extends HTMLElement {
    connectedCallback() {
        const pizza = JSON.parse(this.getAttribute('data-pizza'));
        const imageUrl = pizza.img ? `https://pizza-rest-server-production.up.railway.app${pizza.img}` : 'https://via.placeholder.com/400x200';

        this.innerHTML = `
            <style> 
            .pizza-card {
                background: white;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 20px;
                width: 250px; 
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                margin: 10px;
            }

            .pizza-card img {
                width: 100%;
                height: 100%; 
                object-fit: cover; 
                border-radius: 8px;
            }

            .pizza-card h2 {
                margin: 10px 0;
                font-size: 1.5em;
            }

            .pizza-card p {
                margin: 5px 0;
                font-size: 1em;
            }

            .price-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                font-size: 1.2em;
                font-weight: bold;
                margin-top: 10px;
            }

            .price {
                color: green;
            }

            .total-price {
                color: #d9534f;
            }

            .counter {
                display: flex;
                align-items: center;
                margin-top: 10px;
            }

            .counter button {
                font-size: 20px;
                padding: 5px 10px;
                border: none;
                background-color: #007bff;
                color: white;
                cursor: pointer;
                border-radius: 5px;
            }

            .counter button:hover {
                background-color: #0056b3;
            }

            .counter span {
                font-size: 18px;
                margin: 0 10px;
                font-weight: bold;
            }

            </style>
            
            <div class="pizza-card">
<img src="${imageUrl}" alt="${pizza.nom}" onerror="this.src='https://media.istockphoto.com/id/1020464822/es/vector/ilustraci%C3%B3n-de-vector-de-comida-r%C3%A1pida-la-historieta-doodle-c%C3%B3mic-icono-comida-de-chatarra.jpg?s=612x612&w=0&k=20&c=GRDYs1Bnn6YyBSgXF0FLKx-t9HwHPpRwUsOmxGelIus='">                <h2>${pizza.nom}</h2>
                <p>${pizza.desc || "Sense descripció disponible"}</p>

                <div class="price-container">
                    <p class="price">${pizza.preu ? pizza.preu.toFixed(2) + " €" : "Preu no disponible"}</p>
                    <p class="total-price">Total: <span id="total-${pizza.nom.replace(/\s/g, '')}">0.00</span> €</p>
                </div>

                <div class="counter">
                    <button id="decrement-${pizza.nom.replace(/\s/g, '')}">−</button>
                    <span id="counter-${pizza.nom.replace(/\s/g, '')}">0</span>
                    <button id="increment-${pizza.nom.replace(/\s/g, '')}">+</button>
                </div>

                <p><strong>Vegetariana:</strong> ${pizza.vegetariana ? "Sí" : "No"}</p>
                <llista-alergens alergens="${pizza.alergens.join(',')}"></llista-alergens>
            </div>
        `;

        const contadorSpan = this.querySelector(`#counter-${pizza.nom.replace(/\s/g, '')}`);
        const totalPriceSpan = this.querySelector(`#total-${pizza.nom.replace(/\s/g, '')}`);
        const btnIncrement = this.querySelector(`#increment-${pizza.nom.replace(/\s/g, '')}`);
        const btnDecrement = this.querySelector(`#decrement-${pizza.nom.replace(/\s/g, '')}`);

        let cantidad = 0;
        const precioBase = pizza.preu || 0;

        btnIncrement.addEventListener("click", () => {
            cantidad++;
            actualizarPrecio();
        });

        btnDecrement.addEventListener("click", () => {
            if (cantidad > 0) {
                cantidad--;
                actualizarPrecio();
            }
        });

        function actualizarPrecio() {
            contadorSpan.textContent = cantidad;
            totalPriceSpan.textContent = (cantidad * precioBase).toFixed(2);
        }
    }
}

customElements.define('pizza-card', PizzaCard);
