let pr1 = new Promise((resolve,reject)=>{
    console.log("Promise started")
    setTimeout(()=>{
        resolve("true")
    },3000)
})

pr1.then((value)=>console.log("Hurray"))

pr1.then((value)=>{
    console.log("promises completed")
})