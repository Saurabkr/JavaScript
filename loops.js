// Program to add first n natural numbers
let sum = 0
const prompt = require('prompt-sync')()
let n = prompt("Enter the value of n ")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1)
  // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i) : i =4 if we use (var i = 0; i < n; i++)



let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "Harry") {
  console.log(b)
}

//While loop

let num = Number.parseInt(prompt("Enter the number: "))

let i = 0

while(i<num){
  console.log(i)
  i++
}

//do while loop

let x = 0

do{
  console.log(x)
  x++
}while(x < num)