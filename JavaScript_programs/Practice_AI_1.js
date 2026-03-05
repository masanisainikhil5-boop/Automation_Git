//Q1
var name = "Jethalal"
let age = 60
const tester = false

console.log(name)
console.log(age)
console.log(tester)

//Q2
let x = 10;
let y = "10";
console.log(x == y); // true
console.log(x === y); // false

//Q3
let a=10;

if(a%2 === 0){
    console.log("Even");
}
else{
    console.log("Odd");
}

//Q4: Write a program using a for loop to print:
//1
//22
//333
//4444
for (let i=1; i<=5; i++){
    let str = "";
    for (let j=1; j<=i; j++){
        str += i;
    }
    console.log(str);
}

//Write a while loop to find the sum of digits of a number
let num = 1234;
let sum = 0;

while(num>0){
    let digit = num%10;
    sum += digit;
    num = Math.floor(num/10);   
}
console.log(sum)

//