function checkInternet(status) {
    return new Promise((resolve, reject) => {
        
        if (status === "connected") {
            resolve("Internet is connected");
        } else {
            reject("No internet connection");
        }
    }); }
function checkServer(status)
{
    return new Promise((resolve,reject)=>{
        if (status==="connected")
        {
            resolve("Server connected");
        }
        else{
            reject("Server not connected");
        }
        
    });
}

Promise.allSettled([checkInternet("connected"),checkServer("not connected")])
.then(result =>{
    console.log(result);
})
    
