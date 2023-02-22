class Shapes {
    constructor(color) {
      this.color=color;
    }
    setColor(color) {
      this.color=color;
    }
  }

  class Triangle extends Shapes {
    constructor(color) {
      super(color);

  }
    displayShape() {
      let color=this.color;
      return `<polygon points="120,10 10,200 250,245" fill="${this.color}"/>`;
    }
}

  class Circle extends Shapes {
    constructor(color) {
      super(color);
    }
 
    displayShape() {
        return `<circle cx="114px" cy="110px" r="80px" fill="${this.color}"/>`
    }
}

  class Square extends Shapes {
    constructor(color) {
      super(color);
    }
   
    displayShape() {
        return `<rect x="40px" y="40px" width="150px" height="150px" fill="${this.color}"/>`
    }
 
    displayShape() {
        return `<rect x="40px" y="40px" width="150px" height="150px" fill="${this.color}"/>`
    }
}

module.exports={ Triangle, Circle, Square }
