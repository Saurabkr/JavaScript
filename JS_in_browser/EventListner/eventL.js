let obj = document.getElementsByClassName("container")[0]
let obj1 = document.getElementsByClassName("button")

const fun1 = (e)=>{
   alert("Hi i am fun1")
}
const fun2 = (e)=>{
   alert("Hi i am fun2")
}

let a = prompt("Are you sure?", 'y/n')

obj.addEventListener("click", fun1)
obj.addEventListener("click", fun2)

obj.addEventListener("click", (e)=>{
    console.log(e.target)
    console.log("hi there!")
})

//it willl remove event listener if we eneter other than 'y'
if(a!='y'){
obj.removeEventListener("click",fun1)
}

