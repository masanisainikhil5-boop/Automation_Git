//Import the readline module:
const readline = require('readline');

//Create an interface to read from terminal:
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Create a helper function that uses a promise
function askQuestion(question) {
    return new Promise((resolve) => {
        r1.question(question, resolve);
    });
}

//Main function using async/await
async function main(){
    //The code pauses here until the user inputs something and presses enter
    const name = await askQuestion("What is your name? ");
    const age = await askQuestion("What is your age? ");

    console.log(`Hello, ${name}! You are ${age} years old.`);

    r1.close();
}

main();

