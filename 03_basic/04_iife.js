

//Immediately Invoked Function Expressions (IIFE)


//()()







//named function 
(function chai() {
    console.log("this is real chai ☕ ☕ ☕.");
})();


//simple function
( (name)=>{ console.log(`DB CONNECTED 😊 😊 😊  ${name} .`);} )("Vijay");




//  kai baar global scope ke poluction  se  bachne ke liye iife ka use krte he function 

function  one() 
{
    
    two()
    console.log("one");
}

function  two() 

{
    three()
    console.log("two");
}

function  three() 
{
    console.log("three");
}

one()