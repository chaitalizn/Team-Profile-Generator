const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}
// const test1 = new Engineer('bob', 2, 'test', 905);
// console.log(test1);
// console.log(test1.getGithub());

module.exports = Engineer;
