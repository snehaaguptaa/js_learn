function myname()
{
    return "sneha"
}
console.log(myname())
let greetings = function()
{
    return "nihal"
}
console.log(greetings())
function add(number1 , number2)
{
    console.log(number1+number2)
}
let result = add(2,3)
console.log(result) //no add came
function sum(number1,number2)
{
  let r = number1+number2
  return r
}
let r = sum(2) //nan
let t = sum(2,"y")
//console.log(r)
function userloggedin (username)
{
    if(username === undefined) //(!username)
    {
        //console.log("write")

        return `${username} , just logged in`
    }
    else{
    return username
    }
}
let name = userloggedin()
console.log(name)




