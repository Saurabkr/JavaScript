const loadScript = (src)=>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script")
        script.src = src
        document.body.appendChild(script)
        script.onload = ()=>{
            resolve("Done")
        }
        script.onerror = ()=>{
            reject(new Error("Error loading script"))
        }
    })
  
}

let p = loadScript("https://jjcdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
p.then(value=>{
    console.log("Script loading is "+value)
}).catch(err=>{
    console.log(err+ 'Error')
})

//promise chaining: first resolve one promise then goes to another..
let p1 = new Promise((resolve,reject)=>{
    console.log("promise started")
    setTimeout(()=>{
        console.log("I will run after 3 sec")
        resolve(56)
    }, 2000)
})

p1.then((value)=>{
    console.log("promise complted : value= "+value)
    return new Promise((resolve,reject)=>{
        resolve("true")
    })
}).then((value)=>{
    console.log(value + " of 2nd promises")
})