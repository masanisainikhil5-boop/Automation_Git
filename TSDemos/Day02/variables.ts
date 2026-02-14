//Print the output:
console.log("Welcome to TypeScript and DataScience with Machine Learning")

//What is variable? - Variable is an container which can hold some data.
x=10
studentName = "John"

// variable can be declared by 3 types in TS as well as JS - var,let,const
// Syntax : keyword variableName: data type(optional) = value
// var age:number = 30
// var age=30(here the datatype is optional)

var age = 30
console.log(age)

// var vs let vs const ---- 
/* 
1) Scope
2) Declaration/Value Assignement
3) Re-declaration
4) Re-initialization/Re-assignement
5) Hoisting
*/

//var - Try to avoid var as this is an function scope and may lead to unexpected behaviour.
//let - When you want to change the value of the variable.
//const - When the value is constant in future then use const.

// 1) Scope(Functional Scope and Block Scope)
//Ex 1: var(functional scope)
function varScope()
{
    if(true)
        {
        var msg = "Hello World"
        console.log(msg)
    }
    console.log(msg) // Can be accessed even outside the block as this is functionalscope.
}
varScope()

//Ex2: let and const(BlockScope)
function BlockScope(){
    if(true){
        let msg1 = "Welcome Block Scope"
        console.log(msg1)
    }
    //console.log(msg1) // cannot access as this is out of the block as this is blockscope
}
BlockScope()

// 2) Declaration/Value Assignment
//Ex1: Var can be declared without initialization
var x; //declaration
console.log(x); //undefined
x=50; //initialization
console.log(x)

//Ex2: let can be declared without initialization
let y; //declaration
console.log(y); //undefined
y=100; //initialization
console.log(y)

//Ex3: Const must be initialized at the time of declaration
const z = 110
console.log(z)

//3) Re-declaration
// var - allows the re-declaration
var city = "Los Angeles"
var city = "Los Santos"
console.log(city)

// let and const - doesn't allow the re-declaration
/*let country = "India"
let country = "Dubai"
console.log(country)*/
//Same for const

//4) Re-initialization/Re-assignement
//var and let  - re-assignment allowed
//const - re-assignement not allowed.
// Ex 1: var and let allows
var age = 25
age =35
console.log(age)

let date = 15
date = 25
console.log(date)

/*const num = 110  // Not allowed for re-assignment
num = 125
console.log(num)*/

//5) Hoisting
console.log(a) //undefined
var a = 10
console.log(a)

console.log(b) //Cannot access 'b' before initialization
let b = 10
console.log(b)

console.log(c) //Cannot access 'c' before initialization
const c = 10
console.log(c)

