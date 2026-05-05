//String - Group of characters

//Declaration of strings
let str1: string = "This is a double quote string"
let str2: string = 'This is a single quote string'
let str3: string = `This is a backtick string`

console.log(str1)
console.log(str2)
console.log(str3)

//When to use backtick operator
let num1:number = 50
console.log(`The number is: ${num1}`)

//String methods
//1. Length
let str:string = "TypeScript!.."
console.log("Length of string: ",str.length)

//2. toUpperCase() and toLowerCase():
console.log("Upper case: ",str.toUpperCase())
console.log("Lower case: ",str.toLowerCase())

//3. charAt(index) and indexOf(string):
console.log("Character at 5th index: ",str.charAt(5))
console.log("Index of type: ",str.indexOf("Script"))

//4. Substring()
console.log(str.substring(4,7))

//5. includes(): returns true or false
console.log(str.includes("rip"))
console.log(str.includes("car"))

//6. startsWith() and  endswith()
console.log(str.startsWith("tur"))
console.log(str.endsWith("pt!.."))

//7. replace()
console.log(str.replace("!..",".."))

//8. split()
let words:string[] = str.split(" ")
console.log(words)

let mystring:string = "abc@gmail.com,xyz"
let arr = mystring.split(",")
console.log("email: ", arr[0])
console.log("pass: ",arr[1])

//9. trim(), trimstart(), trimend():
mystring = "  Welcome to Typescript  "
console.log("original String: ",mystring)
console.log("trim String: ",mystring.trim())
console.log("trimStart String: ",mystring.trimStart())
console.log("trimEnd String: ",mystring.trimEnd())

//10. concat()
let con1 = "Dubai"
let con2 = "Qatar"

console.log(con1.concat(con2))

//11. String immutability
let fin = 10
let res = fin + 5
console.log(res)
console.log(fin)