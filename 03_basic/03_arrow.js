const user  = {

    username : "ashish",
    price : 399,

    welcome : function(){

        console.log(this);
        console.log(`${this.username} welcome to website.😎😎😎`);
        
    }

}


// user.welcome()
// user.username = "vijay";
// user.welcome()

// console.log(this);   // {}


function chai ()
{

    // let name = "ashish";
    
    // console.log(this.name);  // undefined

    // console.log(this);    // Object [global]
}

// chai()


const fun = () =>
{

     let name = "ashish";
     console.log(this);

}


 fun()



// const addTwo  = (a,b) =>{

//     return a+b;
// }

// console.log(addTwo(15,5));


const obj =  () => ({name:"ashish" , age:20})

console.log(obj());