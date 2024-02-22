let marks = [92,94,94,28,46]
marks[5] = 72

for(let i in marks) {
    console.log(marks[i])
}

marks[2] = 34

console.log(marks.length)
console.log(marks)

//array methods

let numbers = [2,3,4,58,9,2,1]

//to convert array to string
let str = numbers.toString()
console.log(str, typeof str)

let str1 = numbers.join('-')
console.log(str1, typeof str1)

//add and remove from back
let removeBack = numbers.pop()
console.log(numbers, removeBack, numbers.length)

let addBack = numbers.push(69)
console.log(numbers, numbers.length)

//add and remove from front

let addfront = numbers.unshift(12) 
console.log(numbers, numbers.length)

let removefront = numbers.shift() 
console.log(numbers, removefront, numbers.length)

//delete operator : length of original array won't changed

let practical = [33,45,6,7,12,56]
delete(practical[1])
console.log(practical,"length: ", practical.length)

//sort : it is sorted in string manner
practical.sort()
console.log(practical)

//To make it asc or desc sort we use compare func
const compare = (a,b) =>{
    return a-b//for asc sort
}
practical.sort(compare) 
console.log(practical)

const compare1 = (a,b) =>{
    return b-a//for desc sort
}
practical.sort(compare1) 
console.log(practical)

//reverse 
practical.reverse()
console.log(practical)

//splice
let splice_arr = practical.splice(0,1,34) // (index,count_of_ele_to_remove,number_to_be_inserted)
console.log(splice_arr, "actual array :", practical)

//slice
let sliced_ar = practical.slice(1,5) // 5 is exclude , it slices upto 4th index
console.log(sliced_ar, "actual array :", practical)

//itertion in array
//1) ForEach

let arr = [2,5,6,1,9]

arr.forEach((e)=>{
    console.log(e)
})

//for.. of
for(let i of arr){
    console.log(i)
}

//for.. in 
console.log("Print the index:\n")
for(let i in arr){
    console.log(i)
    
}
console.log("Print the value: \n")
for(let i in arr){
    console.log(arr[i])
}

//Array from: use to access the HTML objects
let nameq = "amit"
let name = Array.from(nameq) //convert string into array
console.log(name)

//Map , filter and reduce : 1) returns array
//map
let num = [1,4,6,9,2]

let num1 = num.map((value, index, arr)=>{
    console.log("value:",value," index: ",index," actual array: ", arr)
})

//filter : return the element which pass the filter condition
let filteredElement = num.filter((value)=>{
    return value > 3
})

console.log(filteredElement)

//reduce : use to do sum of all the elements
//method1
let sumM1 = num.reduce((e1,e2)=>{
    return e1+e2
})

//method2
const add = (a,b)=>{
    return a+b
}

let sumM2 = num.reduce(add)

console.log(sumM1)
console.log(sumM2)