
// for of
let arr1 = [1,2,3,4,5]
// for (const num of arr1) 
// {
// console.log(num);
// }

const  greeting = "Hello World!"

//  for (const str of greeting) {
//     if(str === " ")
//     {
//         continue;
//     }
//     console.log(`Each char is ${str} ${str.length}`);
//    }


// Maps

const map =  new Map();

map.set("Gujarat","gj")
map.set("UtterPradesh","up")
console.log(map);

for(const [key,value] of map)
{
    console.log(`${key} ===>  ${value}`);
} 

const myobj = { "game1" : "freefire" , "game2":"pubg"}

// for( const [key , value] of myobj)
// {
//    console.log(`${key} ===>  ${value}`); // for of loop can't itrate objects.
// }



// 2024 prectice 

/*const name = "ashish"
let data ;
for(data of name)
{
    console.log(data);
}*/