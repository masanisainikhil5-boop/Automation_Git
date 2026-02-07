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