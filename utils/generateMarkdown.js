// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badge}-green.svg)](${renderLicenseLink(license)})
  `
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = license.toLowerCase().replace(" ", "-");
  return `https://choosealicense.com/licenses/${link}/.`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {

    return `
## Licensing 
  ${license}
  `
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions?](#questions?)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions?
If there are any questions of concerns, I can be reached at:
##### [github: ${data.gitHub} ](https://github.com/${data.gitHub})
##### [email: ${data.email}](mailto:${data.email})

`
};

module.exports = generateMarkdown;