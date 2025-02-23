import { obtenirPizzes } from "./services/pizzaService.js";
import "./components/LlistaAlergens.js";
import "./components/pizzaCard.js";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("pizzas-container");
    try {
        const pizzes = await obtenirPizzes();
        pizzes.forEach(pizza => {
            const card = document.createElement("pizza-card");
            card.setAttribute("nom", pizza.nom);
            card.setAttribute("desc", pizza.desc || "Sense descripció");
            card.setAttribute("preu", pizza.preu ? pizza.preu.toFixed(2) + " €" : "Preu no disponible");
            card.setAttribute("vegetariana", pizza.vegetariana);
            card.setAttribute("alergens", JSON.stringify(pizza.alergens));
            card.setAttribute("img", pizza.img || "https://via.placeholder.com/200");
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error carregant les pizzes", error);
    }
});