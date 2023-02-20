function writeSVGText(dataObject) {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">



${jcCircle} fill="${dataObject.shapecolor}" />

 <text x="120" y="125" font-size="60" text-anchor="middle" fill="${dataObject.textcolor}">${dataObject.text}</text>

</svg>`

}

module.exports = writeSVGText;

// `<svg version="1.1"
//     width="300" height="200"
//     xmlns="http://www.w3.org/2000/svg">
    

//     <rect width="100%" height="100%" fill=${dataObject.textcolor}/>
    
//     </svg>`