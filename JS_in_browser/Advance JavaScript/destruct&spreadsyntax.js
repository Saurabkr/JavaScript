//Destructuring
let arr = ['saurab',23,'sdet'];
let [name, age, positon] = arr;
console.log("Name: "+name, "age:" +age, "Post: "+positon);

let num = [2,3,4,5,6,7]
let [a,b,c] = num;
console.log(a,b,c) // a=2,b=3,c=4

// let [d,f,g,h,i,j,k]  = num;
// console.log(d,f,g,h,i,j,k) //error: j and k is not defined

let [d,,,...rest] = num
console.log(d,rest) // d=2, rest = [5,6,7]

//we can also pass array in function
let nums = [2,3,7];

let add = (a,b,c)=>{
  return a+b+c;
}

console.log(add(...nums)) // passing whole nums array

//spread syntax: we can spread the array into obj
let spread = [2,5,7];
let spreadObj = {...spread}
console.log(spreadObj)

//we can change the object value
let emp = { name: 'saurab', age: 23, position: 'sdet' };

console.log({...emp, age: 25}); //we will override the age value

