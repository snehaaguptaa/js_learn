const score = 500
console.log(typeof (score))
const balance = new Number(100.80076)
console.log(typeof balance)
console.log(balance) //number -> define
// ****functions
console.log(typeof (balance.toString()))
console.log(balance.toString().toLowerCase())
console.log(typeof balance)
console.log(balance.toFixed(4))
const other_no = 20078978767
console.log(other_no.toPrecision(3))
console.log(other_no.toLocaleString('en-in'))

// *****math*****
console.log(Math) //object
// **** functions 
console.log(Math.PI.toPrecision(3))
console.log(Math.round(3.7898767667))
console.log(Math.ceil(4.5)) //floor->ceil
console.log(Math.random()) //randomvalue ->0 or 1
console.log(Math.random()*10) //multiply by 10 to get btw  0 and 9 - 0.12
console.log(Math.random()*10) + 1 //not good work

// ***** formula

const min = 10 
const max = 20
console.log(Math.floor((Math.random()*(max-min+1) )+min)) //after avoid 0 we add mkin to get minimun vaale we want
