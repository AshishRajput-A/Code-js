//singleton 
// when we create a object throw constructor that time singleton object created.
const oj1 = new Object();



//object literals
// when we create a object throw litrel than that is not singleton object

const mySym =  Symbol("key1");

const user1 = { 
    name:"Ashish",
    "full name":"Ashish Rajput",   // must watch one more time
    age:20,                            
    email:"ashish@google.com",
    isLogedIn : false,
    location : "Ahmedabad",
    [mySym] : "my key one"  // use [] breaket when you use symbol variable as a object key
};


// console.log(user1["full name"]);
console.log(  user1[mySym]);
console.log( typeof mySym );

user1.email ="ashish@microsoft.com";

Object.freeze(user1)

user1.email="ashis@Facebook.com";

// console.log(user1);


const obj2 = {
    name:"Rajput Ashish",
    location : "Surat",
    data:"i like to do coding because this is my proffesion."
}
 
obj2.greeting = function(){console.log(`Hello Dear ${this.name} welcome to are site 😎😎😎😎`); }





// console.log(obj2);
// console.log(obj2.greeting());



