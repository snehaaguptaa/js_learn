const name = "sneha"
const age = 22 
console.log(name +" "+ age + " value") //not a good option to work with
console.log(`my name is ${name} and i am ${age} years old value`) //string interpolatioon -> backtick
// ***** string declaration as object *****
const newstring = new String('nihalsneha')
// ***functions 
console.log(newstring)
console.log(newstring.length)
console.log(newstring[2])
console.log(newstring.__proto__)
console.log(newstring.toLowerCase())
console.log(newstring.toUpperCase())
console.log(newstring.charAt(3))
console.log(newstring.indexOf('l'))
const ns = newstring.substr(-4,3)
console.log(ns)
const nns = newstring.slice(-4,8)
console.log(nns)
console.log(newstring.anchor("hello"))
console.log(newstring.bold())