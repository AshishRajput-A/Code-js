const  name = ["Ashish" , "Dinesh" , "Lokesh"];
for(const name1 of name)
{
    // console.log(name1+"😊");
}


const map =  new Map();

map.set("GJ" , "Gujarat");
map.set("UP" , "UnterPradesh");
map.set("RJ" , "Rajeshthan");
map.set("HR" , "Haryana");

// console.log(map);

for (const [key , val] of map) {
                                                // maps can be itratble by for of loop
    // console.log(key , val);
} 

const myobj = {
    "game1" : "PUBG",
    "game2" : "FREEFIRE",                      // objects cannot be itratable by for of loop
    "game3" : "GTA6"
}


// for (const [key , val] of myobj) {

//     //  console.log(kay , val);             // for of loop can't itrate map
    
// }

// for-each

const code = ["c","c++" ,"java" ,"javascript"]
let value ;
code.forEach((val) =>{ 
     // console.log(val)
    value =val ;              // for each loop can't return value
    return value;    

})


// filter

const num = [1,2,3,4,5,6,7,8,9,10];

// const  newnum = num.filter((n) =>{ return n>5 })

const  newnum = num.filter((n) => ( n>5 ))
// console.log(newnum);

const num1 = [];
num.forEach((n) =>{ 

    if(n>6 )
    {
           num1.push(n)
    }

})
// console.log(num1);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 
  const userbook =  books.filter((bk) =>( bk.genre == "Non-Fiction"))

//   console.log(userbook);

// reduce

 const newum = num.reduce((acc , cur) => { return acc+cur } , 0)
 console.log(newum);


const shopingCart  = [
    {course : "Datascience" , price:5000},
    {course : "Web-Development" , price:5000},
    {course : "Mobile-Development" , price:5000},
    {course : "UI-Desiner" , price:5000}
]

const totalBill = shopingCart.reduce((acc ,item) =>{return acc+item.price} , 0)
console.log(totalBill,"$");