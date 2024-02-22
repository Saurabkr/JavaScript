class Animal{
    contructor(name){
        this.name = name;
    }

    animalname(){
       console.log("This is monkey named")
    }

    get name(){
        return this._name;
    }

    set name(name1){
        this._name = name1;
    }
}

let u = new Animal("bruno");
u.animalname()
// u.firstname = "sevar"
// console.log(u.firstname)

//instance of use: if we create 'u' as the child class of animal then also it return true
console.log(u instanceof Animal) //true

