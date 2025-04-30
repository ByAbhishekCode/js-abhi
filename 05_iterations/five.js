const { copyFileSync } = require("fs")

const extantion = ["js","html",'cpp','c']
// extantion.forEach( function (item){ console.log(item)})
// extantion.forEach( (item)=>{ console.log(item)})
function printMe(item)
{
    console.log(item);
    
}
// extantion.forEach(printMe)

// extantion.forEach((item,index,arry)=>{console.log(item,index,arry);})
const ary = [
    { languageName : "Python",
      extantion : ".py"
     },
     { languageName : "C Language",
        extantion : ".C"
    },
    { languageName : "Java",
        extantion : ".java"
    },
]

ary.forEach((item)=>{
    console.log(item.languageName,"its extantion is :->" ,item.extantion)
})