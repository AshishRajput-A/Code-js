const date =  new Date();

// console.log( typeof date);

// console.log(  date);


// console.log("toString() .: ",date.toString());  // Sun Apr 14 2024 12:53:31 GMT+0000 (Coordinated Universal Time)

// console.log("toLocaleTimeString() .:",date.toLocaleTimeString());  // 12:53:31 PM

// console.log("toLocaleDateString().:",date.toLocaleDateString());  // 4/14/2024

// console.log("toJSON() .:",date.toJSON());  //2024-04-14T12:53:31.928Z

// console.log("toLocaleString().:",date.toLocaleString()); // 4/14/2024, 12:53:31 PM


let myDate1 = new Date(2024, 3 , 14);
// console.log("toDateString() .:",myDate1.toDateString());

let myDate2 =  new Date(2024, 3 ,14 , 18,31);
// console.log(myDate2.toLocaleString());

// MM//DD/YYYY
const date1 =  new Date("01-14-2014")
// console.log(date1.toLocaleString());

// yyyy/mm/dd
const date2 =  new Date("2023-04-14")
// console.log(date2.toLocaleString());






let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.getTime());






