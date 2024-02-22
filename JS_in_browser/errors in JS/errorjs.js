function age(){
    try {
        let agePerson = prompt('Enter your age: ', 'ex. 10');
    Number.parseInt(agePerson)

    if(agePerson > 150 || agePerson < 0){
        //custom error
        throw new Error("Invalid age")
    }
    else if(agePerson<=60 && agePerson>=18){
        try{
            console.log("eligible for driving")
            hurray //this throw refernce error
        }catch(err){
            //three error object
            console.log(err.message)
            console.log(err.name)
            console.log(err.stack)
        }
    }
    else{
        console.log("welcome to a club")
    }
    } catch (error) {
        console.log(error.message)
    }
    finally{
        //finally block run even the error happend inside catch block.
        //it als run if funtion return some value in try block, before returning finally block runs
        console.log("I will run everytime")
    }
}

age()