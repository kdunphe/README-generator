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
    message: "Project Description",  
}
];

function formatText (answers) {
    let outputString = "";
    outputString += `# ${answers.Title} \n`;
    outputString += `# ${answers.Description} \n`;
    return outputString;

}

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
        console.log("Saved! \nSuccessfully created ReadMe-Demo.md");
      });
  })
  // .catch(error => {
  //   if(error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else when wrong
  //   }
  // });
}

init();