/*3 important things to note down:
Type/Data Type
Annotations
Type Inference

let age:number = 30
number --> Data Type
:number --> Annotation
Type inference: Not applying any datatype. The TS will automatically assign the datatype based on the value given
Ex: let age = 30
Ex: let name = "Sting"

*/

/* 
Types of Datatypes:
--Primitive Datatypes(Built-in)
Number, String, Boolean, Null, undefined, Any, Union Type, Void

--Non-Primitive Datatypes(Objects)
Array, Class, Function, Interface, Tuple, etc...
*/

//Primitive Datatype
//1. Number type - Represents both integer and floating numbers
let age:number=25
let price=35.5
let big = 43576213256

console.log("Age: ",age)
console.log("Price: ",price)
console.log("Big: ",big)

//2. String Type
let FirstName = "James."
let LastName = "E. Polis"

let FullName = `Hello ${FirstName} ${LastName}`
console.log(FullName)
//console.log("Hello,",FirstName,LastName)

//3. Boolean Type
let isStudent = true
let hasJob = false
console.log("Is Student?", isStudent)
console.log("Has Job", hasJob)

//4. Null and Undefined Type - Special Types for absence of value
let emptyValue = null
let undefinedValue = undefined
console.log(emptyValue)
console.log(undefinedValue)

//5. Any Type - losses TS benefits
let value = "Welcome"
console.log(typeof value)

value = 100
console.log(typeof value)

value = true
console.log(typeof value)

//6. Union Type - Combine multiple types
let id: number | string | boolean
id = "PlayWright"
console.log(id)

id = 12345
console.log(id)

id = true
console.log(id)

//7. Void - used for functions that will not returning anything
function sum(): void
{
    console.log(10+20)
}
sum()
