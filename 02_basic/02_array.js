const marval_heros = ["thod" , "spiderman" , "ironman"];
const  dc_heros = ["superman" , "flash" , "batman"];

// marval_heros.push(dc_heros);
// console.log(marval_heros);

const allHerosConcat =  marval_heros.concat(dc_heros);
// console.log("AllHerosConcat.:",allHerosConcat);

const AllHeros_Spreade =  [...marval_heros , ...dc_heros]
// console.log("AllHeros_Spreade",allHerosConcat);

const another_array = [1,2,3,[4,5,6],7,[8],9,10]
// console.log("another_array",another_array);

const real_another_array =  another_array.flat(Infinity);
// console.log("real_another_array.:" , real_another_array);

const name="Ashish"
// console.log(Array.isArray(name)); //  false
 //console.log(Array.from(name));  //[ 'A', 's', 'h', 'i', 's', 'h' ]
 
// console.log(Array.from({name:"Ashish"})); // interesting


let score1 =  100;
let score2 =  200;
let score3 =  300;

console.log(Array.of(score1,score2,score3));