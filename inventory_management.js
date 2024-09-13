
// Task 1: Create an Inventory Array of Product Objects

// Declaring inventory Array with 5 product Objects

const inventory = [

     { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    
     { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    
     { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    
     { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    
     { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
    
   ];

// Task 2: Create a Function to Display Product Details

function displayProductDetails(product) {
    let i=0;
    while (i < product.length) {
        if (product[i].quantity <= product[i].lowStockLevel) {
            i++;
            console.log([product[i], "Low Stock"]);
        } 
        if (product[i].quantity > product[i].lowStockLevel);
            i++;
            console.log([product[i], "In Stock"]);
    }
};


 