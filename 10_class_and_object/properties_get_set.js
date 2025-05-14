function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
         this._email = value
        }
    })

    Object.defineProperty(this,'password',{
        get: function(){
            return this._password + 'abca'
        },

        set: function(value){
         this._password = value
        }
    })
}

const callUser = new User('abhi@job.hai','123')
console.log(callUser.email)
console.log(callUser.password)