let elementDOM = document.getElementById("idForTitle") 
console.log(elementDOM)
elementDOM.style.color = "blue"

//getElementsByClass
let cls = document.getElementsByClassName("word")
console.log(cls)
cls[0].style.color = "red"
cls[1].style.color = "blue"
cls[2].style.color = "green"

//querySelectorAll and querySelector
let qry = document.querySelectorAll(".button") //class
qry[0].style.backgroundColor = "grey"
qry[0].style.color = "red"
qry[1].style.backgroundColor = "black"

let qry1 = document.querySelector("#button1") //id
qry1.style.color = "brown"

//getElementsByTagName
let tag = document.getElementsByTagName("a") //all <a></a> tag will selected
console.log(tag)
tag[0].style.backgroundColor = "white"

//search DOM element by match, closet, contains
//matches
let mtch = document.getElementById("idForTitle")
console.log(mtch.matches(".card-title")) //we compare with element's class name : return true

//closet : it check for ancester/itself
console.log(mtch.closest(".card")) //return a element with have class name as "card"
console.log(mtch.closest("#idForTitle")) //return itself

//contains : it check for child/itself
console.log(mtch.contains(mtch)) //true

let search = document.querySelector(".container")
console.log(search.contains(mtch))//true


