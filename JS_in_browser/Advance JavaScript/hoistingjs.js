//hoisting means JS treat function or variable delearation as hoisted on top while executing
greet();

//we declared 'a' below
console.log(a); //undefined

// console.log(b); //undefined

//when we declare vriable using 'let' then error occur
// console.log(a1); //error: cannot access 'a1' before initialization


function greet(){
    console.log("good morning")
}

var a;
let b = 8; //same behaviour with 'const' keyword
console.log(b);
let a1; 

//function expression is not hoisted
fun();
// let fun = ()=>{
//     console.log("Hi, i am function expression")
// }
// const fun = ()=>{
//     console.log("Hi, i am function expression")
// } //error: Cannot access 'fun' before initialization
var fun = ()=>{
    console.log("Hi, i am function expression")
} //error: fun is not a function

