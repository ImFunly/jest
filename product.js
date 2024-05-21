let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
}

function addProduct(name, price) {
    if(!name || price === undefined) {
        throw new Error('Missing name or price');
    }

const productExists = products.some(product => product.name === name);
if(productExists) {
throw new Error('The product already exists');
}

id++;
products.push({id, name, price});
}

function removeProduct(productId) {
    const productIndex = products.findIndex(product => product.id === productId);
    if(productIndex === -1){
        throw new Error('Product not found')
    }
    products.splice(productIndex, 1);
}

function getProducts() {
    return products;
}

function getProduct(productId) {
    const product = products.find(product => product.id === productId);
    if(!product) {
        throw new Error('Product not found')
    }

    return product;
}   

function updateProduct(productId, name, price) {
    const product = products.find(product => product.id === productId);

    if(!product) {
        throw new Error('Product not found');
    }
    
    if(name !== undefined) {
        product.name = name
    }
    
    if(price !== undefined){
        product.price = price;
    } 
}

module.exports = { resetProducts, addProduct, removeProduct, getProduct, getProducts, updateProduct}


