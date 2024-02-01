// Primitive

// 7 types : String , Number , Boolean ,  Null , Undefiend , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 774783939n



// Reference (Non-Primitive)

//Array , Objects , Function
const heros = ["shaktiman", "Naagraj","doga"];
let myObj = {
    name:"harshal",
    age:21,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof myFunction);