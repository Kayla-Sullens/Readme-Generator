// Function to return a license badge based on which license is passed in, or returns an empty string when there is no license.
function renderLicenseBadge(license) {
  let badge = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badge}-green.svg)](${renderLicenseLink(license)})
  `
};

// Function to return the license link, or returns an empty string when there is no license.
function renderLicenseLink(license) {
  let link = license.toLowerCase().replace(" ", "-");
  return `https://choosealicense.com/licenses/${link}/.`
};

// Function to return the license section of README, or returns an empty string when there is no license.
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

// Function to generate markdown for README.
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Licensing](#licensing)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If there are any questions or concerns, I can be reached at:
##### [GitHub: ${data.gitHub} ](https://github.com/${data.gitHub})
##### [Email: ${data.email}](mailto:${data.email})

`
};

module.exports = generateMarkdown;