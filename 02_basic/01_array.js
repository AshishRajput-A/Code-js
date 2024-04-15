const arr1 = [1, 2, 3, 4, true, "ashish", undefined];

// console.log(arr1);

const heros = ["batman", "spiderman", "thor", "ironman"];
// console.log(heros);
// console.log(heros[1]);

// Array methods

const myarr = [0,1, 2, 3, 4, 5];
console.log( "myarr .:" ,myarr);

// myarr.push(6, 7, 8, 9, 10);
// console.log(myarr);                 // add data end of the array


// myarr.pop();                        // remove data end of the array  
// console.log(myarr);


// myarr.unshift(9);                   // add data start of the array
// console.log(myarr);


// myarr.shift();                     // remove data start of the array
// console.log(myarr);   

// console.log(myarr.includes(6));  // false
// console.log(myarr.indexOf(3));  // 2

const newarr = myarr.join(""); // join() convert array to string

// console.log(myarr); //  [ 1, 2, 3, 4, 5 ]
// console.log(newarr); //  12345



// slice spice  IMP Question

 const myslice =  myarr.slice(1,3)
 console.log("myslice.:" , myslice);  // slice just  take porstion value and don't disturb array
 console.log( "myarr .:" ,myarr);


const mysplice =  myarr.splice(1,3);
console.log("mysplice",mysplice);   // splice take porstion value from refrence  array
console.log( "myarr .:" ,myarr);






