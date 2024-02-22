let name1 = "saurab"
let name2 = 'Binod'

console.log(name1," and ", name2)

//literal template
console.log(`${name1} is a friend of ${name2}`)

//escape sequence character

let sentence = 'saurab\'s pen'
let sentence2 = '\nThis is new line'
let sentence3 = 'cash\t500'

console.log(sentence, "length", sentence.length) //length = 12
console.log(sentence2)
console.log(sentence3)

//String method

let str = "Hi i am employee  "

console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.indexOf("am"))
console.log(str.slice(3,7))
console.log(str.replace("hi","Hello!"))
console.log(str.concat(str, " of B2"))
console.log(str.trim())
console.log(str.capitalize())


