// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
    {
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
          message: 'Please enter your installation guide for your project: ',
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
          choices: [
              {name: 'MIT', value: 'MIT'},
              {name: 'ISC', value: 'ISC'},
              {name: 'Apache', value: 'Apache'},
              {name: 'GPL2', value: 'GPL2'}],
        },
        {
          type: 'editor',
          message: 'Please give details regarding how to contribute: ',
          name: 'contributing',
        },
        {
          type: 'input',
          message: 'Please enter your name: ',
          name: 'yourname',
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
