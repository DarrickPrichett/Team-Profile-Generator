class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee

// // TODO: Include packages needed for this application

// const fs = require("fs");
// let inquirer = require('inquirer');
// const path = require("path");
// const markdown = require("./utils/generateMarkdown.js");

// // TODO: Create an array of questions for user input

// const questionsArray = 