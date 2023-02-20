class Shapes {
    constructor(shape, color, height, width) {
      this.shape=shape
      this.color=color;
      this.height=height;
      this.width=width;
    }
  }

  class Triangle extends Shapes {
    constructor(shape, color, height, width) {
      super(shape, color, height, width);
    }
    displayShape() {
        return `<polygon points="135,30 10,200 280,245" fill="red"/>

        <text x="133px" y="160px" font-size="60" text-anchor="middle" fill="blue">JRC</text>`
    }
}

  class Circle extends Shapes {
    constructor(shape, color, radius) {
      super(shape, color, radius);
      this.radius=radius;
    }
    displayShape() {
        return `<circle cx="114px" cy="110px" r="80" fill="pink" />
 
        <text x="115px" y="130px" font-size="60" text-anchor="middle" fill="blue">JRC</text>`
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
