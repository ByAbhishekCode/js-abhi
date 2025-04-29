function sayMyName(){
    console.log("A")
    console.log("B")
    console.log("H")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("E")
    console.log("K")
}
// sayMyName()
function addTwoNumbers(number1, number2)
{
    let sum = number1+number2
    return sum;
}
console.log(addTwoNumbers(3, 5));

function logginUserMessage(name)
{
    if(!name)
    {
        console.log("plse enter the name")
        return
    }
    return `${name} this is user`
}
console.log(logginUserMessage("abhi"))

const user1 = {
    user : "abhishek",
    price : 199
}

function handleObject(objin)
{
    console.log(`User name is ${objin.user} and price is ${objin.price}.`)
}
handleObject(user1)