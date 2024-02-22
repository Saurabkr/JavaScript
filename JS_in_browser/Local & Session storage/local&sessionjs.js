let key = prompt("Enter the key")
let value = prompt("Enter the value")

localStorage.setItem(key,value)

console.log(localStorage.getItem(key))

if(key == 'red' || key == 'blue'){
    localStorage.removeItem(key)
}

if(key == 0){
    localStorage.clear()
}

console.log(localStorage.key(0), "length of local storage", localStorage.length)

//session strorage has same function as local storage
//storage event : we can listen if we change/update the local storage 

window.onstorage = (e)=>{
alert("local storage changed")
console.log(e)
}