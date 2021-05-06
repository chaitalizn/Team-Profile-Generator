class Employee {
    constructor(name = "") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Emlopyee";
    }

    //what does this code do?
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;