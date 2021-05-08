const fs = require('fs');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

var mainHtml = "";

const renderManagerHtml = teamMembers => {
    const manager = teamMembers.filter(employee => employee.getRole() === "Manager")
    console.log(manager);
    mainHtml +=
    `<div class="card w-35 employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager[0].getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager[0].getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager[0].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager[0].getEmail()}">${manager[0].getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager[0].getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    }
const renderEngineerHtml = teamMembers => {
const engineer = teamMembers.filter(employee => employee.getRole() === "Engineer")
//manger html template
engineer.forEach(element => {
    mainHtml += 
    `<div class="card w-35 employee-card">
        <div class="card-header">
            <h2 class="card-title">${element.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${element.getRole()}</h3>
            </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${element.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${element.getGithub()}" target="_blank" rel="noopenernoreferrer">${element.getGithub()}</a></li>
            </ul>
        </div>
    </div>`
                
})
}

const renderInternHtml = teamMembers => {
const intern = teamMembers.filter(employee => employee.getRole() === "Intern")
//manger html template
intern.forEach(element =>
mainHtml +=
`<div class="card w-35 employee-card">
    <div class="card-header">
        <h2 class="card-title">${element.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${element.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${element.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
            <li class="list-group-item">School: ${element.getSchool()}</li>
        </ul>
    </div>
</div>`
)
}
        
function renderMainHtml(teamMembers) {
    renderManagerHtml(teamMembers);
    renderEngineerHtml(teamMembers);
    renderInternHtml(teamMembers);
    //console.log(mainHtml);
        return (
            //main index
        `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">My Team</h1>
                        </div>
                        </div>
                    </div>
                <div class="container">
                    <div class="row">
                        <div class="team-area col-12 d-flex justify-content-center">
                            ${mainHtml}
                        </div>
                    </div>
                </div>
            </body>
        </html>`
    )
};

module.exports = renderMainHtml;
