const inquirer = require('inquirer');
const fs = require('fs');



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
      message: 'What installations are required to run this file?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How will this program be used?',
    },
    {
      type: 'input',
      name: 'Licence',
      message: 'What type of licence does this program use?',
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
        name: 'Github-Username',
        message: 'What is your Github username?',
      },
      {
        type: 'input',
        name: 'Email-Address',
        message: 'What is your Email Address?',
      },
  ])

