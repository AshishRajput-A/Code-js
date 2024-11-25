// lesson-1

/*const user = {
    name : "Ashish", 
    age : 20,
    city : "Ahmedabad",

    getAllDetail : function() {
        console.log(this);
    }
}

console.log(user.name);
console.log(user.getAllDetail());
*/


function user (name , age) 
{
    this.name = name;             // this keyword makes new object {} that means this.name is new object
    this.age = age;
}

const  user1 = new user("Ashish" , 20);
const  user2 = new user("Vijay" , 16)


  console.log(user1);
  console.log(user2);