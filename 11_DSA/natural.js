
// sum of all natural number
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


//  sum of enter number digit

 function sum(num){

    let sum =0

    while( num > 0)
        {
            sum  += num %10;
            num = Math.floor(num/10)
        }
return sum

}

console.log(sum(101));