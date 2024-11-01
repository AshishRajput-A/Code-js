// normal function can't momorise previos values
/*function incrse()
{
    let i = 10
    return ++i;
}

let f1 =  incrse()
console.log(f1);
console.log(f1);
console.log(f1);
*/

function increse ()
{
    let num1 = 5

    return function()
    {
        num1++

        return num1
    }
}

let f1 =  increse()

console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());
