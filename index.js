// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [{
        type: 'input',
        message: 'Please enter your project title: ',
        name: 'title',
    },
    {
        type: 'editor',
        message: 'Please enter your project description: ',
        name: 'description',
    },
    {
        type: 'editor',
        message: 'Please enter installation guide for your project: ',
        name: 'installation',
    },
    {
        type: 'editor',
        message: 'Please enter usage guide for your project:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please choose your license preference',
        name: 'license',
        choices: [{
                name: 'MIT',
                value: 'MIT'
            },
            {
                name: 'ISC',
                value: 'ISC'
            },
            {
                name: 'Apache',
                value: 'Apache'
            },
            {
                name: 'GPL2',
                value: 'GPL2'
            }
        ],
    },
    {
        type: 'input',
        message: 'Please enter the copyright year to be displayed in license: ',
        name: 'year',
    },
    {
        type: 'editor',
        message: 'Please give details regarding how to contribute: ',
        name: 'contributing',
    },
    {
        type: 'editor',
        message: 'Please give details regarding how to test: ',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Please enter your name: ',
        name: 'personName',
    },
    {
        type: 'input',
        message: 'Please enter your email: ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter yor git userid: ',
        name: 'gituserid',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Readme logged!'));
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((res) => {
            const markdownContent = generateMarkdown(res);
            writeToFile("./generated-files/README.md", markdownContent);
        })
}

// Function call to initialize app
init();