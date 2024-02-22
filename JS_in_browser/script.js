console.log("Hi everyone, this is console")
alert("Good morning:)")

//console

console.log("Hi am log")
console.assert(1>2)
console.assert(2>1)
console.error("Error!!")
console.warn("Hey i am warning")

//console.time and console.timeEnd : use to find the time between two process
//for loop
console.time("For Loop")

for(let i=0; i<5; i++){
    console.log(2)
}
console.timeEnd("For Loop")

//while loop
console.time("while loop")
let i = 0
while(i<5){
    console.log(2)
    i++
}
console.timeEnd("while loop")

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//alert, confirm and prompt

alert("This is alert")

let msg = prompt("Enter any number: ", "123")
msg = Number.parseInt(msg)

let cnfm = confirm("Are you sure, you want to print?")

if(cnfm){
    document.write(msg)
}else{
    document.write("You need to confirm, click on yes!")
}

//drawback of using alert, confirm or prompt :
//it pause the execution of script in the page\

console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)

//convert it into array from nodeList
let arr = Array.from(document.body.childNodes)