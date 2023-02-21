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

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="114px" cy="110px" r="80px" fill="green"/>';
    const circle = new Circle();
    circle.setColor("green");
    console.log(circle);
    const actualSvg = circle.displayShape();
    expect(actualSvg).toEqual(expectedSvg);
  });

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
// });

// describe("Square", () => {
//   test("should render svg for a green polygon element", () => {
//     const expectedSvg =
//       '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
//     const square = new Square();
//     square.setColor("dodgerblue");
//     const actualSvg = square.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
//   test("should accept a fillColor param", () => {
//     const expectedSvg =
//       '<rect x="90" y="40" width="120" height="120" fill="red" />';  
//     const square = new Square();
//     square.setColor("red");
//     const actualSvg = square.render();
//     expect(actualSvg).toEqual(expectedSvg);
  // });
});
