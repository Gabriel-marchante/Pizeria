import { PizzaService } from './services/pizzaService.js';
import './components/pizzaCard.js';

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("pizzas-container");

    try {
        const pizzas = await PizzaService.getPizzas();

        if (pizzas.length > 0) {
            let row = document.createElement("div");
            row.classList.add("row");
            container.appendChild(row);

            pizzas.forEach((pizza, index) => {
                if (index % 2 === 0 && index !== 0) {
                    row = document.createElement("div");
                    row.classList.add("row");
                    container.appendChild(row);
                }

                const pizzaCard = document.createElement('pizza-card');
                pizzaCard.setAttribute('data-pizza', JSON.stringify(pizza));
                row.appendChild(pizzaCard);
            });
        } else {
            container.innerHTML = "<p>No s'han trobat pizzes.</p>";
        }
    } catch (error) {
        console.error("Error obtenint les pizzes:", error);
        container.innerHTML = "<p>Error carregant les pizzes.</p>";
    }
});