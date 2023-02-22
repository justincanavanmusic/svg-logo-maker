const inquirer = require('inquirer');
const fs=require('fs');
const writeSVGText = require('./lib/write-svg-text.js');
// const {Triangle, Circle, Square} = require('./lib/shapes.js');
//connected inquirer for prompt questions, 
//fs in order to writeFile
//connected to write-svg-text to access writeSVGText function

//array of questions for prompts
const questions = [    
    {
    type: 'input',
    message: 'Please enter your logo text:',
    name: 'text',
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
      message: 'What color do you want your text to be?',
      name: 'textcolor'
    },
    {
     type: 'list',
     message: 'Please choose a shape.',
     choices: ['triangle', "circle", "square"],
     name: 'shape'
      },
    {
     type: 'input',
     message: 'What color do you want your shape to be?',
     name: 'shapecolor'
    },
];

//function which has two parameters

//fs.writeFile is a built in function which asynchronously writes data to a file. if the file already exists it will overwrite the file. 

//the two arguments are the filepath and the data. the writeSVGText function writes the data seen on the write-svg-text.js page and uses the user data from the dataObject to help populate the file with the users responses.

//Lastly an if statement saying if there an error to console.error and if not to console.log
function writeToSVG(fileName, dataObject) {
    
    fs.writeFile(fileName, dataObject.render(),(errPlaceholder) => errPlaceholder ? console.error(errPlaceholder) : console.log('Generated logo.svg')
    )
   
  }
//the function below runs the inquirer.prompt and runs the questions. 

//once the prompts are all answered, .then function is run which stores all of the data from the user in answersObject

//writeToSVG function is called which populates the logo.svg file 

function runQuestions() {
  inquirer.prompt(questions)


    .then(answersObject=> {
      let shape;
      if (answersObject.shape==="triangle") {
        shape = new Triangle(answersObject.shapecolor)
      } else if (answersObject==="square") {
        shape = new Square(answersObject.shapecolor)
      } else {
        shape = new Circle(answersObject.shapecolor)
      }
      const svg = new SVG(answersObject.text, answersObject.textcolor);
      
      svg.setShape(shape)

        writeToSVG('logo.svg', svg); 
        console.log(answersObject);
        })
      .catch(error => {
        console.log("An error occured!");
    })
    };

//calling runQuestions function
runQuestions();