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

function addProduct(product){
    return new Promise(function(resolve,reject){ 
        
        setTimeout(() => {
            products.push(product);
            var added = true;
            if(added){
                
                resolve(); 
            }else{
                reject("There is a unknown error");
            }
            
        });
    })
    
}
addProduct(addedProduct)
.then(getProducts) //getProducts equals to resolve method which is located in inside if in addProduct method
.catch(function(err){ // err equals to data which is passed from reject method
    console.log(err);
})  