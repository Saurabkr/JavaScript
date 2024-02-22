//1
let name1 = 'saurab\'s'
console.log(name1.length)

//2 : uses of include , startwith and endwith

let sentence = "Hi, i am saurab, and work in B2"
let word = 'saurab'

console.log(`The word ${word} ${sentence.includes(word)?"is":"is not"} present in the sentence.`)
console.log(`The Sentence ${sentence.startsWith("Hi")?"start":"not start"} with 'Hi'`)
console.log(`The Sentence ${sentence.endsWith("Hi")?"end":"not end"} with 'B2'`)


