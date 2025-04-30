const myNum = [1,2,3]

const newNum = myNum.reduce((acc,curvalue)=>{
    console.log(`acc value is ${acc} and my cuurnt value is ${curvalue}.`)
    return acc+curvalue
},0 )
// console.log(newNum)

const shoppingcart = [
    {
        course : "web dev",
        price : 1000
    },
    {
        course : "fontend",
        price : 500
    },
    {
        course : "backend",
        price : 500
    },
]
const sum = shoppingcart.reduce((acc,value)=> acc+value.price,0)
console.log(sum)