//classic method to insert element
document.getElementById("id1").innerHTML = '<i>italian</i>'
let b = document.getElementsByClassName("class-saurab")[0]

//method to insert element

let a = document.createElement("div")
a.innerHTML += '<p class="inserted">I am inserted div element</p>'
b.appendChild(a)

let ab = document.createElement("p5")
ab.innerHTML += 'I am appended p3 element'
document.body.append(ab) //it get added inside last before <body>

document.body.prepend(ab) //it get added inside first after <body>

document.body.after(ab) //it get added outside before <body>
document.body.before(ab) //it get added outside after <body>

ab.replaceWith(div)

//insert adjecent element
let cls = document.getElementsByClassName("classfirst")[0]
cls.insertAdjacentElement('beforebegin','<div class="cls1">I am before begin</div>')
cls.insertAdjacentElement('afterbegin','<div class="cls1">I am afterbegin</div>')
cls.insertAdjacentElement('beforeend','<div class="cls1">I am beforeend</div>')
cls.insertAdjacentElement('afterend','<div class="cls1">I am afterend</div>')

