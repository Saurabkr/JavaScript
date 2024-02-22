const prompt = require('prompt-sync')()
let num
let arr = []

while(num != 0){
    num = Number.parseInt(prompt("Enter a number : "))
    arr.push(num)
}

console.log(arr)

//filter number from array which is divisible by 10
let filterNum = arr.filter((e)=>{
    return (e%10)==0
})

console.log(filterNum)

//find the square of numbers of an array
let sqr = arr.map((e)=>{
    return e*e
})

console.log(sqr)

//find the mutiplication of all the element in ana array

let multi = arr.reduce((e1,e2)=>{
    return e1*e2
})

console.log(multi)
