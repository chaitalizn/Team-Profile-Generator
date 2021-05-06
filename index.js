const inquirer = require('inquirer');
//const Employee = require('./Employee');
const Manager = require('./lib/Manager.js');
//const Engineer = require('./Engineer');
//const Intern = require('./Intern');

const teamMembers = [];

function addManager() {
//prompts questions that are same for manager, engineer and intern
    inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?',

            validate: (value)=> {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter your name')
                    return false;
                }
            }
        },
        {
            type: 'integer',
            name: 'id',
            message: 'What is your employee ID number?',

            validate: (value)=> {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter your employee ID number')
                    return false;
                }
            }
        },
        {
            type: 'test',
            name: 'email',
            message: 'What is your email?',

            validate: (value)=> {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter your email')
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'What is your office number?',
        
            validate: (value)=> {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter your office number')
                    return false;
                }
            }
        }
    ])
    .then(function(managerInfo) {
        const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber)
        teamMembers.push(manager);
        console.log(manager);
    }
    )
    buildTeam();
};

function buildTeam() {
    inquirer
    .prompt([
        {
        type: 'list',
        name: 'next',
        message: 'Would you like to add a new engineer, intern or finish building the game?',
        choices: ['Engineer', 'Intern', 'Finish building my team'],

        validate: (value)=> {
            if(value) {
                return true;
            } else {
                console.log('Please select a option')
                return false;
            }
            }
        }
    ])
    .then(function(selected) {
        switch (selected) {
            case selected === 'Engineer':
            addEngineer ();
            case selected === 'Intern':
            addIntern ();
            case selected === 'Finish building my team':
            generateHtml ();
        }
        }
    )
}

function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the engineer name?',

            validate: (value)=> {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter engineer name')
                    return false;
                }
            }
        },
        {
            type: 'integer',
            name: 'id',
            message: "What is engineer's ID number?",

            validate: (value)=> {
                if(value) {
                    return true;
                } else {
                    console.log("Please enter engineer's ID number")
                    return false;
                }
            }
        },
        {
            type: 'test',
            name: 'email',
            message: "What is engineer's email?",

            validate: (value)=> {
                if(value) {
                    return true;
                } else {
                    console.log("Please enter engineer's email")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'github',
            message: "What is engineer's github username?",
        
            validate: (value)=> {
                if(value) {
                    return true;
                } else {
                    console.log("Please enter engineer's github username")
                    return false;
                }
            }
        }
    ])
    .then(function(engieerInfo) {
        const engineer = new Manager(engieerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github)
        teamMembers.push(engineer);
        console.log(engineer);
    }
    )
    buildTeam();
};

function addIntern() {
    inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the intern name?',

            validate: (value)=> {
                if(value) {
                    return true;
                } else {
                    console.log("Please enter intern's name")
                    return false;
                }
            }
        },
        {
            type: 'integer',
            name: 'id',
            message: "What is intern's ID number?",

            validate: (value)=> {
                if(value) {
                    return true;
                } else {
                    console.log("Please enter intern's ID number")
                    return false;
                }
            }
        },
        {
            type: 'test',
            name: 'email',
            message: "What is intern's email?",

            validate: (value)=> {
                if(value) {
                    return true;
                } else {
                    console.log("Please enter intern's email")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'school',
            message: "Which school did the intern attand?",
        
            validate: (value)=> {
                if(value) {
                    return true;
                } else {
                    console.log("Please enter name of school intern attended")
                    return false;
                }
            }
        }
    ])
    .then(function(internInfo) {
        const intern = new Manager(internInfo.name, internInfo.id, internInfo.email, internInfo.school)
        teamMembers.push(intern);
        console.log(intern);
    }
    )
};

addManager();





