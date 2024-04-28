
function  setUserName(name) {
 
    this.name = name;
    console.log("called");

}

function createUser(name , email , password){

    setUserName.call(this , name)
    this.email = email;
    this.password = password;
}

const user1 = new createUser("Ashish" , "ashu@google.com" , 1234)
console.log(user1);