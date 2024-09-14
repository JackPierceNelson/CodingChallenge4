
// Task 1: Create an Inventory Array of Product Objects

const inventory = [
    {name:"Laptop", price: 1200, quantity: 10, lowStockLevel: 3},
    {name:"Smartphone", price: 800, quantity: 5, lowStockLevel: 2},
    {name:"Tablet", price: 400, quantity: 7, lowStockLevel: 1},
    {name:"Headphones", price: 100, quantity: 15, lowStockLevel: 5},
    {name:"Smartwatch", price: 250, quantity: 3, lowStockLevel: 1},
];

// Task 2: Create a Function to Display Product Details

function displayProductDetails(Product) {
    let stockStatus
    if (Product.quantity <= Product.lowStockLevel){
        stockStatus = "Low Stock";
    }
    else {
        stockStatus = "In Stock";
    }
    


console.log(`Product: ${Product.name}`);
console.log(`Price: ${Product.price}`);
console.log(`Quantity: ${Product.quantity}`);
console.log(`Low Stock Level:${Product.lowStockLevel}`);
console.log(`Status: ${stockStatus}`);
}

inventory.forEach(Product => displayProductDetails(Product))


// Task 3: Create a Function to Update Product Stock After Sales

function updateStock(Product, unitsSold) {
    if (unitsSold > Product.quantity) {
        console.log(`Cannot Sell ${unitsSold} because ${Product.quantity} available.`);
        return;
    }

Product.quantity = Product.quantity - unitsSold;
console.log(`Sold ${unitsSold} of ${Product.name}`);
if (Product.quantity == 0) {
    console.log(`${Product.name} is out of stock.`);
} else if (Product.quantity <= product.lowStockLevel) {
    console.log(`${Product.name} is low in stock.`);
}
}
const Smartphone =  inventory.find(Product => Product.name === "Smartphone");
updateStock(Smartphone, 10);

// Task 4:Create a Function to Check Low Stock Products

function checkLowStock(inventory) {
    console.log("Low Stocked Products:");
    let lowStockFound = false;
    inventory.forEach(Product => {if (Product.quantity <= Product.lowStockLevel){console.log(`${Product.name}(Quantity: ${Product.quantity}, Low Stock Level: ${Product.lowStockLevel})`);
    lowStockFound = true;
}});
if (!lowStockFound) {
    console.log("No products currently low in stock.");
}
}
checkLowStock(inventory);



























