
/*function fetchData()
{
    return new Promise( (res,rej) => {

        setTimeout(()=> {

            let success = false

            if(success)
            {
                res("data fetched successfully.")
            }
            else
            {
                rej("Error to fetching data.")
            }
} , 2000)
 })
}
fetchData()
.then((data) =>console.log(data)
)
.catch((error) =>  console.log(error))
*/

function election ()
{
    return new Promise((res , rej) => {
        setTimeout(() => {
            

            let age = 11

           
            if(age >=18)
            {
                res("You are eligible for vote.")
            }
            else 
            {
                rej("You are not eligible for vote")
            }

        }, 3000);
    } )
}

election()
.then((data) => console.log(data)
)
.catch((error) => console.log(error))