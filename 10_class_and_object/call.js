function setUsername(username){
    console.log('hi')
    // db calls
    this.username = username
    console.log('hi')

}

function callUser(username,email,password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}
const call = new callUser('abhi','abhi@google.com',123)
console.log(call)