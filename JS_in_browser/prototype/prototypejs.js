//prototype : if does not have any function or property in any object then it search in prototype
let p1 = {
    name:'saurab',
    class : 'NA',
    num : ()=>{
        alert("num 1")
    }
}

let p2 = {
    num : ()=>{
        alert("num 2")
    }
    }
    

p1.__proto__ = p2

p2.__proto__ = {
    language : 'JavaScript'
}

console.log(p1.num()) //it will execute 'num 1' alert because it is present in p1
// console.log(p1.class()) //it will execute 'class'alert
console.log(p1.language) //it will execute language