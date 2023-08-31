const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const init = () => {
    inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please enter a brief description of your project.',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions.',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information',
},
{
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project.',
    choices: [
        'MIT', 
        'Apache 2.0', 
        'GPL 3.0', 
        'None'
    ],
},
{
    type: 'input',
    name: 'contributing',
    message: 'Please enter directions for contributing.',
},
{
    type: 'input',
    name: 'tests',
    message: 'Please enter information on tests.',
},
{
    type: 'input',
    name: 'gitHub',
    message: 'Please enter your GitHub username.',
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
}]).then((answers) => {
    const readme = generateMarkdown(answers);

    const fileName = './output/readme.md';
    fs.writeFile(fileName, readme, (err) => {
        err ? console.log(err) : console.log(`Successfully created ${fileName}!`);
    })
});
}

init();