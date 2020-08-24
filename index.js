const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [{
  type: "input",
  name: "Title",
  message: "Project Title?",

},
{
  type: "input",
  name: "Description",
  message: "Project Description?",
},
{
  type: "input",
  name: "Installation",
  message: "Add any Installation Instructions:",
},
{
  type: "input",
  name: "Usage",
  message: "Add any Usage Instructions:",
},
{
  type: "input",
  name: "Contributing",
  message: "Add any Contributors to this Project:",
},
{
  type: "input",
  name: "Tests",
  message: "Add any Tests for your Project:",
},
{
  type: "input",
  name: "License",
  message: "Project License?",
},
{
  type: "input",
  name: "Username",
  message: "What is your GitHub Username?",
},
{
  type: "input",
  name: "Email",
  message: "What is your email address?",
}
];

// function to write README file
// function formatText (answers) {
//     let outputString = "";
//     outputString += `# ${answers.Title} \n`;
//     outputString += `# ${answers.Description} \n`;
//     return outputString;
// }

function formatText(answers) {
  return `# ${answers.Title}
  ## Description
  ${answers.Description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.Usage}

  ## Contributing
  ${answers.Contributing}

  ## Tests
  ${answers.Tests}

  ## Questions
  For questions about this repository:\n
  GitHub Username: [${answers.Username}]((https://github.com/${answers.Username}))\n
  Email Address: ${answers.Email}\n

  ## License
  The repository is using the ${answers.License} license.

`
}




// function to initialize program
// Source: https://www.npmjs.com/package/inquirer
function init() {
  return inquirer
    .prompt(questions)
    .then(answers => {
      console.log(answers);
      // Format responses in markdown
      let markdown = formatText(answers);
      // Call a function and return a string with markdown text
      fs.writeFile('ReadMe-Demo.md', markdown, function (err) {
        if (err) throw err;
        console.log("Done! Successfully created ReadMe-Demo.md");
      });
    })

    .catch(err => {
      console.log(err)
    });
}

// function call to initialize program
init();