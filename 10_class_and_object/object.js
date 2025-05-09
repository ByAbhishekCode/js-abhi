function multipleBy5(num){
    return  num*5
}

multipleBy5.power = 2
// console.log(multipleBy5(5))
// console.log(multipleBy5.power)

function createUser(username,score){
    this.username = username
    this.score = score
    // console.log(`this is name ${this.username} and there is score ${this.score} and there is user id ${this.id}`)
}
// createUser.id = 12

createUser.prototype.increment = function(){
    this.score++
    console.log(`increment is here:=> ${this.score}`)
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score} and ${this.username}`)
}
const name = new createUser('abhi',200)
const name2 = new createUser('ram',300)
name.increment()
name2.printMe()