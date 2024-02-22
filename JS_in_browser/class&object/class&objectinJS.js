class reservation{
    constructor(name,number,train,adress){
        this.name = name;
        this.number = number;
        this.train = train;
        this.adress = adress;
    }

    preview(){
        console.log(`Name: ${this.name} \nNumber: ${this.number} \nAddress:${this.adress} \nTrain No. : ${this.train}`)
    }
    submit(){
        alert(`${this.name} you train ticket is booked!`)
    }
    cancel(){
        alert(`${this.name} your train ticket is cancelled!`)
    }
    station(){
        console.log("station reached.")
    }
}

class metro extends reservation {
    //parent class onstructor called automatically
    // constructor(...args){
    //     super(...args)
    // }

    //if we want to create derived class constructor then
    constructor(name){
        super(name)
        console.log("constructor is called for derived class")
    }
    
    preview(){
        //override the parent's class
        console.log(`Name: ${this.name} \nNumber: ${this.number} \nAddress:${this.adress} \nMetro train No. : ${this.train}`)
    }

    line(){
        //super use to call the parent method
        super.station()
        console.log(`The door will open left side`)
    }
}

let ticket1 = new metro("saurab",997470294,456789,"rk nagar")
ticket1.submit()
ticket1.line()
ticket1.preview()
ticket1.cancel()
