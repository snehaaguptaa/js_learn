let name = "sneha"
let newname = name
newname = "siya"
console.log(name)
console.log(newname) //different due to copy value given 

let u1 = {
    email : "sg@gmail.com"
}
let u2 = u1 
u2.email = "tp@gmail.com"
console.log(u1.email)
console.log(u2.email) //same due to shared referenced address