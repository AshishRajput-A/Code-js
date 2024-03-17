//reduce

const mynum = [1,2,3,4,5,6];

const Total =  mynum.reduce((acc , cur) => acc+cur , 0 )
console.log(Total);

// const total = mynum.reduce((acc,cur) => acc+cur , 0)
// console.log(total);



const cart = [ 
    
    {course:"Full stack web dev" , price:3500},
    {course:"Data science" , price:3200},
    {course:"Java" , price:24000},
    {course:"English spoken" , price:8500},
    

]

const BillToPay = cart.reduce((acc , item) => acc + item.price , 0 )
// console.log("Total Bill To Pay .:", BillToPay);