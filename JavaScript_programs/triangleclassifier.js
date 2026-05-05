const side1 = 5
const side2 = 5
const side3 = 10

const classifytriangle = (s1,s2,s3) => {
    if( s1 === s2 && s2 === s3){
        return "Equilateral triagle"
    }
    else if (s1 === s2 || s1 === s3 || s2 === s3){
        return "Isoceles triangle"
    }
    else{
        return "Scalene triangle"
    }
}

console.log(classifytriangle(side1, side2, side3))