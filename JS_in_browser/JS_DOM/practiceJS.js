console.log("Eligible for driving identifier:")
let age = Number.parseInt(prompt("Enter your age : "))

if(age >= 18){
    alert("Welcome to driving mania")
    // document.write("Congratulation!! you are eligible for driving")
    let cnfrm = confirm("Are you sure you wanted to participate in deadly race")
    if(cnfrm){
        document.write("Welcome to Race 2024")
    }

}
else if(age > 0 && age < 18){
    alert("Age less than 18 is not allowed")
    let yesorno = confirm("Do you wanted to re-directed to POGO")
    if(yesorno){
        location.href = "http://pogo.com/"
    }
}
else{
    console.error("You have entered invalid age!!")
    document.body.style.backgroundColor = "red"
    document.write("ERROR!!")
}

