const mysym = Symbol("key1")
const jsuser = {
    name : "Sneha" ,  //string
    age : 22 ,    //constant Number
    isLoggedIn : true ,  //boolean
    Location : "jaipur" ,  //string
    [mysym] : "key1" ,
    LastloggedIn :  ["m" , "t" , "w"] //array
} 
console.log(jsuser.name)
console.log(jsuser["name"])
console.log(jsuser["name"])
console.log(jsuser[mysym])
jsuser.name = "nihal"
console.log(jsuser.name)
//Object.freeze(jsuser) //to freeze the object
jsuser.name = "happy" 
console.log(jsuser.name) //nochangedueto freeze
jsuser.greetings = function()
{
    console.log("hey")
}
jsuser.greetingstwo = function()
{
    console.log(`hey i am , ${this.name}`)
}
console.log(jsuser.greetings) 
console.log(jsuser.greetings())
console.log(jsuser.greetingstwo())




