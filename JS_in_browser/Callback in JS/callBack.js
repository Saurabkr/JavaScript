// asyncrous
// console.log("Before async")
// setTimeout(function() {
//     console.log("Hi i am asyncronus")
// },3000)
// console.log("After async")

function loadScript(src,callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Script uploaded"+ src)
        callback(null,src)
    }
    script.onerror = function(){
        callback(new Error("Error uploading"))
    }
    document.body.appendChild(script);
}

function helloScript(error,src){
    if(error){
        console.log("Got some", error)
    }
    alert("hello "+src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",helloScript)


//simple callback func

// function add(a,b){
//   return a+b;
// }

// function multiply(a,b){
//     return a*b;

// }

// function result(a,b,operation){
//     return operation(a,b)
// }

// console.log(result(10,20,add))