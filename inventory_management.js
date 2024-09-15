
// Task 1: Create an Inventory Array of Product Objects

// Declaring inventory array with 5 product objects
const inventory = [
    {name:"Laptop", price: 1200, quantity: 10, lowStockLevel: 3},
    {name:"Smartphone", price: 800, quantity: 5, lowStockLevel: 2},
    {name:"Tablet", price: 400, quantity: 7, lowStockLevel: 1},
    {name:"Headphones", price: 100, quantity: 15, lowStockLevel: 5},
    {name:"Smartwatch", price: 250, quantity: 3, lowStockLevel: 1},
];

// Task 2: Create a Function to Display Product Details

// Declaring a function that accepts Product object
function displayProductDetails(Product) {
    let stockStatus 
    if (Product.quantity <= Product.lowStockLevel){ // Using an if statement to check the stock level
        stockStatus = "Low Stock";
    }
    else {
        stockStatus = "In Stock";
    }
    


// Logging the product details and the stock status to the console.
console.log(`Product: ${Product.name}`);
console.log(`Price: ${Product.price}`);
console.log(`Quantity: ${Product.quantity}`);
console.log(`Low Stock Level:${Product.lowStockLevel}`);
console.log(`Status: ${stockStatus}`);
}

inventory.forEach(Product => displayProductDetails(Product))


// Task 3: Create a Function to Update Product Stock After Sales

// Declaring a function 
function updateStock(Product, unitsSold) {
    if (unitsSold > Product.quantity) {
        console.log(`Cannot Sell ${unitsSold} because ${Product.quantity} available.`);
        return;
    }

Product.quantity = Product.quantity - unitsSold;
console.log(`Sold ${unitsSold} of ${Product.name}`);
if (Product.quantity == 0) {
    console.log(`${Product.name} is out of stock.`);
} else if (Product.quantity <= Product.lowStockLevel) {
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


// Task 5: Create a Function to Calculate Total Inventory Value

// Declaring a function that iterates over the inventory array
function calculateInventoryValue(inventory) {
    const totalValue = inventory.reduce((sum, Product) => { // using the reduce method to sum the total value of all products in stock
        return sum + (Product.price * Product.quantity); // calculating the total product value by multiplying quantity * price.
    },0);
    console.log(`Total Inventory Value: $${totalValue}`); // Output: Total Inventory Value: $21050
    return totalValue;
}
const totalValue = calculateInventoryValue(inventory);

// Task 6: Create a Function to Process a Sale

function processSale(productName, unitsSold) {
    const Product = inventory.find(item => item.name.toLowerCase() === productName.toLowerCase());
    if (Product) {
        updateStock(Product, unitsSold);
    } else {
        console.log(`Error product not in inventory: ${productName} not found in inventory`);
    }
}
processSale("Smartphone", 2);
processSale("Computer", 2);





















