//acc to memory stored & data access 
//primitive->callbyvalue->when copied direct without reference

//Number , String , Boolean , BigInt , Null , Undefined , Symbol
let n = 123 ;
let dn = 123.5 //number
let s = "123"
let d = 23456
let islogged = true 
let no = null
let id = Symbol('123')
let anotherid= Symbol('123')
//console.log(id===anotherid)
//non-primive -> copy value from referenced
//array , objects , functions
let arr = ["h","u"]
//objcet
{
    name:"sneha"
    job:"engineer"
}
let myobj = {
    names : "tt"   
}
//function
let myf = function(){
    console.log("hello")
}
console.log(typeof(id))