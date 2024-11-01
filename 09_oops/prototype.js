// let name = "ashish    "
// find ture length of any string
let name = "  ashish                 "

String.prototype.trueLength = function() {

    console.log(`True length is .: ${this.trim().length}.`);

}

name.trueLength()




const  myheros = ["thor" , "ironman ", "spiderman"]

let heros = {
    thor : "thunder" , 
    spiderman : "sling",

    getSpiderPower: function() {`spider power is ${this.spiderman}`}
}

Object.prototype.hitesh = () =>{
    console.log(`Hitesh is present in all object.`);
}

   Array.prototype.heyAshish = function(){
     
    console.log(`Ashish is hey `);

   }

heros.hitesh()
myheros.hitesh()
myheros.heyAshish()

// try {
//     heros.heyAshish()
    
// } catch (error) {
//     console.log("error is ocure");
// }

//    inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)