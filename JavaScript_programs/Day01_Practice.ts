// //Section 1: JavaScript basics
// //Variable declaration
// var a =10;
// let b=20;
// const c = 30;

// //Printing the variables:
// console.log(a+b+c)

// //Find the datatypes:
// let name = "Playwright";
// let version = 1.40;
// let isReady = true;
// let x = null;
// let y = undefined;

// console.log(typeof name);
// console.log(typeof version);
// console.log(typeof isReady)
// console.log(typeof x)
// console.log(typeof y)

// //🎯 Interview Trap: typeof null returns "object" — know WHY!

// //Section 2: Operators
// console.log(5 == "5")
// console.log(5 === "5")
// console.log(null == undefined)
// console.log(null === undefined)

// //Logical operators
// let isloggedin = true
// let permission = false

// console.log(isloggedin && permission)
// console.log(isloggedin || permission)
// console.log(!isloggedin)

//Section 3: Statements and If-Else
// Write a function to print grade
// Score >= 90 → "A"
// Score >= 75 → "B"  
// Score >= 60 → "C"
// Below 60   → "Fail"
// const readline = require("readline")

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })


// function grade(score){
//     if (score >= 90){
//         console.log("A")
//     }
//     else if(score >=75){
//         console.log("B")
//     }
//     else if(score >=60){
//         console.log("C")
//     }
//     else{
//         console.log("Fail")
//     }
// }

// r1.question("Please enter the score: ",function(input){
//     let score = Number(input)
//     grade(score)
//     r1.close()
// })

//// Convert this if-else to ternary
// let age = 20;
// let status;

// if(age >= 18) {
//     status = "Adult";
// } else {
//     status = "Minor";
// }

// Write same in ONE LINE using ternary
// let status = ??? 
// let age = 20;
// let status = age >= 18 ? "Adult" : "Minor";
// console.log(status);

// //Looping
// //Print numbers from 1 to 5 using for loop
// for (let i=1; i<=5; i++){
//     console.log(i)
// }

// //Print only even numbers from 1 to 10 using for loop
// for (let i=1; i<=10; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// //Reverse loop from 10 to 1
// for (let i=10; i>=1; i--){
//     console.log(i);
// }

//While loop:
let i = 10;
while(i < 5) {
    console.log("While: " + i);  // Will this print?
}


// Do-While - executes FIRST then checks
let j = 10;
do {
    console.log("Do-While: " + j);  // Will this print?
} while(j < 5);