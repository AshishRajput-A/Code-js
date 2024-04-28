class user 
{
    constructor (username) 
    {
        this.username =  username;
    }

    logme()
    {
        return `Logged in by ${this.username}`
    }

   static createId()
    {
        return `your id is  123`;
    }
}


const ashu = new user("Ashish");

console.log(ashu.logme());