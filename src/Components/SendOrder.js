export default function SendOrder(foods, drinks, desserts, total) {
    let clientName = prompt("Digite seu nome");
    let clientAddress = prompt("Informe seu endereço");
    
    let nameFoods = foods.map(food => `${food.name} - (${food.amount})\n`);
    let nameDrinks = drinks.map(drink => `${drink.name} - (${drink.amount})\n`);
    let nameDesserts = desserts.map(dessert => `${dessert.name} - (${dessert.amount})\n`);
    
    let order = `Olá, gostaria de fazer o pedido:\n` + `- Prato(s): ${nameFoods}\n` + 
    `- Bebida(s): ${nameDrinks}\n` + `- Sobremesa(s): ${nameDesserts}\n` +
    `Total: R$ ${total}\n\n`+ `Nome: ${clientName}\n`+`Endereço: ${clientAddress}\n`;;

    const url = "https://wa.me/5592994939981?text=" + encodeURIComponent(order);
    window.open(url);
}