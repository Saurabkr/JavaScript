class ComplexNum{
    constructor(real,imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }

    add(num){
       this.real += + num.real;
       this.imaginary += num.imaginary;
    }
}

let n1 = new ComplexNum(2,4);
let n2 = new ComplexNum(2,6);

n1.add(n2)
console.log(n1.real + "+" + n1.imaginary +"i")
