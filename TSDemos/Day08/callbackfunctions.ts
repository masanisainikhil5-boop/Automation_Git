/*Callback function - A callback function is a function that is passed as an argument to another function and is 
executed after some operation has been completed. It allows you to handle asynchronous operations, 
such as fetching data from an API or performing time-consuming tasks, 
without blocking the main thread of execution.*/

// This is not much important for Automation but it is important for programming in javaScript.

// Why this is used? 
// 1. To handle asynchronous operations: Callback functions are commonly used to handle asynchronous operations,
// such as making API calls, reading files, or performing time-consuming tasks. By using callbacks, you can ensure that the code continues to execute without waiting for the asynchronous operation to complete.

// 2. To create reusable code: Callback functions allow you to create reusable code by passing different functions as arguments to the same function. This promotes modular programming and helps in keeping the code organized.

// function that takes a callback function as an parameter
function greet(name:string, smg:(message:string) => void){
    console.log(name)
    smg("Welcome to TypeScript!")
}

//callback function
function showmessage(message:string){
    console.log(message);
}

greet("John", showmessage); // Output: John

//Example 2:

function sum(a:number,b:number, callback:(result:number) => void){
    let result = a + b;
    callback(result) 
}


//callback function
function displaydata(result:number):void{
    console.log(result)
}

sum(10,20, displaydata)