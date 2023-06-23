import inquirer from 'inquirer';
import fs from 'fs';

// Define questions for the user
var questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: "Provide a description for your project:",
  },
  {
    type: 'input',
    name: 'installation',
    message: "Provide installation instructions:",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Provide usage instructions:",
  },
  {
    type: 'list',
    name: 'license',
    message: "Choose a license for your project:",
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'Unlicense'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: "Provide contribution guidelines:",
  },
  {
    type: 'input',
    name: 'tests',
    message: "Provide test instructions:",
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: "Enter your GitHub username:",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter your email address:",
  },
];

// Use Inquirer to ask the user
inquirer.prompt(questions).then((answers) => {
  // Generate README.md content
  var content = `# ${answers.title}

![License](https://img.shields.io/badge/license-${answers.license}-blue)

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is covered under the ${answers.license} license.

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

GitHub profile: [${answers.githubUsername}](https://github.com/${answers.githubUsername})

For additional questions, please contact me at: ${answers.email}

`;

  // Create README.md file
  fs.writeFile("README.md", content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("README.md file has been successfully created!");
    }
  });
});