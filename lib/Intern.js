const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }
  getRole() {
    return "Intern";
  }
}


module.exports = Intern

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
//   }
// ]