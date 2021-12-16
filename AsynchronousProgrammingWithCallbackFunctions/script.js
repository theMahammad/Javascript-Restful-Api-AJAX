var products = [
    {id : 1, name :"Iphone X", price : 2500},
    {id : 2, name : "Xiaomi Note 6 Pro",price : 300 },
    {id : 3 , name : "Huawei Mate P10" , price : 500}

]
/*
function addProduct(product){
    setTimeout(() => {
        products.push(product);
        
    }, (2000));
}
*/
function getProducts(){

    setTimeout(() => {
        products.forEach(product=>{
            console.log(product.name);
        })
    }, (1000));
}
var addedProduct = {
    id:4,
    name : "Samsung Galaxy S8",
    price : 1000
} 
//addProduct(addedProduct);
//getProducts();
/*In the above situation, when we call getProducts method - though it is called after addProduct method- 
we can't see our added product
due to using setTimeout 
So we can solve this problem by using a feature which is called callback function*/

function addProduct(product,callback){
    setTimeout(() => {
        products.push(product);
        callback(); //After pushing process,getProducts which is named callback here is going to be called
    }, 2000);
}
addProduct(addedProduct,getProducts) //we are able to call getProducts function by passing it to method  