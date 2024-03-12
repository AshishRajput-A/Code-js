function  one ()
{
console.log("hello ashish");
}
// one()


// function addTwoNum (a, b) {

//     return console.log(`Sum.: ${a} + ${b} = ${a+b}`);
// }

function addTwoNum (a, b) {

    
    // let sum =  a+b;
    // return sum;

return a+b;

}

 const result =  addTwoNum(5,10);

// console.log("result.:" , result);



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

    function  handleObject(anyobj) {

        console.log(`username is ${anyobj.username} and price is  ${anyobj.price}.`);
    }


    // handleObject(user)
    // handleObject({username:"Dinesh" , price:599
    // })


    const myarr =  [200 ,300 ,400,500];

    function returnArr (getarr){

        return getarr[2];
    }

    // console.log(returnArr(myarr));

    // console.log(returnArr([100,200,300,400,500]));