// lesson-5
 
// class Users  {

//     constructor (username , email , password){

//         this.username = username;
//         this.password = password ;
//         this.email = email;

//     }

//     encryptPassword() 
//     {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 =  new Users('ashish' , "ashish@gmail.com", 1234);

// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());



// under the hood working of class

function  users(username , email , password)
{
this.username = username;
this.password = password ;
this.email = email;
}


users.prototype.encrypt = function() {
    
    return  `${this.password}abc`
}

users.prototype.changeUsername = function() {
    
    return  `${this.username.toUpperCase()}`
}

const user1 =  new users("vijay" , "vijay@google.com" ,1234)

console.log(user1.encrypt());
console.log(user1.changeUsername());