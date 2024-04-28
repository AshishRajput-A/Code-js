
class user 
{
    constructor ( email , password) 
    {

         this.email = email;
         this.password = password;
    }

    get password()
    {
         return `abc${this._password}xyz`
    }

    set password(value)
    {
        this._password = value;
    }


    get email()
    {
        return `${this._email.toUpperCase()}`
    }

    set email (value)
    {
        this._email = value
    }
}

const user1 = new user("Ashish@ai",123);

console.log(user1.password);
console.log(user1.email);