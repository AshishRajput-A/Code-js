// before promise comes all the developers use bluebird library for reuest

// Here you know about how to create promise

/*const onePromise =  new Promise(function (resolve , reject) {

    setTimeout(() => {

        console.log("Aysn task in performed");
        resolve()
         }, 1000);
});

onePromise.then(() => {
    console.log('Promise is consumed.');
})*/


/*new Promise((resolve , reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 3000);
}).then(()=> 
{ console.log("Async task 2 resolve");})
*/

/*
const promiseThree = new Promise((resolve , reject) => {

    setTimeout(() => {
        
        resolve({name:"Ashish" , aeg : 20})

    }, 2000);
})
promiseThree.then((user) =>{
    console.log(user);
})
*/

/*
const promiseFour = new Promise((resolve , reject) => {

    setTimeout(() => {

        let error = false

        if(!error)
        {
            resolve({subject : "JavaScript" , fees : 2000})
        }
        else
        {
            reject("something went wrong.")

        }
        }, 2000);
})

promiseFour.then((user) =>{
     console.log(user);
    return user.subject;
})
.then((subject) => {
console.log(subject);
}).catch((error) =>{
    console.log(error);
})
.finally(()=> console.log("Your promise is run."))
*/

/*const promiseFive = new Promise((resolve , reject)=>{
    setTimeout(() => {
        
          let error = false;
          if(!error) 
          {
            resolve({state : "Gujarat" , city :"Ahmedabad"})
          }
          else 
          {
            reject("here are some error.")
          }
 }, 1000);
})


async function consumedPromiseFive() {

   try {
    const response =  await promiseFive;
    console.log(response);
    
   } catch (error) {
    console.log(error);
   }

}

consumedPromiseFive()
*/
/*
async function getUserData() {

    try {

        const res =   await fetch('https://api.github.com/users/hiteshchoudhary');
        const data =  res.json()
        console.log(data);
 } catch (error) {
        console.log(error);
         }
}
getUserData()
*/

  fetch('https://api.github.com/users/hiteshchoudhary')
  .then((response) =>{
     return response.json()
  })
  .then ((data)=> {
    console.log(data);
  })
  .catch((error) => console.log(error))


// promise.all
// yes this is also available, kuch reading aap b kro.