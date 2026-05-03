const numbers = [12 , 23 , 22 , 2 , 1 , 7];
const [a , b , c] = numbers;
console.log(a);
console.log(b);
console.log(c);

const products = ["Soap", "Oil", "Milk"];

for (const p of products) {
    if (p === "Oil") break; // STOPS the loop here
    console.log(p);
}
