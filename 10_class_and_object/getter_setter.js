class User{
    constructor(email,password)
    {
        this.email = email
        this.password = password
    }

    get password(){
        return Number(this._password)
    }

    set password(value){
        this._password = value
    }
}
const callUser = new User("abhi@job.com",'123')
console.log(callUser.password)
console.log(typeof callUser.password)