class user{
    constructor(username){
         this.username = username
    }

    logme(){
        console.log(`username is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username,password,email){
        super(username)
        this.password = password
        this.email = email
    }

    giveName(){
        console.log(`this is name ${this.username}`)
    }
}

const giveteachern = new teacher('abhi','ram@email',123)
giveteachern.giveName()
console.log(giveteachern instanceof teacher)