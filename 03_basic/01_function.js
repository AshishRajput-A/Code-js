function  one ()
{
console.log("hello ashish");
}
// one()


// function addTwoNum (a, b) {

//     if(typeof a === 'number'  && typeof b === 'number')
//     {
//         console.log(`Sum.: ${a} + ${b} = ${a+b}`);

//     }
//     else
//     {
//         console.log('Both Argument Must Be Number.');
//     }
// }

// addTwoNum(5,10);


function  addnum (a,b) {

    // let sum =  a+b;
    // return sum;

    return a+b;
}



 const result =   addnum(9,91);
//   console.log("result.:" , result);



function  loginUserMessage(username = "sam") {

    if(!username)
    {
        console.log('please enter  a user name');
        return;

        
    }

    return `${username} just logged in 😊😊.`;
}

//console.log(loginUserMessage());


const user = {
    username : "Ashish",
    price : 299
    }     

    function  handleObject(anyobj) {                     // object in function

        console.log(`username is ${anyobj.username} and price is  ${anyobj.price}.`);
    }
    // handleObject(user)
    // handleObject({username:"Dinesh" , price:599
    // })


function userCartPrice ( ...num) {

    return num;                      // array in function 
}       

console.log(userCartPrice(100 ,200 ,300,400 , 5000));

const  myarr = [200,400,600,800];

function  returnSecondValue (arr) {

    return arr[2]
}


console.log(returnSecondValue(myarr));
console.log(returnSecondValue(["ashish" , "dinesh" , "lalit" , "rakesh"]));

