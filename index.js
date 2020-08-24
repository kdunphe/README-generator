const fs = require('fs');
const inquirer = require('inquirer');

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
  name: "Username",
  message: "What is your GitHub Username?",  
},
{
  type: "input",
  name: "Email",
  message: "What is your email address?",  
}
];

function formatText (answers) {
    let outputString = "";
    outputString += `# ${answers.Title} \n`;
    outputString += `# ${answers.Description} \n`;
    return outputString;

}

// Source: https://www.npmjs.com/package/inquirer
function init () {
    inquirer
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

init();