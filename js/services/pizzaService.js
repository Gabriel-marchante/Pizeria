const api_url = "https://pizza-rest-server-production.up.railway.app/api/pizzeria/pizzes";

export class PizzaService {
    static async getPizzas() {
        const response = await fetch(api_url);
        const data = await response.json();
        return data.records || [];
    }
}