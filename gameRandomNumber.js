const prompt = require('prompt-sync')()
let num

let rand = Math.floor(Math.random()*100)
let count = 0

while(true){
    // console.log(rand)
    num = Number.parseInt(prompt("Guess the number: "))
    if(num==rand){
        console.log("Total Points :",(100-count))
        console.log("Number guessed correctly..\nGame Over!!")
        break
    }
    else if(num > rand){
        count++
        console.log("Number guessed is greater than random number.")
    }
    else{
        count++
        console.log("Number guessed is less than random number.")
    }
}

