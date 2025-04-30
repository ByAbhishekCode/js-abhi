const myObject = {
    js : "javascript", 
    cpp : "C++",
    c : "C Language",
    html : "HTMl"
}
for (const key in myObject) {
    // console.log(`${key} stands for  ${myObject[key]}`)
}

const extantion = ["js","html",'cpp','c']
for(const key in extantion)
{
    console.log(`The index is ${key} at this index value is ${extantion[key]}`)
}