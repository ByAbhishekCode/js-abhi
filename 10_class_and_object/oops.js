const user ={
    user: "abhi",
    loginCount : 8,
    singIn : true,
    getUserDetails: function(){
        console.log(`this is user name:-> ${this.user}`)
    }
}
// console.log(user.user)
// console.log(user)
// console.log(user.getUserDetails())

function Users(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Hi ${this.username} is this side. `)
    }
}

const userOne = new Users("abhi", 12,true)
console.log(userOne.greeting())
console.log("*********************")
userOne.greeting()