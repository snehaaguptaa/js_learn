let newdate = new Date()
console.log(newdate)
console.log(newdate.toString())
console.log(newdate.toLocaleTimeString())
console.log(typeof (newdate))
let createdate = new Date(2025,1,6,0,19,25)
console.log(createdate.toLocaleString())
// **** time stamp
let timestamp = new Date()
console.log(timestamp) //millisecond
let ts = Date.now()
console.log(ts)// millisecond value tll now from 1950
console.log(timestamp.getTime()) //to get milliseond value to compare
//to convert second
console.log(Math.floor(ts/1000))
// mainn 
let cdd = new Date()
console.log(cdd.toLocaleString('default',
    {
        weekday : "long"
    }

))
