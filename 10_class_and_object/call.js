function setUserName(username){
    this.username = username
    console.log("ye to cala")
}

function createUser(username, email,password){
    setUserName.call(this,username)
    this.email = email
    this.password = password

}

const food = new createUser("apple","apple@compny.com",'123')
console.log(food)