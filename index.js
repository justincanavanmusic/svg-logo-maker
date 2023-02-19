const inquirer = require('inquirer');
const fs=require('fs');

const questions = [    
    {
    type: 'input',
    message: 'Please enter your logo text:',
    name: 'logo-text',
    validate: function (userAnswer) {
        if (userAnswer.length>3) {
            return 'Your logo text must be between 1-3 characters.'
        } 
        else if (userAnswer.length===0) {
            return 'Your logo text must be between 1-3 characters.'
        }
        return true;
    }
    },
    {
      type: 'input',
      message: 'What color do you want your logo text to be?',
      name: 'logo-text-color'
    },
    // {
    //   type: 'input',
    //   message: 'What is your preferred method of communication?',
    //   name: 'communication',
    // },
];

function runQuestions() {
  inquirer.prompt(questions)

    .then(answersObject=> {
        writeToFile('logo.svg', answersObject); 
        console.log(answersObject);
        });
    //   .catch(error => {
    //     console.log("An error occured!");
    // })
    };


runQuestions();