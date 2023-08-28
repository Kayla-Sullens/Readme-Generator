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
    name: 'tableOfContents',
    message: 'Please enter the Table of Contents for your project',
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
    type: 'input',
    name: 'license',
    message: 'Please select a license for your project.',
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
    name: 'questions',
    message: 'Please enter contact information should someone have questions for you.',
}]).then((answers) => {
    const readme = generateMarkdown(answers);

    const fileName = 'readme.md';
    fs.writeFile(fileName, readme, (err) => {
        err ? console.log(err) : console.log(`Successfully created ${fileName}!`);
    })
});
}

init();