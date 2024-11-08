const person = {
    name : "ashish",
    
    greet ()  {
        console.log(`hello my name is ${this.name}`);
        
    }

}

person.greet()

let p1 =  person.greet
p1()

let p2 = person.greet.bind({name : "Lokesh"})
p2()