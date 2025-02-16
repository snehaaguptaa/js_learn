let a = 10 
const b = 20
var c = 100
d = 600
console.log(a)
console.log(b)
console.log(c)
console.log("new")
if(true)
{
    let a = 30
    const b = 60
    var c = 1000
    d = 60
    console.log(c)
}
console.log(a) //no change due to scope
console.log(b) //no change
console.log(c) //change
console.log(d)//change -> problem while writing function

//


