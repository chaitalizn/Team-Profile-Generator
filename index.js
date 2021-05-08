const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
//const ManagerHtml = require('./src/manager-temp');
const fs = require('fs');
const path = require('path');
const renderMainHtml = require('./src/render-html-template.js');

const sameQuestions = [{
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
}]

//How to add this array of team member to HTML
const teamMembers = [];

function addManager() {
//prompts questions that are same for manager, engineer and intern
    inquirer
    .prompt([
        ...sameQuestions,
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
            generateHtml(teamMembers);
            break;
        }
        }
    )
}

function addEngineer() {
    inquirer
    .prompt([
        ...sameQuestions,
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
        ...sameQuestions,
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
    const userInput = renderMainHtml(teamMembers);
    fs.writeFile('./dist/index.html', userInput, 'utf8', function(err) {
        if(err) {
            return console.log(err);
        }
    });
};


addManager();





