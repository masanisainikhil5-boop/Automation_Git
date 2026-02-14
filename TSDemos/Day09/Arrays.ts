//Arrays in typescript
//Approach 1: using leteral
let names:string[] =[] //Declaration
//Initialization
names[0] = "John"
names[1] = "Smith"
names[2] = "Parker"
names[3] = "Steven"

let email:string[] = ["John","SMith","Parker","Steven"] //Declaration+Initialization

console.log(email)

//Approach 2: using generic way Array<T> type
let empNames: Array<string> = ["John","SMith","Parker","Steven"]
console.log(empNames)

let empId: Array<number> = [10,20,30,40,50]
console.log(empId)

let data: Array<string | number> = ["John",10,"SMith",20,"Parker",30,"Steven",40]
console.log(data)

let mixdata: Array<any>=[null,"John",10,"SMith",20,"Parker",30,"Steven",40,true,15.235,false]
console.log(mixdata)

//Example 1: Iterating over an array using traditional for loop
for(let i=0; i<=empNames.length-1; i++)
    {
        console.log(empNames[i])
}

//Example 2: Iteratinf using the "For..in" loop(indexes) - we need to use this for indexes
console.log("Employee ID's...")
for(let i in empId){
    console.log(empId[i])
}

//Example 3: Iterating using the "For..of" loop(values) - we need to use this for values
console.log("Mixed Data...")
for(let value of data){
    console.log(value)
}

//Example 4: Passing an array to function
function search(ele:number, arr:number[]):boolean{
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] === ele){
            return true
        }
    }
    return false
}

let arr:number[] = [10,20,30,40,50]
console.log(search(30,arr)) //true
console.log(search(100,arr)) //false

//Example 5: A functions takes an array and returns an array
function capitalizewords(arr:string[]):string[]
{
    let result:string[] = []
    
    for( let i=0; i<arr.length; i++){
       result[i] = arr[i].toUpperCase()
    }

    return result
}
let words:string[] = ["john","smith","parker","steven"]
console.log(capitalizewords(words)) //["JOHN","SMITH","PARKER","STEVEN"]
    