class Shapes {
    constructor(color) {
      this.color=color;

    }
  }

  class Triangle extends Shapes {
    constructor(color, x, y, height, width) {
      super(color, x, y, height, width);
    }
    setColor(color) {
      this.color=color;
  }
    displayShape() {
      let color=this.color;
      return `<polygon points="120,10 10,200 250,245" fill="${color}"/>`;
    }
}

  class Circle extends Shapes {
    constructor(color) {
      super(color);
      this.color=color;
     
    }
    setColor(color) {
        this.color=color;
    }
    displayShape() {
      let color=this.color;
        return `<circle cx="114px" cy="110px" r="80px" fill="${color}"/>`

    }
}

  class Square extends Shapes {
    constructor(shape, color, height, width) {
      super(shape, color, height, width);
    }
    displayShape() {
        return `<rect x="40px" y="40px" width="150px" height="150px"/>

        <text x="115px" y="130px" font-size="60" text-anchor="middle" fill="blue">JRC</text>`
    }
}

module.exports={Triangle, Circle, Square}
