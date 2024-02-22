//var : Used pre-ES6 , it can be re-decleared or re-defined, not used now
//let: it is scope based variable, it can be re-decleared inside scope but not globally
//const : it is neither re-decleared nor re-defined, intiallized during declaration

let name1 = 'saurab'
const occpy = "Software Engineer"
// let occ = "sdet"
// occpy = "data analyst" //throws error
console.log(occpy)

{
    let name1 = 'Kumar'
    console.log(name1)//kumar
}
    
console.log(name1) //saurab
