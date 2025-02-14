const course = 
{
    name : "english",
    cousse : "101kcc",
    courseinstructor: "nihalsir" 
}
console.log(course.courseinstructor)
console.log(course["courseinstructor"])
const {courseinstructor:ci} = course
console.log(ci)
