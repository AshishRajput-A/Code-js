
// 1. sum of all natural number
function sumOfNatural( num)
{
// let sum = 0
    // for(i=0;i<=num;i++)
    //     {
    //        sum += i
    //     }
    //     console.log(sum);

    console.log(num*(num+1)/2);

    }

// sumOfNatural(5)


// 2. sum of enter number digit

 /*function sum(num){

    let sum =0

    while( num > 0)
        {
            sum  += num %10;
            num = Math.floor(num/10)
        }
return sum

}

console.log(sum(111));*/


// 3. count  the number of digits of a number

function countDigit(num) {

    num = Math.abs(num);
    let count = 0;

    do {
        count ++;
        num = Math.floor(num / 10);
        
    } while (num>0);

    return count;
}
console.log(countDigit(1005));