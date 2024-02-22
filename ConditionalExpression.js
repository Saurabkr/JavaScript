const prompt = require("prompt-sync")()
let a = prompt("Hey whats you age?")

a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  console.log("This is an invalid age");
}
else if(a<9){
  console.log("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  console.log("You are a kid and you can think of driving after 18");
}
else{
  console.log("You can now drive as you are above 18");
}
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments

//Conditional statement
allow = a>18? "You can drive":"You can't drive"
console.log(allow)