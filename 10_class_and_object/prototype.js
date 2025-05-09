// var myName = "abhi"
let myName = "abhiram     "
// console.log(myName.trueLenght)

let myHeros = ["spiderman", 'thor']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: function(){
        console.log(`spidy power this ${this.spiderman}`)
    }
}

Object.prototype.fly = function(){
    console.log(`all heros are fly `)
}
// heroPower.fly()
// myHeros.fly()

const user = {
    toknow: "felkan",
    
}

const hero = {
    name: 'ironman',
    __proto__ : user
}
const herofly = {
    fly: true
}

const nanotech = {
    nano : true,
    __proto__ : herofly
}

// console.log(hero.toknow)

const name = "ram     "
String.prototype.trueLenght = function(){
    console.log(`True length is :=> ${this.trim().length}`)
}
name.trueLenght()