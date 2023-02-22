const inquirer = require('inquirer');
const fs=require('fs');
const writeSVGText = require('./lib/write-svg-text.js');
const {Triangle, Circle, Square} = require('./lib/shapes.js');
const SVG = require('./lib/svg.js');


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

function writeToSVG(fileName, dataObject) {
    
    fs.writeFile(fileName, dataObject.render(),(errPlaceholder) => errPlaceholder ? console.error(errPlaceholder) : console.log('Generated logo.svg')
    )
   
  }


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
        });
    //   .catch(error => {
    //     console.log("An error occured!");
    // })
    };


runQuestions();