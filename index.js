const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const pageTemplate = require('./src/page-template')
var employees = [];

function entryPoint() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter your name team Manager? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: 'What is your I.D Number? (Required)',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter your I.D Number!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email? (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'officePhone',
                message: 'What is your Office Telephone Number? (Required)',
                validate: officePhoneInput => {
                    if (officePhoneInput) {
                        return true;
                    } else {
                        console.log('Please enter your Office Telephone Number!');
                        return false;
                    }
                }
            },
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officePhone)
            employees.push(Manager);
            console.log('----------------->', manager);
            promtNewEmployee()
        });

}

const promtNewEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Would you like to add an engineer or an intern or to finish building my team?',
                choices: ['Engineer', 'Intern', 'Finish building my team'],
            }
        ])
        .then((answers) => {
            if (answers.role === 'Engineer') {
                promptNewEngineer()
            } else if (answers.role === 'Intern') {
                promptNewIntern()
            } else if (answers.role === 'Finish building my team') {
                console.log("build our team")
                pageTemplate(answers)
                function writeToFile(pageTemplate, data) {
                    return fs.writeFileSync(path.join(process.cwd(),pageTemplate),data);
                }
            }
        })
}
const promptNewEngineer = () => {
    console.log('ask eng question')
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter new Engineer name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name!');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: 'What is the new Engineer I.D Number? (Required)',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter the new Engineer I.D Number!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the new Engineer email? (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter the new Engineer email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the new Engineer GitHub account? (Required)',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter the new Engineer GitHub account!');
                        return false;
                    }
                }
            },
        ])
    // use engineer constructor to create eng
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employees.push(Engineer);
            console.log('----------------->', engineer)
            promtNewEmployee()
        });
    // push engineer constructor to overall array
    
}
const promptNewIntern = () => {
    console.log('ask int question')
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter new Intern name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name!');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: 'What is the new Intern I.D Number? (Required)',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter the new Intern I.D Number!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the new Intern email? (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter the new Intern email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the new Intern current school? (Required)',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please enter the new Intern current school!');
                        return false;
                    }
                }
            },
        ])
    // use intern constructor to create eng
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            employees.push(Intern);
            console.log('----------------->', intern)
            promtNewEmployee()
        });
    // push intern constructor to overall array
    
}

entryPoint()