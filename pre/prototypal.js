function person(name)
{
    this.name = name
}

person.prototype.greet = function() {
    console.log(`hello my name is ${this.name}.`)
}

person.prototype.education = function()
{
    console.log("I am currently doing MCA.")
}

let p1 = new person("Ashish")

p1.greet()
p1.education()