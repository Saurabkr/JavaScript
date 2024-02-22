console.dir(document.body.firstElementChild)
console.log(document.body.firstElementChild)

console.log(document.body.firstElementChild.nodeName) //display only element node
console.log(document.body.firstChild.nodeName) //shows all node present : in this case it will display text node

console.log(document.body.firstElementChild.textContent)

container.innerHTML = "hi there!"
console.log(container.innerHTML)

container.outerHTML = "<i>Hello i am outer HTML</i>"
console.log(container.outerHTML)




