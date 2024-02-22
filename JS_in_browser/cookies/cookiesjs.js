console.log(document.cookie)
document.cookie = "name=saurab"
let key = prompt("Enter the key")
let value = prompt("Enter the value")
// document.cookie = key + "=" + value
//but if we want to insert any special charcter the rest cookie part is rejected i.e naem;=hcic it accept only naem
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
//to decode it we use decodeURIComponent()
console.log(decodeURIComponent('ertyuiolkm%3B'))
console.log(document.cookie)