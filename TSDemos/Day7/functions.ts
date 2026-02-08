//Named Functions: A function which is declared with a name
/*syntax:
function functioname(parameters): returntype{
    /block of code
}
functioname()
*/

//Example1: Named function with no parameters and no return type
function display(): void{
    console.log("Welcome to TypeScript")
}
display()

//Example2: Named function with parameters and return type
function addnumber(a:number,b:number): number{
    return (a+b)
}
console.log(addnumber(10,50))

//Example3: Named function with rest parameters
//Rest parameters don't restrict the number of values that you can pass to a function
function addnumbers(...nums:any[])
{
    let i
    let sum = 0
    for( i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    
    console.log("sum of numbers",sum)
}
addnumbers(100,200)
addnumbers(5,10,15)

//Example3: Named function with rest parameters - multiple types
function findelements(...elements:(number | string)[]):number 
{
    return elements.length
}
console.log("Number of elements in findelements:",findelements(3,"John",5,"Doe",10))
console.log("Number of elements in findelements:",findelements(1,2,3,4,5))
console.log("Number of elements in findelements:",findelements("Alice","Bob","Charlie"))

//Example4: Named function with optional parameters
function displaydetails(id:number, name:string, mailID?:string): void{ //? makes the parameter optional
    console.log("ID:", id)
    console.log("Name:", name)
    if(mailID){
        console.log("Mail ID:", mailID)
    }
}

displaydetails(101,"John","john@gmail.com")
displaydetails(102,"Alice")

//Example5: Named function with default parameters
function calculatediscount(price:number, rate:number=10):void{
    let discount:number = price * rate / 100
    console.log("Discount:", discount)
}
calculatediscount(638)
calculatediscount(638,15)

//This is an interview question. They ask about Named function with default, rest and optional parameters.
