
function *generator()
{
    yield "ashish";
    yield "ajay";
    yield "vijay";
}

let fun1 =  generator()
let fun2 =  generator()

console.log(fun1.next().value);
console.log(fun1.next().value);
console.log(fun1.next().value);

console.log(fun2.next().value);
console.log(fun2.next().value);



