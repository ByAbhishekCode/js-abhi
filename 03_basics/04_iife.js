// immediately invoked function expression

(function chai (){
    console.log("DB is Connected")
})();

(function ekOrChai (name){
    console.log(`DB is Connected with ${name}`)
})("Ram");

((name) => {console.log(`DB is Connected with ${name}`)})("Ram1")
