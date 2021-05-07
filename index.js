const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const ManagerHtml = require('./src/manager-temp');
const fs = require('fs');


//How to add this array of team member to HTML
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
        buildTeam();
    }
    )
    
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
    .then( answer => {
        switch(answer.next) {
            case 'Engineer':
            addEngineer ();
            break;
            case 'Intern':
            addIntern ();
            break;
            case 'Finish building my team':
            generateHtml (JSON.stringify(teamMembers));
            break;
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
    .then( value => {
        const engineer = new Engineer(value.name, value.id, value.email, value.github)
        teamMembers.push(engineer);
        console.log(engineer);
        buildTeam();
    }
    )
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
        const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school)
        teamMembers.push(intern);
        console.log(intern);
        buildTeam();
    }
    )
};

function generateHtml (data) {
    fs.writeFile('./dist/index.html', data, 'utf8', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Done!");
    });
};


addManager();





