function findProducts(products,name) {
    return new Promise((resolve, reject) => {
        if (products.includes(name)) {
            resolve(`Product ${name} found`);
        }
        else 
        {
            reject(`Product ${name} not found`);
        }
        

    });
}
 let product=["Laptop","Phone","Tablet"];
 findProducts(product,"Phone").then(result=>{
    console.log(result);
 }).catch(error=>{
    console.log(error);
 });
    findProducts(product,"Camera").then(result=>{
        console.log(result);
    }).catch(error=>{
        console.log(error);
    });
    function processPayment(amount) {
        return new Promise((resolve, reject) => {
          console.log("Processing payment... (Promise is PENDING)");
      
          setTimeout(() => {
            if (amount > 0 && amount <= 5000) {
              resolve(`Payment of $${amount} processed successfully ✅`);
            } else {
              reject(new Error("Payment failed: Invalid amount ❌"));
            }
          }, 1500);
        });
      }
      
      // Case 1: Valid payment
      processPayment(3000)
        .then((message) => {
          console.log("SUCCESS:", message);
        })
        .catch((error) => {
          console.log("ERROR:", error.message);
        })
        .finally(() => {
          console.log("Payment process completed (Case 1)\n");
        });
      
      // Case 2: Invalid payment
      processPayment(7000)
        .then((message) => {
          console.log("SUCCESS:", message);
        })
        .catch((error) => {
          console.log("ERROR:", error.message);
        })
        .finally(() => {
          console.log("Payment process completed (Case 2)");
        });
      
      
      
      
      
      
      
      
      
      
      
      
      
      function loginUser(username, password) {
        return new Promise((resolve, reject) => {
          console.log("Checking credentials... (Promise is PENDING)");
      
          setTimeout(() => {
            if (username === "admin" && password === "1234") {
              resolve("Login successful ");
            } else {
              reject(new Error("Invalid username or password "));
            }
          }, 1000);
        });
      }
      
      // Case 1: Correct credentials (will resolve)
      loginUser("admin", "1234")
        .then((message) => {
          console.log("SUCCESS:", message);
        })
        .catch((error) => {
          console.log("ERROR:", error.message);
        })
        .finally(() => {
          console.log("Login process finished (Case 1)\n");
        });
      
      // Case 2: Incorrect credentials (will reject)
      loginUser("user", "0000")
        .then((message) => {
          console.log("SUCCESS:", message);
        })
        .catch((error) => {
          console.log("ERROR:", error.message);
        })
        .finally(() => {
          console.log("Login process finished (Case 2)");
        });