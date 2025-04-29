const user = {
    username : "abhishek",
    price : 999,
    welcomeMessage : function()
    {
        // console.log(`${this.username},welcome to website.`)
        // console.log(this)
    }
}
// user.welcomeMessage()
// console.log(this)
function chai()
{
    let username = "abhiram"
    // console.log(this.username)
}
// chai()
const chaiagain = () => {
    let username = "abhiram"
    // console.log(this.username)   
}
// chaiagain()

const addTwoNum = (num1 , num2) => {
    return num1+num2;
}
// console.log(addTwoNum(5,6))

const addTwoNum1 = (num1 , num2) =>  (num1+num2);
console.log(addTwoNum1(5,6))