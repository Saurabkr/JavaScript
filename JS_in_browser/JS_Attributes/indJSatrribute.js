let atr1 = document.body.firstElementChild
// let dup = document.getElementById("id1")
console.log(atr1)
// console.log(dup)
let atr2 = document.body.firstElementChild.nextElementSibling
// let dup1 = document.getElementById("id2")
console.log(atr2)
// console.log(dup1)

//attributes: 
//1
let check = atr1.hasAttribute("id")
console.log(check) //true
//2
let attri = atr1.getAttribute("class")
console.log(attri)//class1
//3
atr2.setAttribute("class","class-saurab")
console.log(atr2)

//4
atr2.removeAttribute("id")
console.log(atr2)

//5
console.log(atr1.attributes)

//6. if we want to add custom attribute
atr1.setAttribute("data-game","NFS")
console.log(atr1.dataset) //we can access it using 'dataset'
console.log(atr1.dataset.game)
