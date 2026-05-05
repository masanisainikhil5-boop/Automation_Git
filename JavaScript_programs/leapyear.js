const year = 2028

const checkleapyear = (y) => {
    if((y%4 === 0 && y%100 !== 0) || (y % 400 === 0)){
        return `${y} is a leap year`
    }
    else {
        return `${y} is not a leap year`
    }
}

console.log(checkleapyear(year));