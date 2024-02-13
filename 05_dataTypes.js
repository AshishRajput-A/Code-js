 // primitive data type 
// String , Number ,Boolean ,Null , Undefined , Symbole , BigInt
const name = "Ashish"  //String
const num  = 101  //Number
const isLogedIn = false //Boolean
const Temp = null //null
let userEmail ; //undefined

const id = Symbol('123');
const anotherId = Symbol('123')    // Two Symbole value are not same
// console.log(id , anotherId);
// console.log(id === anotherId);

// const bigNum =  7895648748765123n
// console.log(bigNum);



// non-primitive (Refrence type ) 
// Array , Objects , Functions  
// All the non primitive datatype  typeof value is Object

const Heros = ["halk" , "spiderman" , "batman"];
// console.log(Heros);

function say(a)
{
    console.log("Hello My name is ashish rajput." , a);
}

// say("lode lele 🫡🫡🫡😎😎😎😎")

let a = null;

console.log(typeof (say));
