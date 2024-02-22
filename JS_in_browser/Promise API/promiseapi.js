let p1 = new Promise((resolve,reject)=>{
    console.log("I am promises 1")
    setTimeout(()=>{
        resolve('value1')
    },2000)
    
})
let p2 = new Promise((resolve,reject)=>{
    console.log("I am promises 2")
    setTimeout(()=>{
        reject("i am an rejected")
    },1000)
})
let p3 = new Promise((resolve,reject)=>{
    console.log("I am promises 3")
    setTimeout(()=>{
        resolve('value3')
    },3000)
})

// p1.then((value)=>{
//     console.log(value)
// })

// let p_all = Promise.all([p1,p2,p3]) //it will return all promise's value once they got resolved, time depends on the promise ehich take max time to resolve

//It return the status of all promise either any promises would rejected or not
// let p_all = Promise.allSettled([p1,p2,p3])

//it will return value of that promise which is resolved first but not return anything if first will rejected
// let p_all = Promise.race([p1,p2,p3])

//it return the first non-rejected promises value
// let p_all = Promise.any([p1,p2,p3])

// let p_all = Promise.resolve(p1)

let p_all = Promise.reject(p2)
p_all.catch((error)=>{
    console.log(error)
})