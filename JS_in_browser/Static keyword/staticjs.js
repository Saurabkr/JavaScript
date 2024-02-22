//static keyword is use to assosiate method to a class. we can not call it via making object
class Employee {

    constructor(name){
        //we can use static metohd here 
        this.name = name;
    }

    candidate(){
        alert(`${this.name} is a SDET in B2`)
        // alert(`${Employee.capitalize(this.name)} is a SDET in B2`) //here also we can use static like this
    }

    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substring(1,name.length);
    }
}

// let y = new Employee(Employee.capitalize("saurab")); //or like here we use static method
let y = new Employee("saurab");
y.candidate();