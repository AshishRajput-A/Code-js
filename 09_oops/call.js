// lesson-4

function  setUserName(name) {
 
    this.name = name;
    console.log("called" ,this.name);

}

function createUser(name , email , password){

    setUserName.call(this, name)
   
    
    this.email = email;
    this.password = password;
}

const user1 = new createUser("Ashish" , "ashu@google.com" , 1234)
console.log(user1);



const person = { name: "Hitesh" };

function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}.`);
}

greet.call(person, "Hello"); // Output: Hello, my name is Hitesh.
