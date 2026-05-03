function * tokenGenerator() {
    let tokenId = 1;
    while (true) {
        yield `token-${tokenId++}`;
    }
}

let t=tokenGenerator();
for(const token of t){
    console.log(token); 
    if(token==="token-5")
        break;
}