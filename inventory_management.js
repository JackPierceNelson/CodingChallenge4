
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





























