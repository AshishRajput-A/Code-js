//lesson-7
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

class teacher extends user
{
    constructor (username , email)
    {
        super(username)
        this.email = email
    }
}

const ashu = new user("Ashish");
const apple = new teacher("Iphone" , "apple.com")


console.log(ashu.logme());
console.log(apple);

// createId()


// static method can't gives you access of method to any objects.