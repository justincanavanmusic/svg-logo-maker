const writeSVGText = require('./lib/write-svg-text.js');

class SVG {
  constructor(text, textcolor, shape) {
    this.text="";
    this.textcolor="";
    this.shape="";

  //   if (text.length>3) {
  //     throw new Error("Text must not exceed 3 characters.")
  //  }
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">{this.text}</svg>` 
}

  setText(text, textcolor) {
    this.text=text;
    this.textcolor=textcolor;
  // return `${this.shape} fill="${this.textcolor}">${this.text}</text>`
  
    }
    setShape(shape) {
        this.shape=shape;
    }
   

//   render() {
//     return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>` 
// }

  render2() {
    

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.jcTextDim}, fill="${this.textcolor}">${this.text}</svg>`

        // ${setText(this.text, this.color)}
    }

}

module.exports=SVG




