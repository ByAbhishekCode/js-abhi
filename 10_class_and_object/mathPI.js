// console.log(Math.PI)
const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter)

const abhiData = {
    name: 'abhishek',
    price: '$50',
    IsAvailable : true,
    orderChai : function(){
        console.log('good ')
    }
}
// console.log(Object.getOwnPropertyDescriptor(abhiData,'name'))
// Object.defineProperty(abhiData,'name',{writable : false, enumerable : false})
// console.log(Object.getOwnPropertyDescriptor(abhiData,'name'))

for (const [key,value] of Object.entries(abhiData)) {
    if(typeof value != 'function'){
    console.log(` ${key} : ${value}`)
    }
    else{
        console.log(" Function : Fucntion()")
    }
}