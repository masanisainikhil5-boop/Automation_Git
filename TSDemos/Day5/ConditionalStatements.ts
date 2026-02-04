// if-else condition
let age = 21

if(age>20){
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible to vote")
}

//Example 2
let num = 20

if(num%2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}

//Nested if-else
let a=100,b=200,c=50

if(a>=b && a>=c){
    console.log("A is largest")
}
else if(b>=c && b>=a){
    console.log("B is largest")
}
else {
    console.log("C is largest")
}

//Example 2: Browser selection
let browser = "Firefox"

if(browser === "Chrome"){
    console.log("Browser is chrome") // === is strict equality. This verifies the value as well as type
}
else if(browser === "Edge"){
    console.log("Browser is Edge")
}
else if(browser === "Firefox"){
    console.log("Bowser is Firefox")
}
else{
    console.log("Other Browser")
}

// Switch case statement
let userRole = "Admin"

switch(userRole){
    case "Admin":
        console.log("Full Access")
        break
    
    case "Editor":
        console.log("Edit Access")
        break
    
    case "Viewer":
        console.log("View Access")
        break

    default:
        console.log("No Access")
}