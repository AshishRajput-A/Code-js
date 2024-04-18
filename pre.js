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

console.log(map);

for (const [key , val] of map) {
                                                // maps can be itratble by for of loop
    // console.log(key , val);
} 

const myobj = {
    "game1" : "PUBG",
    "game2" : "FREEFIRE",                      // objects cannot be itratable by for of loop
    "game3" : "GTA6"
}


for (const [key , val] of myobj) {

     console.log(kay , val);
    
}