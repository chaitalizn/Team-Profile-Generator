const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
        this.gitUrl = this.githubUrl();
    }

    // getRole(

    // )
    githubUrl() {
        const url = `github.com/${this.github}`
        return url;
    }
}
// const test1 = new Engineer('bob', 2, 'test', 905);
// console.log(test1);

module.exports = Engineer;
