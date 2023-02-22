function writeSVGText(dataObject) {

    var jcTextDim;
    
    var jcShape;

    if (dataObject.shape==="square") {
       var jcShape = `<rect x="40px" y="40px" width="150px" height="150px"`
       var jcTextDim = `<text x="116" y="135" font-size="60" text-anchor="middle"`
        
    }
    else if (dataObject.shape==="circle") { 
       var jcShape = `<circle cx="114px" cy="110px" r="80px"`;
       var jcTextDim = `<text x="116" y="130" font-size="60" text-anchor="middle"`
    
    } else {
       var jcShape = `<polygon points="120,10 10,200 250,245"`;
       var jcTextDim = `<text x="120" y="150" font-size="60" text-anchor="middle"`;       
    }
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

${jcShape} fill="${dataObject.shapecolor}" />

${jcTextDim} fill="${dataObject.textcolor}">${dataObject.text}</text>

</svg>`


}

module.exports = writeSVGText;

