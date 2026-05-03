let mypromise=new Promise(function(resolve,reject){
    let success=true;
    if(success)
    {
        resolve("Task Completed");

    } 
    else
    {
        reject("Task Failed");
    }

}  );

mypromise.then(function(result){
    console.log(result)
}
).catch(function(error){
    console.log(error);
});

// function findProduct(products,name)
// {
//     new Promise(function(resolve,reject)
// {
//     if(products.include(name))
//     {
//         resolve(`Product ${name} found`);
//     }
//     else
//     {
//         reject("Product not found");
//     }

// });
// }
// let product=["Laptop","Phone","Tablet"];
// findProduct(product,"Phone").then(result=>{
//    console.log(result);
// }).catch(error=>{
//    console.log(error);
// });
//    findProduct(product,"Camera").then(result=>{
//        console.log(result);
//    }).catch(error=>{
//        console.log(error);
//    });

