const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole () {
        return 'Manager'
    }

    
    getOfficeNumber () {
        return this.officeNumber;
    }

}
// const test1 = new Manager('bob', 2, 'test', 905);
// console.log(test1);

module.exports = Manager;