const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
  }
  getRole() {
    return "Engineer";
  }
}




// // TODO: Include packages needed for this application

// const fs = require("fs");
// const inquirer = require('inquirer');
// const path = require("path");
// const markdown = require("./utils/generateMarkdown.js");

// // TODO: Create an array of questions for user input

// const questionsArray = [
//   {
//     type: 'input',
//     name: 'name',
//     message: 'What is your name? (Required)',
//     validate: nameInput => {
//       if (nameInput) {
//         return true;
//       } else {
//         console.log('Please enter your name!');
//         return false;
//       }
//     }
//   },
//   {
//     type: 'input',
//     name: 'id',
//     message: 'What is your employee ID? (Required)',
//     validate: emailInput => {
//       if (idInput) {
//         return true;
//       } else {
//         console.log('Please enter your employee ID!');
//         return false;
//       }
//     }
//   },
//   {
//     type: 'input',
//     name: 'email',
//     message: 'What is your email? (Required)',
//     validate: emailInput => {
//       if (emailInput) {
//         return true;
//       } else {
//         console.log('Please enter your email!');
//         return false;
//       }
//     }
//   },
//   {
//     type: 'input',
//     name: 'github',
//     message: 'Enter your GitHub Username (Required)',
//     validate: githubInput => {
//       if (githubInput) {
//         return true;
//       } else {
//         console.log('Please enter your GitHub username!');
//         return false;
//       }
//     }
//   }
// ]