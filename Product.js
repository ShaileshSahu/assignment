class Product{
    
    constructor(productID, productName, productPrice, category){
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
        this.category = category;
    }

    getProductDetails(){
        return {
            id: this.productID,
            name: this.productName,
            category: this.category,
        }
    }

    getProductPrice(){
        return this.productPrice;
    }
}

class DiscountedProduct extends Product{
        constructor(productID,productName,productPrice,category,productPriceDiscount){
            super(productID,productName,productPrice,category);
            this.productPriceDiscount = productPriceDiscount;
        }

        getProductPrice() {
            if(this.productPriceDiscount){
                 return this.productPrice-this.productPriceDiscount;
            } else {
                return this.productPrice;
            }
        }
}

module.exports = {
    Product: Product,
    DiscountedProduct: DiscountedProduct
}