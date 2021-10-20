const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return "Office-Number"
  }
}

module.exports = Manager

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
//     name: 'telephone',
//     message: 'What is your office telephone number? (Required)',
//     validate: telephoneInput => {
//       if (telephoneInput) {
//         return true;
//       } else {
//         console.log('Please enter your office telephone number!');
//         return false;
//       }
//     }
//   },
//   {
//     type: 'list',
//     name: 'Role',
//     message: 'Would you like to add an engineer or an intern or to finish building my team?',
//     choices: ['Engineer', 'Inturn', 'Finished building my team'],
//   }
// ]