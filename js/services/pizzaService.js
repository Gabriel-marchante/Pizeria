export async function obtenirPizzes() {
    try {
        const response = await fetch("https://pizza-rest-server-production.up.railway.app/api/pizzeria/pizzes");
        const data = await response.json();
        return data.records || [];
    } catch (error) {
        console.error("Error obtenint les pizzes:", error);
        return [];
    }
}