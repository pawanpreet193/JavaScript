console.log("hello")
let a = null;
let b = 345;
let c = "Have a great day"
let d = Symbol("This is great")
let e = BigInt("84909")
let f = false
let g
console.log(a, b, c, d, e, f, g)
console.log(typeof (g))

console.log( c + b)
console.log(typeof (c+b))
// console.log(typeof (e + b))             cannot have a single type


// creating objects
let obj =
{
    student_name : "Harry",
    class: "passout",
    grade : "A+",

}
console.log(obj['student_name'])
console.log(obj.class)
console.log(obj)
obj['role'] = "youtuber"
console.log(obj)
obj['passion'] = "coding"
console.log(obj)

let dict =
{
    adjective : "a word that tells you more about a noun",
    bureaucracy : "(often used in a critical way) the system of official rules that an organization has for doing something, that people often think is too complicated",
    colleague : "a person who works at the same place as you",
    democracy : "a system in which the government of a country is elected by the people"

}
console.log(dict)
obj.hobby = "coding"         //with this just felt that really javascript is a language that will go beyond limits to run your code
let x = prompt("Tell your age")
