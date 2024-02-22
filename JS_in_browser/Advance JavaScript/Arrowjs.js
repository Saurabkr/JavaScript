const arrow = {
    name : "saurab",
    company: "B2",
    func : function(){
        //   console.log("My name is "+this.name+" and i work in "+this.company)
        // setTimeout(function(){ //instead of normal JS func we can use func expression to get rid from this error
        setTimeout(()=>{
            //when we try to access name and company here
            //it returns undefined because 'this' here doesnot find any object inside a function
            console.log("My name is "+this.name+" and i work in "+this.company)
        },2000)
    }

}

console.log(arrow.name, arrow.company)
arrow.func()