//1
let firstElem = document.querySelector(".navbar-brand")
console.log(firstElem)
firstElem.style.color = "red"

//2
let tble = document.getElementsByClassName("ele")
console.log(tble)
tble[0].style.color = "green"
tble[2].style.color = "green"

//3
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.backgroundColor = "cyan"
});