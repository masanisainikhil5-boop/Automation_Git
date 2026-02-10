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

