//allows us to access Square, Triangle, and Circle classes from Shapes.js

const { Square, Triangle, Circle } = require("./shapes");

// describe("Circle", () => {
//   test("should render svg for a green circle element", () => {
//     const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
//     const circle = new Circle();
//     circle.setColor("green");
//     const actualSvg = circle.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
//   test("should accept a fillColor param", () => {
//     const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
//     const circle = new Circle();
//     circle.setColor("blue");
//     const actualSvg = circle.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
// });

//testing for the Circle class
describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="114px" cy="110px" r="80px" fill="green"/>';
    const circle = new Circle();
    circle.setColor("green");
    // console.log(circle);
    const actualSvg = circle.displayShape();
    // console.log(actualSvg);
    expect(actualSvg).toEqual(expectedSvg);
  });
//above.. describe function tells us we are testing for the Circle class. the expectedSvg I chose the parameters to make a circle shaped SVG using the circle y, circle x, radius and fill attributes. We created a new Circle object which is stored in the circle variable. I ran the setColor method with green as an argument for the test. I ran the circle.displayShape() function which returns the circle element, it's parameters (cx, cy, r,) as well as this.color which is filled by the setColor function. The return was equivalent to the expectedSvg variable which was checked/confirmed by the expect function and the toEqual() method. 

//   test("should accept a fillColor param", () => {
//     const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
//     const circle = new Circle();
//     circle.setColor("blue");
//     const actualSvg = circle.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
// });

  test("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="114px" cy="110px" r="80px" fill="blue"/>';
    const circle = new Circle();
    circle.setColor("blue");
    console.log(circle)
    const actualSvg = circle.displayShape();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
//same as above with a different color

describe("Triangle", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="120,10 10,200 250,245" fill="green"/>';
    const triangle = new Triangle();
    triangle.setColor("green");
    console.log(triangle)
    const actualSvg = triangle.displayShape();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="120,10 10,200 250,245" fill="purple"/>';
    const triangle = new Triangle();
    triangle.setColor("purple");
    const actualSvg = triangle.displayShape();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
//tests for the triangle.. used the polygon element and created my own triangle using the points attribute. each set of two numbers is representative of the x and y coordinates of one of the 3 corners. 

describe("Square", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect x="40px" y="40px" width="150px" height="150px" fill="dodgerblue"/>';
    const square = new Square();
    square.setColor("dodgerblue");
    const actualSvg = square.displayShape();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="40px" y="40px" width="150px" height="150px" fill="red"/>';  
    const square = new Square();
    square.setColor("red");
    console.log(square);
    const actualSvg = square.displayShape();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
//tests for square.. width and height dictate the width and height of the square and x and y are the coordinates away from the top left corner
