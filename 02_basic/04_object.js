const  tinderUser = new Object({name:"ashish", age:20}); // singleton object
// console.log(tinderUser);



const user = {
    email : "some@gmail.com",

    userdata : {

        name : "Ashish Rajput",
        age:20
        
    }
,
    education : {

        class : "BCA-3 YEAR student",
        skill : "Web development"
    }
}

// console.log(user.education.skill);



// mearg  to object in to other object 

const  obj1 = {1:"a" , 2:"b" , 3:"c"};
const  obj2 = {4:"d" , 5:"e",6:"f"};
let obj3;

// console.log("obj1.:" , obj1);
// console.log("obj2.:",obj2);

// obj3 = Object.assign({}, obj1 ,obj2)

obj3 = {...obj1,...obj2};

// console.log("obj3.:",obj3);

const  users = [{name:"ashish" , email:"ashish@google.com"},{name:"dinesh" , email:"dinesh@yahoo.com"}, {name:"lokesh" , email:"lokesh@gmail.com"} ,{name:"pinku" , email:"pinku@yahoo.com"}]


// console.log(users[1].email);
// console.log(users);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  //Object.keys()
// console.log(Object.values(tinderUser)); // Object.values()
// console.log(Object.entries(tinderUser));  // Object.entries()

// console.log(tinderUser.hasOwnProperty("age"));


const course = {
    coursename : "javascript",
    price:999,
    teacher:"HiteshChoudhary"      
};
const {teacher , price , coursename:subject} = course;                        // object destructring
console.log(teacher ,price , subject);

