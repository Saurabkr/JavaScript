let timeId = setTimeout(function() {
     alert("Hi, are you there!")
}, 10000)

let alt = prompt("Do you want to see alerts?", "(y/n)")

if(alt == 'n'){
    clearTimeout(timeId)
}

console.log(timeId)

//time interval : it keep on sending alter after every given time intervel

let timeIntervalId = setInterval(function() {
    alert("Hi, are you there!")
}, 10000)

let altInt = prompt("Do you want to see alerts?", "(y/n)")

if(altInt == 'n'){
   clearTimeout(timeIntervalId)
}

console.log(timeIntervalId)