const date =  new Date();

// console.log( typeof date);

// console.log(  date);


// console.log("toString() .: ",date.toString());

// console.log("toLocaleTimeString() .:",date.toLocaleTimeString());

// console.log("toLocaleDateString().:",date.toLocaleDateString());

// console.log("toJSON() .:",date.toJSON());

// console.log("toLocaleString().:",date.toLocaleString());


let myDate1 = new Date(2024, 1 , 24);
// console.log("toDateString() .:",myDate1.toDateString());

let myDate2 =  new Date("02-25-2024");
// console.log(myDate2.toLocaleString());

let timeStemp =  Date.now();
// console.log(timeStemp);
// console.log(myDate2.getTime());

let newDate = new Date("01-26-2024");
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default' ,{  weekday : "long" , timeZone : ""})
