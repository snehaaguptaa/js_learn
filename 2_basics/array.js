const myarr = [0,1,2,3,4]
console.log(typeof (myarr))
console.log(myarr[2])
const myarr1 = new Array("hello","my","name")
console.log(typeof(myarr1))
console.log(myarr1)
// *****Methods*****
// 1
myarr.push(2)
console.log(myarr)
myarr.pop()
console.log(myarr)
//2 not good to use->change all values shifts
myarr.unshift(7)
myarr.unshift(8)
console.log(myarr)
// 3 not good ->change value shifts
myarr.shift()
console.log(myarr)
// 4 
console.log(myarr.includes(7))
console.log(myarr.indexOf(2))

const newarr2 = myarr.join()
console.log(myarr.join()) //into normal string with commas ->type->string


// 5 -> SLICE

console.log("A : " , myarr)
console.log(myarr.slice(1,3)) // no chnage in new array
console.log("B : " ,  myarr)

//6 -> splice

console.log("A : " , myarr)
console.log(myarr.splice(0,3)) // 1,2,3
console.log("B : "  , myarr)

// 7

let arr1 = [1,2,3,4,5]
const arr2 = [6,7]
let arr3 = new Array(8,9)
//arr1.push(arr2)
//console.log(arr1) // arr inside arr-> [3][1]->no good

//concat
const arr5 = arr1.concat(arr2)
console.log(arr5)
console.log(arr5.concat(arr1))
//SPREAD
const arr6 = [...arr5 , ...arr1]
console.log(arr6)
//flat
const aa = [1,2,3,[4,[5,6]],7,[8,[9,3]]]
console.log(aa.flat(Infinity)) // 0,1,2....infity depend on depth
//to convert arr
console.log(Array.isArray([1,2,3,4,5,"hitesh"]))
console.log(Array.from("hitesh"))
const arr9 = Array.from("nihal")
console.log(arr9)
console.log(Array.from({name : "sneha"})) // keys ya vaues se array abbi not imp-> [] obj
let score1 = 100
let score2 = 200
console.log(Array.of(score1,score2))





