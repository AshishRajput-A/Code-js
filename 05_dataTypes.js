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

// console.log(typeof (say));


/**********************************  MEMORIZATION ***************************************** */

/* Stack {Primitive}  heap {non-primitive}*/

let user1= "Ashish";
let user2 = user1;    // stack memory gives you copy of variable that means what you change in  copy it not effect main variable.
user2 = "Dinesh"
// console.log(user2);
// console.log(user1);



let Class1 = {
    email:"Ashish@gmail.com",
    upi : "sbi@yolo"
}                     //heap memory gives you refrence of variable that means when you change in any variable the refrence should be change.
let Class2 =  Class1;
Class2.email="Ramesh@gmail.com"
console.log(Class2);
console.log(Class1);
