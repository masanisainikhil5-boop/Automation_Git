// forEach(), map(), filter(), reduce(), some(), every(), find(), findIndex()

//Get index of all fruits along with value
let fruits: string[] = ['apple', 'orange','mango','kiwi']
console.log("Printing fruits along with index using for loop..")

for(let i in fruits){
    console.log(i, fruits[i])
}

console.log("Printing fruits aling with index using for each method")

fruits.forEach(function(element,index){
    console.log(`${index}`,`${element}`)
})

//Arrow function
console.log("Using the arrow function: ")
fruits.forEach((element, index) => {
    console.log(`${index}`,`${element}`)
})

