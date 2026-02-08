//Anonymousfunction - A function without a name is called an anonymous function.
//Anonymous functions are often used as arguments to other functions or as immediately invoked function expressions (IIFE).

//Example1: Anonymous function

let msd = function():string
{
    return "Hello, TypeScript!"
}
console.log(msd())

//Example2: Anonymous function with parameters
let add = function(a:number, b:number):number{
    return a+b
}
console.log(add(10,20))

