const getApi = async ()=>{
    try {
        let promise = await fetch('https://jsonplaceholder.typicode.com/todos/101')
        if(!promise.ok){
            console.log("The message return is "+promise.ok)
        }
        console.log(promise.status)
        console.log(promise.ok)
        let res = await promise.json();
        return res
        
    } catch (error) {
        console.log("failed to fetch data")
    }
}

//method1 : using async await
const fetching = async ()=>{
    let result = await getApi()
    console.log(result)
}

fetching()

//method2: using .then and .catch
// promise.then((response)=>{
//     return response.json();
// }).then((res)=>{
//     console.log(res)
// })




//post

const apiPost = async (url,todo)=>{
    let options = {
       method : 'POST',
       headers : {
        "Content-type" : "application/json"
       },
       body : JSON.stringify(todo)
    }

    let p = await fetch(url, options)
    let res = await p.json()
    return res

}

let todo = {
    name : 'saurab',
    book : 'Hindutva',
    id : 108
}

const func = async (todo)=>{
    let resultPost = await apiPost('https://jsonplaceholder.typicode.com/posts', todo)
    
    console.log(resultPost)
}

func(todo)

//GET

