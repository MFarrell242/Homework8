class Employee{
    constructor(name, id, email, title){
        this.name = name;
        this.id = id;
        this.email = email;
        if (title === undefined){
            this.role = "Employee";
        }
        else {
            this.role = title;
        }
        
    }

    getName(){
        return (this.name);
    }
    getId(){
        return(this.id);
    }
    getEmail(){
        return(this.email);
    }
    getRole(){
        return(this.role);
    }
}

module.exports = Employee;