let score = 99;
// console.log(score);
// console.log(typeof score);

const balance =  new Number(33);
// console.log(balance);

// console.log("toString",balance.toString().length);


// console.log("toFixed.:",balance.toFixed(1));

const otherNum =  23.8966;

// console.log("toPrecision.:",otherNum.toPrecision(4));

const zeros =  100000;
// console.log(zeros.toLocaleString('en-IN'));

const arr1 = [1,2,3,4,5]
// console.log();



//++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++


// console.log(Math);
// console.log("abs() .:",Math.abs(-4)); //conver negative to positive
// console.log("round() .:",Math.round(4.53));
// console.log("Ceil() .:", Math.ceil(4.2));
// console.log("Floor() .:",Math.floor(45.455));
// console.log("min() .:",Math.min(4,6,5,4,8,9));


setInterval(()=>{

    // console.log(Math.floor(Math.random() * 6+1) );

    const min = 10;
    const max= 20;

    console.log(Math.floor(Math.random() * (max - min +1 ) ) + min);


}, 1000)


