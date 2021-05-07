class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
        return 'Employee';
    }
}
// const test1 = new Employee('bob', 2, 'test', 905);
// console.log(test1);

module.exports = Employee;
