
// Task 1: Create an Inventory Array of Product Objects

const inventory = [
    {name:"Laptop", price: 1200, quantity: 10, lowStockLevel: 3},
    {name:"Smartphone", price: 800, quantity: 5, lowStockLevel: 2},
    {name:"Tablet", price: 400, quantity: 7, lowStockLevel: 1},
    {name:"Headphones", price: 100, quantity: 15, lowStockLevel: 5},
    {name:"Smartwatch", price: 250, quantity: 3, lowStockLevel: 1},
];

// Task 2: Create a Function to Display Product Details

const stockStatus = (quantity > lowStockLevel) ? "In Stock" : "Low Stock";

function displayProductDetails(inventory) {
    return stockStatus;
}

console.log(inventory[0].name);
console.log(inventory[0].price);
console.log(inventory[0].quantity);
console.log(inventory[0].lowStockLevel);

// Task 3: Create a Function to Update Product Stock After Sales

function updateStock



























// Task 5: Create a function to caluclate total inventory value

function calculateInventoryValue(inventory) {
    let totalValue = inventory.reduce((price, quantity) => price * quantity, 0);
    console.log(`Total Value: $${totalValue}`);
}


// Task 6: Create a Function to Process a Sale

function processSale(inventory) {
    if (product) {
        
    } else {
        
    }
}
