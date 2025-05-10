// class User{
//     constructor (username,email,passwrod){
//         this.email = email
//         this.username = username
//         this.passwrod = passwrod
//     }
//     encryptPassword(){
//         return `this is passowrd 3#$2as${this.passwrod}as#d`
//     }
// }

// const newpass = new User("abhi",'abhi@gamil.com',123    )
// console.log(newpass.encryptPassword())


function User(username,email,password)
{
    this.email = email
        this.username = username
        this.password = password
}
User.prototype.encryptPassword = function(){
    return `this is encrypt Password is 123asd@#$${this.password}@#432asdf32sd`
}
const againpass = new User("ram",'ram@eample',123)
console.log(againpass.encryptPassword())