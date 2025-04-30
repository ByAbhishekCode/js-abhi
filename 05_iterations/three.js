// for of loop
const myArray = [1,2,3,4,5,6]
for (const value of myArray) {
    // console.log(value);
    
}

const sayMyName = "Abhishek Kuamr"
for(const char of sayMyName)
{   
    if(char === " ")
        {
            break;
        }
        // console.log(`charater of My name is :-> ${char}`);
}
// for(const char of sayMyName)
// {   
//     if(char === " ")
//         {
//             continue;
//         }
//         console.log(`charater of My name is :-> ${char}`);
// }

const myMap = new Map()
myMap.set("In","India")
myMap.set("USA","United State Of America")
myMap.set("CH","China")
myMap.set("SK","Sri Lanka")

// console.log(myMap);
for (const [key,value] of myMap) {
    console.log(key,':->',value);
    
}
