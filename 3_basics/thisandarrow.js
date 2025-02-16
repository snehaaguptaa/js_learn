const tindername  = {
    user : "sneha" ,
    price : 300 ,
    welcome : function(){
    console.log(`${this.user} : user and price : ${this.price}`)
    console.log(this) //proper object 
    }
}
tindername.welcome()
tindername.user = "snehaa"
tindername.welcome()
console.log(this) //empty object

function chai()
{
    let username = "sneha"
    console.log(this) //proper instructiona md feature
    console.log(this.username) //undefined
}
chai()
const chaii = ()=> {
    let username = "tumtum"
    console.log(this)
    console.log(this.username) //undefined
} 
function addtwo(num1,num2)
{
    return num1+num2
}
console.log(addtwo(2,3))
const addtwon = (num1,num2)=>  (num1 + num2)  //remove curly braces->no return need or normal num1+num2 
//implicit return upr wala
console.log(addtwon(2,3))

//explicit return use curly braces and return

const returnobj = (num1,num2) => ({name : "sneha"})
//console.log(returnobj(2,3))->no obj return->no ()->return
console.log(returnobj(2,3))




