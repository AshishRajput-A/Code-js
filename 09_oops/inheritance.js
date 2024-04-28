
 class user 
 {
    constructor(username)
    {
        this.username = username;

    }

    legme() 
    {
        return  `Logged in by ${this.username}.`
    }
 }

 class teacher extends user
 {

    constructor (username , email) 
    {
        super(username)
       this.email = email
    }

    teacherName() 
    {
        return `Feculty Name is ${this.username}` ;
    }
 }

 
 const teacher1 = new teacher("Ashish" ,"ashu@fb.com");
 const teacher2 = new user("Ramesh" );


 console.log(teacher1.teacherName());
 console.log(teacher2.legme());


 console.log(teacher1 instanceof teacher);   // true