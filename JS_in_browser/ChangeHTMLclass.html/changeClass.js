let cls = document.getElementsByClassName('class1')[0]
console.log(cls)

//it will replace the existing class
cls.className = "class-saurab first"

//get all the class
console.log(cls.classList)


cls.classList.add("appendedClass")
cls.classList.remove("appendedClass")
cls.classList.toggle("first") //if added then remove or if removed then add
console.log(cls.classList.contains("first"))


