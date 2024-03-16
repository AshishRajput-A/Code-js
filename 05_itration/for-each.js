// for-each loop

const  coding  = ["c" , "cpp" , "java" , "javascript" , "ruby"]

// coding.forEach((element, index) => {
//     console.log(element , index);
// });

// function printme(item)
// {
//     console.log(item);
// }

// coding.forEach(printme)


const myobj = [
    
    {language:"javascript" , filename:".js"},
    {language:"cpp" , filename:".cpp"},
    {language:"c" , filename:".c"},
    {language:"java" , filename:".java"}

]

myobj.forEach((item , key) => {
    
    console.log(`Language .: ${item.language} => FileName .: ${item.filename}` );
});
