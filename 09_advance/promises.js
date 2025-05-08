const promiseOne = new Promise(function(reslove,reject){
    //do async task
    //network, dbcall,cyptography
    setTimeout(function(){
        //console.log("Async task is completed")
        reslove()
    },1000)
})
promiseOne.then(function(){
    //console.log("promises is consumed")
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        //console.log("async 2 task")
        resolve()
    },1000);
}).then((function(){
   //console.log("consumed")
}))

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"abhi",password:"123"})
    },1000)
})
promiseThree.then(function(user){
    // console.log(user)
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(function(){
        const error = false
        if(!error)
        {
            resolve({username:'abhi', password:"123"})
        }
        else{
            reject("Error something went wrong")
        }
    },1000)
})
promiseFour.then((user)=>{
    // console.log(user)
    const name = user.username
    const pass = user.password
    return {name,pass}
}).then(function({name,pass}){
    // console.log(name)
    // console.log(pass)
}).catch(function(error){
    // console.log(error)
}).finally(()=>{//console.log("hogya")
    })

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve({username:"js",password:"123"})
        }else{
            reject("ERROR: js went worng")
        }
    },1000)
})
async function consumePromiseFive(){
    try
    {
        const response = await promiseFive
        // console.log(response)
    }
    catch(err)
    {
        // console.log(err)
    }
}
consumePromiseFive()

async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(typeof response)
    const data = await response.json()
    console.log(data)
}
getAllUsers()