let p = ()=>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve(55);
        },3000)
    })
}

(async ()=>{
        let p1 = await p();
        console.log(p1)
        let p2 = await p();
        console.log(p2)
        let p3 = await p();
        console.log(p3)
})()

//old method where we have to create function with async keyword
// let f = async ()=>{
//     let p1 = await p();
//     console.log(p1)
//     let p2 = await p();
//     console.log(p2)
//     let p3 = await p();
//     console.log(p3)
// }

// f();