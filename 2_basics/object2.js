const users = new Object() //singleton
console.log(users) //blank
users.id = 101 
users.fullname = "sneha"
console.log(users)

const tindername = {
    email : "hello@gmail.com" ,
    username : {
        fullname : 
        {
            firstname : "sneha" , 
            lastname : "gupta"
        }
    }
}
console.log(tindername.username.fullname.lastname)
//merging
const obj1 = { 1 : "A" , 2 : "B"}
const obj2 = { 3 : "C" , 4 : "D"}
const obj3 = { obj1  , obj2}
console.log(obj3)
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)
const obj5 = {...obj1 , ...obj2}
console.log(obj5)
console.log(Object.entries(tindername))
//console.log(tindername.hasownproperty('firstname'))