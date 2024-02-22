//NN SS BB U : n->number, n->null, s -> string, s-> symbol, b->boolean, b-> bigint, u->undefined

let a = null
let b = undefined
let c = false
let d = Symbol("hi this is symbol")
let e = "I am string"
let f = BigInt(123857)
let g = 23

console.log(g)
console.log(typeof e)

//Non primitive

const stud = {
     "name1" : "saurab",
     "roll" : 23,
     "sub" : "math"
}

stud["marks"] = 99

console.log(stud["name1"], stud["roll"], stud["sub"], stud)
console.log(stud.name1) //can be accesed like this also