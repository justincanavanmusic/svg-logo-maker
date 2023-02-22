//created SVG class which has 2 properties, text and textcolor. created setText function which passes two arguments as well as setShape function which passes one argument. Both of these functions are used in the test files. Also have created 3 render functions below which are utilized in the tests

class SVG {
  constructor(text, textcolor) {
    this.text=text;
    this.textcolor=textcolor;

  }
  setText(text, textcolor) {
    this.text=text;
    this.textcolor=textcolor;

    if (text.length>3) {
      throw new Error("Text must not exceed 3 characters.")
   }
  return `<text x="116" y="135" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`
        
    }
    setShape(shape) {
        this.shape=shape;

    }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`

}
  render2() {

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="116" y="135" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
    render3() {
        let color=this.shape.color;
    
        return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="40px" y="40px" width="150px" height="150px" fill="${color}" /><text x="116" y="135" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`;
    }
}

module.exports=SVG
//exports SVG class




