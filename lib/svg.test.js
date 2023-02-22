const SVG = require("./svg");
const { Square } = require("./shapes");
//allows us to access SVG class from svg.js  class as well as the Square class from shapes.js

//test function tells us we are testing to see if a 300x200 svg element will display. 
test("should render a 300 x 200 svg element", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
  const svg = new SVG();
  expect(svg.render()).toEqual(expectedSvg);
});

//used the test function to tell us what we want the test to do. the expectedSvg has the elements/attributes I created to render the SVG and used the setText method to put the text and textcolor arguments on the svg. I ran the render2 method which returned the shape along with the textcolor and text arguments from the setText method. The return was equivalent to the expectedSvg variable which was checked/confirmed by the expect function and the toEqual() method. 
test("should append text element", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="116" y="135" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
  const svg = new SVG();
  svg.setText("A", "white");
  console.log(svg);
  expect(svg.render2()).toEqual(expectedSvg);
});
//same as above with different arguments
test("should set text message and color", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="116" y="135" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "#333");
  expect(svg.render2()).toEqual(expectedSvg);
});

//this test is checking to make sure that if you enter above 3 letters for your SVG text that it will throw you an error. I have an if statement on svg.js that tells us to throw a new error in the event of an entry larger than 3 characters. We used the text "HELLO" which gave us an error since it is 5 letters. Because of this, the test passed. When I entered "HEL" the test failed, proving that it is functioning as intended. We used the .toThrow method from jest and the built-in Error class for this. 

test("should throw if text exceeds 3 characters", () => {
  const expectedError = new Error("Text must not exceed 3 characters.");
  console.log(expectedError);
  const svg = new SVG();
  console.log(svg)
  
  expect(() => svg.setText("HELLO", "#333")).toThrow(expectedError);
});

//this last test included a shape (square). we created a new Square class and stored it in the variable square. ran the setColor method and gave it an argument of "dodgerblue" for testing purposes. when we ran the svg.setShape method with an argument of square, we gave the above svg all of the properties from the square variable INCLUDING it's color (dodgerblue). This allowed me to access the squares color from inside the SVG class and refer to it in the render3 function (this.shape.color). 
test("should include a shape", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="40px" y="40px" width="150px" height="150px" fill="dodgerblue" /><text x="116" y="135" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "#333");
  const square = new Square();
  square.setColor("dodgerblue");
  console.log(square.color);
  svg.setShape(square);
  (console.log(svg))
  expect(svg.render3()).toEqual(expectedSvg);
});
