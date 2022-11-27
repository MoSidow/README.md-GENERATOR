const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ Title, Description, Installation, Usage, Licence, LicenceBadge, Contributing, Tests, GithubUsername, EmailAddress  }) =>

  ` ${LicenceBadge}
  # ${Title}
  ## Description
  ${Description}
  ## Table OF Contents
  * [ Installation ](#install)
  * [ Usage ](#Usg)
  * [ Licence ](#Lic)
  * [ Contributing ](#Con)
  * [ Tests ](#Ts)
  * [ Questions ](#Que)
  
<a name="install"></a>
## Installation
In order for this Program to run, ${Installation} is required to be installed.
<a name="Usg"></a>
## Usage
Using this Program requires you to: ${Usage}.
<a name="Lic"></a>
## Licence
The Project you are currently viewing is licenced under the ${Licence} licence.
<a name="Con"></a>
## Contributing
This Project was contributed by the following Person/People: ${Contributing}
<a name="Ts"></a>
## Tests
Testing of this Program can simply br done by: ${Tests}.
<a name="Que"></a>
## Questions
To view my Github profile visit the link: https://github.com/${GithubUsername}
or contact me by email at ${EmailAddress}
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of this Project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Give a detailed description of your project?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What installations are required to run this Program?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How will this program be used?',
    },
    {
        type: 'list',
        name: 'Licence',
        message: 'What type of licence does this program use? Select One...',
        choices: 
        ["MIT", "ISC", "MPL 2.0","Unlicense"]
      },
    {
      type: 'list',
      name: 'LicenceBadge',
      message: 'Please select the correct licence Badge for your chosen licence.',
      choices: 
      ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
       "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
         "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"]
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Who are the Contributers?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'How can you Test this Program?',
      },
      {
        type: 'input',
        name: 'GithubUsername',
        message: 'What is your Github username?',
      },
      {
        type: 'input',
        name: 'EmailAddress',
        message: 'What is your Email Address?',
      },
  ])
  .then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
