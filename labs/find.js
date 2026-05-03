let arr=[1,2,3,4,5,6,7,8,9,10];
let find=arr.find((item)=>{
    return item>5;
});
const sum =arr.reduce((p,total)=>p+total,0);

console.log(find);  
console.log(sum);
let filter=arr.filter((item)=>{
    return item>5;
});
console.log(filter);

let product=[
    {name:"Guitar", price:1000},
    {name:"Phone", price:500},  ]
// const findProduct=product.find((item)=>{
//     return item.price>600;
// });
// console.log(findProduct);   
// let filterProduct=product.filter((item)=>{
//     return item.price>600;
// });
// console.log(filterProduct);
const item=product.filter(p=>p.name);
console.log(item);

const item2=product.find(p=>p.name);
console.log(item2);

const prices=product.reduce((total,p)=>total+p.price,0);
console.log(prices);
