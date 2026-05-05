//Fizzbuzz test
let userinput = prompt("Enter a number for fizzbuzz: ")
let num = Number(userinput)

if(isNaN(num)){
    console.log("Oops.. That's not a valid number!")
}else{
    
    if(num%3===0 && num%5===0){
        console.log("FizzBuzz")
    }
    else if(num%3===0){
        console.log("Fizz")
    }
    else if(num%5===0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}

const { stdout } = require('process')

//Node.js way
const readline = require('readline/promises')
const {stdin: input, stdout: output } = require('process')

async function fizzbuzz() {
    const scanner = readline.createInterface({input, output})
    const answer = await scanner.question("Enter a number to check: ")
    const num = Number(answer)
    
    if(isNaN){
        console.log("Please enter a valid number: ")
    }
    let outputText = "";
        
        if (num % 3 === 0) outputText += "Fizz";
        if (num % 5 === 0) outputText += "Buzz";
        
        // Print the result (If outputText is empty, print the number)
        console.log(`Result: ${outputText || num}`);
    }

    // Close the scanner so the program can finish
    scanner.close();

// Run the program
playFizzBuzz();
