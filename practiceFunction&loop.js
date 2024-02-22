let student = {
      Name : "Saurab",
      Roll : 32,
      Marks : 88,
      subject : "Mathematics"

}

//using for in
for(let i in student){
    console.log(i,":",student[i])
}

//using for
for(let i=0; i<Object.keys(student).length; i++){
    console.log(Object.keys(student)[i],":",student[Object.keys(student)[i]])
}


//print try again until user enters correct number
const prompt = require('prompt-sync')()

let n
correctNum = 5

while(n != correctNum){
       console.log("try again")
       n = Number.parseInt(prompt("Enter number : ")) 
    }


//function 


const meanNum = (a,b,c,d,e)=>{
     return a+b+c+d+e/5
}

meanNum(1,2,3,4,5)





