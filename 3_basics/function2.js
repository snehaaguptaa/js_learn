function canculate(number)
{
    return number
}
const result = canculate(200)
console.log(result)
function many(var1 , ...num1) //rest operator
{
    return num1
}
let r = many(200)
console.log(r) // 200,300 in array

//objcet in function

const user = {
    username : "sneha" , 
    price : 400
}
function handleobj(anyobj)
{
    console.log(`${anyobj.username} , and price = ${anyobj.price}`)
}
//handleobj(user)
handleobj({
    username:"tirara" ,
    price : 600
})
//array object
let arr1 = [2,3,4,5,6]
function myarr(arr1)
{
    return arr1[2]
}
console.log(myarr(arr1))

