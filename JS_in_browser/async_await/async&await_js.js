//async: added before function , it will return promises

// async function weather(){
//     //irrespective of promises declariation it is treated as promise
//       return "weather is nice"
// }

// let res = weather()
// res.then((value)=>{
//     console.log(value) //we will get 'weather is nice' in console
// })

//To get rid of promises declariation multiple time we use async function along with await

async function weatherCondition(){
    //consider it as mongoDB data fetching: because it also return promises
     let ptnWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('29 degree')
        },2000)
     })

     let bglrWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('20 degree')
        },5000)
        
     })
     console.log("patna weather fetching..")
     let ptn = await ptnWeather;
     console.log("patna weather fetched :", ptn)
     console.log("banglore weather fetching..")
     let bglr = await bglrWeather;
     console.log("banglore weather fetched :", bglr)

     return [ptn,bglr]

}


const val = async ()=>{
    console.log("i am another function")
}

console.log("Weather report: ")
//if we try to call another function then it will also executed parallelly
val()
let result = weatherCondition()
// console.log(result)
result.then((value)=>{
    console.log(value)
})