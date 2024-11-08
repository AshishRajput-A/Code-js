
// console.log("First")
// setTimeout(()=>{
//     console.log("Second");
// })
// console.log("Three")


// console.log("this is first");

// function mynane()
// {
//     console.log("this is a function");
    
// }

// console.log("this is third");

/*
function fetchUser()
{
    return new Promise ((res , rej) =>{
        setTimeout(() => {
             rej({name : "ashish" , url : "https://ashish.com"})
}, 2000);
    })
}


async function getData() {

    try {
        
        console.log("Fetching user data...");

        const userData =   await fetchUser()

        console.log("User Data fetched successfully...");
        
        console.log("User Data.:" , userData);
        

    } catch (error) {
        console.log("error.:",error);
        
    }
}

getData()
*/

// get multiple proises in one async function 

function getPost()
{
    return new Promise((res , rej) => {
        
        setTimeout(() => {
            
            res("Your post see successfully...")

        }, 2000);
    })
}

function getcomment()
{
    return new Promise ((res , rej)=>{
        setTimeout(() => {
            
            res("Many people comment on your post ...")
        }, 4000);
    })
}

async function  getfun ()
{
    try {

        console.log("Fetching data..."); 
        
        // const data1 =  await getPost();
        // const data2 =  await getcomment()

        const [ data1 ,data2] = await Promise.all([getPost() , getcomment()])

        console.log(data1);
        console.log(data2);
        
        } catch (error) {
      console.error("Error in data fetching..." , error)  
    }
}

getfun()