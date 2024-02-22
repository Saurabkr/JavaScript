console.log("I am first")

// let promise1 = new Promise((resolve, reject)=>{
//     console.log("I am resolved promise")
//     resolve("true")
// })

//if we are only interested in resolving
let promiseNew = new Promise(resolve=>{
    console.log("I am resolved promise")
    resolve("true")
})

let promise2 = new Promise((resolve, reject)=>{
    
    console.log("Promise pending")

    setTimeout(()=>{
        console.log("I am rejected promise")
        reject(new Error("Error happened!!"))
    },3000)
})
    

console.log("i am last")

//only to handle resolved
promiseNew.then((value)=>{
    console.log(value)
})

//we can pass two case: error and resolved for promises
promise2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log("Some error happened during promises")
})

//only to handle the error
promise2.catch((error)=>{
    console.log("Some error happened during promises")
})


