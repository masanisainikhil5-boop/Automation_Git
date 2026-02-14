//Function overloading - Name of function is same but parameters are different

//Step 1: Write Signatures of functions
//Step 2: Write implementation of function
//Step 3: Call the function

//Example 1:
function getinfo(id:number):string
function getinfo(name:string):string

function getinfo(value:number|string):string{
    if(typeof value === "number"){
        return `ID: ${value}`
    }
    else{
        return `Name: ${value}`
    }
}
console.log(getinfo(123)) // Output: ID: 123
console.log(getinfo("John")) // Output: Name: John

//Example 2: Different number of parameters
function add(x:number, y:number):number
function add(x:number, y:number, z:number):number

function add(x:number, y:number, z?:number):number{
    if(z!== undefined){
        return x + y + z
    }
    return x + y
}
console.log(add(10,20)) // Output: 30
console.log(add(10,20,30))

//Example 3: Different return types
function getValue(flag:string):string
function getValue(flag:number):number

function getValue(flag: string | number): string | number {
    if(typeof flag ==="string"){
        return flag.toUpperCase()
    }
    else{
        return flag * 2
    }
}

console.log(getValue("hello")) // Output: HELLO
console.log(getValue(5)) // Output: 10

//Example 4:
function display(name:string):string
function display(age:number):string
function display(RichieRich:boolean):string

function display(value: string | number | boolean):string{
    if(typeof value === "string"){
        return `Name: ${value}`
    }
    else if(typeof value === "number"){
        return `Age: ${value}`
    }
    else{
        return `RichieRich: ${value}`
    }
}

console.log(display("Alice")) // Output: Name: Alice
console.log(display(30)) // Output: Age: 30
console.log(display(true)) // Output: RichieRich: true
