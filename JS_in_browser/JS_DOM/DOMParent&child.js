let bdy = document.body

//first element child is only the first valid html element
console.log("This is my first Element child",bdy.firstElementChild)
//first child can be any, it can be comment, text etc
console.log("This is my first child", bdy.firstChild)

//siblings
console.log("Next element siblings of first element child",bdy.firstElementChild.nextElementSibling)
console.log("Next first child of element siblings of first element child",bdy.firstElementChild.nextElementSibling.firstElementChild)
console.log("Next element siblings of first element child",bdy.firstElementChild.firstElementChild.nextElementSibling)

//parentElement and parentNode
console.log("This is parent element", bdy.firstElementChild.parentElement) //it returns valid html element
console.log("This is parent Node", bdy.firstElementChild.parentNode) // it returns any node like comment, text etc


