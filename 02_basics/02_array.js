const marvelheros = ["ironman","caption","spiderman","antman"]
const dcheros = ["superman","batman","flash","aquaman"]
// marvelheros.push(dcheros)
// console.log(marvelheros)
// console.log(marvelheros[3][3])
// const allheros = marvelheros.concat(dcheros)
// console.log(allheros)
// const allnewheros = [...marvelheros, ...dcheros]
// console.log(allnewheros)
const somearray = [0,1,2,3,[4,5,6,7,[8,9,10,[11,12,13,[14,15,16]]]]]
// console.log(somearray)
// console.dir(somearray, { depth: null });
const newspread = somearray.flat(Infinity)
console.log(newspread)
