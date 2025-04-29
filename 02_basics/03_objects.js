const name = "ram"
const mysym = Symbol("SYM")
const JsUser = {
    name : "Abhishek",
    age : 18,
    [mysym] : "mykey",
    12 : "this is addresh",
    location : "Kanpur",
    isLoggin : false,
    lastLogginDays : ["Manday","Tuesday","Friday"]
}
// console.log(JsUser)
// console.log(JsUser[12])
// console.log(JsUser["12"])
// console.log(JsUser[name])
// console.log(JsUser["name"])
// console.log(typeof JsUser[mysym])
JsUser.greeting = function () {
    console.log("Good Morning.......!!!!!!!!");
};
console.log(JsUser.greeting)