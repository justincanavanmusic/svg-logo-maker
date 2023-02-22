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
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>` 
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

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}, fill="${this.textcolor}">${this.text}</svg>`

        // ${setText(this.text, this.color)}
    }
    // render3() {
    //     let text=this.text;
    //     let textcolor=this.textcolor;
    //     let color=this.shape.color;
    //     console.log(color);  
    
    //     return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="40px" y="40px" width="150px" height="150px" fill="${color}" /><text x="116" y="135" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text></svg>`;
    // }
}

module.exports=SVG




