// Stock Management
let stock = {
    tea: 50,
    coffee: 50,
    sugar: 30,
    milk: 40,
    cups: 100
};

// Prices
const teaPrice = 20;
const coffeePrice = 30;

// Making Costs
const teaCost = 10;
const coffeeCost = 15;

// Sales counters
let teaCount = 0;
let coffeeCount = 0;
let totalSelling = 0;
let totalCost = 0;

function sellDrink(type, withSugar) {

    const teaPowderUsed = 2;
    const coffeePowderUsed = 2;

    // Check common stock
    if (stock.cups <= 0 || stock.milk <= 0) {
        alert("Stock not sufficient!");
        return;
    }

    // Check powder stock
    if (type === "tea" && stock.tea < teaPowderUsed) {
        alert("Not enough tea powder!");
        return;
    }

    if (type === "coffee" && stock.coffee < coffeePowderUsed) {
        alert("Not enough coffee powder!");
        return;
    }

    // Check sugar if selected
    if (withSugar && stock.sugar <= 0) {
        alert("Sugar not available!");
        return;
    }

    // Reduce stock
    stock.cups--;
    stock.milk--;

    if (type === "tea") {
        stock.tea -= teaPowderUsed;
    } else {
        stock.coffee -= coffeePowderUsed;
    }

    if (withSugar) stock.sugar--;

    // Update sales
    if (type === "tea") {
        teaCount++;
        totalSelling += teaPrice;
        totalCost += teaCost;
    } else {
        coffeeCount++;
        totalSelling += coffeePrice;
        totalCost += coffeeCost;
    }

    updateDisplay();
}

function updateDisplay() {
    document.getElementById("teaStock").innerText = stock.tea;
    document.getElementById("coffeeStock").innerText = stock.coffee;
    document.getElementById("sugarStock").innerText = stock.sugar;
    document.getElementById("milkStock").innerText = stock.milk;
    document.getElementById("cupStock").innerText = stock.cups;

    document.getElementById("teaSold").innerText = teaCount;
    document.getElementById("coffeeSold").innerText = coffeeCount;
    document.getElementById("totalSelling").innerText = totalSelling;
    document.getElementById("totalCost").innerText = totalCost;
    document.getElementById("profit").innerText = totalSelling - totalCost;
}

// Initial load
updateDisplay();
