let score = 99;
// console.log(score);
// console.log(typeof score);

const balance =  new Number(334);
// console.log(balance);

// console.log("toString",balance.toString().length);  //3


//  console.log("toFixed.:",balance.toFixed(2));  // 334.00

const otherNum =  23.8966;

// console.log("toPrecision.:",otherNum.toPrecision(5)); //23.897

const zeros =  100000;
//  console.log(zeros.toLocaleString('en-IN'));  //1,00,000

const arr1 = [1,2,3,4,5]
// console.log();


const num1 =  new Number(88);

console.log();






//++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++


// console.log(Math);
console.log("abs() .:",Math.abs(-4)); //conver negative to positive
console.log("round() .:",Math.round(4.53));
console.log("Ceil() .:", Math.ceil(4.2));
console.log("Floor() .:",Math.floor(45.455));
console.log("min() .:",Math.min(4,6,5,2,8,9));

/* setInterval(()=>{

    // console.log(Math.floor(Math.random() * 6+1) );

    const min = 10;
    const max= 20;

    console.log(Math.floor(Math.random() * (max - min +1 ) ) + min);


}, 1000)*/


setInterval(()=>{  

    const min =10;
    const max = 20;

    console.log(Math.floor( Math.random() * (max - min + 1)) + min);

} , 1000)

