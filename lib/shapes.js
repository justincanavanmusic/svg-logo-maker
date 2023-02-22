class Shapes {
    constructor(color, shape) {
      this.color=color;
      this.shape=shape;
    }
    
    setColor(color) {
      this.color=color;
    }
  }

  class Triangle extends Shapes {
    constructor(color, shape) {
      super(color, shape);
    }
  
    displayShape() {
      return `<polygon points="120,10 10,200 250,245" fill="${this.color}"/>`;
    }
}

  class Circle extends Shapes {
    constructor(color, shape) {
      super(color, shape);
    }
  
    displayShape() {
        return `<circle cx="114px" cy="110px" r="80px" fill="${this.color}"/>`
    }
}

  class Square extends Shapes {
    constructor(color, shape) {
      super(color, shape);
    
    }
 
    displayShape() {
        return `<rect x="40px" y="40px" width="150px" height="150px" fill="${this.color}"/>`
    }
}

module.exports={ Triangle, Circle, Square }
