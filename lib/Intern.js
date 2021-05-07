const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name,  id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Engineer";
    }
    
    // getSchool(

    // )

    // getRole(

    // )
}

// const test1 = new Intern('bob', 2, 'test', 905);
// console.log(test1);

module.exports = Intern;

