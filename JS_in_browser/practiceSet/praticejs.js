// const scriptUpload = async (src)=>{
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement("script");
//         script.src = src;
//         document.body.appendChild(script)

//         script.onload = ()=>{
//             console.log("Script loaded successfully")
//             resolve("Script loaded :"+src)
//         }
//         script.onerror = ()=>{
//             reject(new Error("Script error"))
//         }
//     })
// }

// const loadScript = (src)=>{
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement("script")
//         script.src = src
//         document.body.appendChild(script)
//         script.onload = ()=>{
//             resolve("Done")
//         }
//         script.onerror = ()=>{
//             reject(new Error("Error loading script"))
//         }
//     })
  
// }

const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
            let script = document.createElement("script")
            script.src = src
            script.onload = () => {
                    resolve(src + " Done success")
            }
            document.head.append(script)
    })
}

//1
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// a.then((value) => {
//         console.log(value)
// })

//2
// const fun = async ()=>{
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
// }

// fun()

// let p = loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
// p.then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(err)
// })

//or



