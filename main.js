const fs = require("fs");
const {DiscountedProduct} =  require('./Product');
var productsJson = JSON.parse(fs.readFileSync('./Products.json', 'utf8'));
const getFinalResult = (filename) => {
    try{
        const productMap = {};
        productsJson.forEach(productJson =>{
                productMap[productJson["id"]] = new DiscountedProduct(productJson.id, productJson.name, productJson.price, productJson.category, productJson.discount);
        });
        const inputs = fs.readFileSync(filename, "utf-8");
        const totalAmount = inputs.split(" ").filter((input)=>{
            if(productMap[input]){
                const product = productMap[input].getProductDetails();
                const show = Object.assign({},{
                    Product_ID: product.id,
                    Product_Name: product.name,
                    category: product.category,
                    Product_Price: productMap[input].getProductPrice()
                });
                console.log(show);
                return productMap[input];
            } else console.log("Product with product id [ write id of the product here ] not found!”"); 
        }).map(input=> productMap[input].getProductPrice()).reduce((price1,price2)=> price1+price2,0);
        console.log("total amount", totalAmount);
        return totalAmount;
    }catch(error){
        console.error(error);
    }
}

const filename = process.argv[2];
if(filename)
    getFinalResult(filename);
else 
    console.log("Provide the input sample as args");

module.exports = { getFinalResult }