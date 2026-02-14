//Arrowfunctions/Lambda functions(=>) - A concise way to write anonymous functions 
// We use arrow functions most in automation testing.

//Example1: Arrow function with no parameters and no return type
let welcome = ():void=>{
    console.log("Welcome to TypeScript")
}
welcome()

//Example2: Arrow function with parameters and return type
let addNumbers = (x:number, y:number):number => {
    return x+y
}
console.log(addNumbers(10,20)) 

//Example3: Arrow function with single parameter and implicit return type
let mutiply = (a:number, b:number):number => a*b
console.log(mutiply(5,10))

//Example4: Arrow function with optional parameters
let opt = (id:number, name:string, mailID?:string):void => { //? makes the parameter optional
    console.log("ID:", id)
    console.log("Name:", name)
    if(mailID){
        console.log("Mail ID:", mailID)
    }
}
opt(101,"John","john@gmail.com")
opt(102,"Alice")

//Example5: Arrow function with default parameters
let disc = (price:number, rate:number=10):void =>{
    let discount:number = price * rate / 100
    console.log("Discount:", discount)
}
disc(1000)
disc(5000,5)

//Example6: Arrow function with rest parameters
let countElements = (...elements:(number | string)[]):number =>
{
    return elements.length
}
console.log("Number of elements in countElements:",countElements(3,"John",5,"Doe",10))
console.log("Number of elements in countElements:",countElements(1,2,3,4,5))
console.log("Number of elements in countElements:",countElements("Alice","Bob","Charlie"))