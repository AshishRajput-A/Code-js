// before promise comes all the developers use bluebird library for reuest

// Here you know about how to create promise

/*const  onePromise =  new Promise(function(resolve , reject) {
   setTimeout(() => {
        console.log("Async task is completed.");
        resolve()
    }, 2000);
});

onePromise.then(function() {
    console.log("Promise is consumed");
})*/


/*new Promise( function (resolve , reject) {
    
    setTimeout(()=>{
        console.log("Task is completed-2");                          // how to create promise 
        resolve()
    })
}
).then(() => {
    console.log("ok done");
})*/ 


/*const promiseThree = new Promise((resolve , reject) => {

    setTimeout(() => {

        resolve({name:"ashish" , age:20})

    } ,5000)
})
promiseThree.then((user)=>{console.log(user);})*/


const promiseFour = new Promise((resolve , reject) =>{

     
    setTimeout(() => {

        let error = true

        if(!error)
        {
            resolve({name:"Ashish" , age:20})
        }
        else
        {
            reject()
        }
        
    }, 2000);
     })

     
    promiseFour.then((user) => {
         console.log(user);
         return user.name;
    }).then((name) =>{
        console.log(name);
    }).catch(function(error){
        console.log(error);
    })











