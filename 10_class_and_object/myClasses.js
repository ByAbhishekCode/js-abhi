class userClass{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encreptedpass(){
        return `this is encrepted ${this.password}123`
    }

    changeUserName(){
        return `this is user change style ${this.username.toUpperCase()}`
    }

}
const callUser = new userClass('abhi',"email@email.com",'123')
// console.log(callUser.encreptedpass())
// console.log(callUser.changeUserName())

 function newUser(username,email,password){
    this.username = username
    this.email = email
    this.password = password
 }

 newUser.prototype.encrepted = function(){
    return `${this.username}asdf`
 }

 newUser.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
 }

 const calls = new newUser('AbhI','ram@email',123)
 console.log(calls.encrepted())
 console.log(calls.changeUserName())