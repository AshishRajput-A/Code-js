
// first how to declare string  => it gives you array of string
const str1 = new String("Ashish");
// console.log(str1);
// console.log(typeof str1);

const name ="AshishRajput";
const repoCount = 50;
// console.log(`${name}${repoCount} value`);

// console.log(name.length);  //length
// console.log(name.toUpperCase());  // toUpperCase()
// console.log(name.toLowerCase()); //toLowerCase()
//console.log(name.charAt(3)); // charAt()
// console.log(name.indexOf('i')); // indexOf()
//console.log(name.replace("-","")); // replace()
// console.log(name.substring(0,4)); // substring()
// console.log(name.slice(-6,3)); //slice()

const name1 =  "        Ashish     "
console.log(name1);
console.log(name1.trim());     // trim()

const url ="https://ashish.com//ashish%20rajput";
// console.log(url.replace("%20" , "-"));

// console.log(url.includes("rajput"));   // includes()


const game = "Ashish-Rajput-WedDev" // split()
// console.log(game.split("-")); // it split the line  according to condition condition

const id = "Ashish is a nice boy"
// console.log(id.split());     // [ 'Ashish' ]
// console.log(id.split(''));   //[ 'A', 's', 'h', 'i', 's', 'h' ]
// console.log(id.split(' '));  // [ 'Ashish', 'is', 'a', 'nice', 'boy' ]