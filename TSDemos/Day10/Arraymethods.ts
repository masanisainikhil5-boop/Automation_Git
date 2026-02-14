let number: number[] = [1,2,3,4,5];
let fruits: string[] = ["Apple", "Banana", "Cherry"];

console.log("Original number array:", number);
console.log("Original fruits array:", fruits);

//Length:
console.log("Length of number array:", number.length);
console.log("Length of fruits array:", fruits.length);

// 1. Push: Adds an element to the end of the array
number.push(6,7)
console.log("After push:", number);

// 2. Pop: Removes the last element from the array
fruits.pop()
console.log("After pop:", fruits);

// 3. Shift: Removes the first element from the array
let firstnumber = number.shift()
console.log("First number removed:", firstnumber);
console.log("After shift:", number);

// 4. Unshift: Adds an element to the beginning of the array
fruits.unshift("Mango","Grapes")
console.log("After unshift:", fruits);

// 5. Concat(): Merges two or more arrays
number = number.concat([8,9,10],[11,12])
console.log("After concat:", number);

// 6. Slice() : Returns a shallow copy of a portion of an array into a new array object
console.log("Original Fruits:", fruits);
let slicefruits = fruits.slice(1,3)
console.log("Sliced Fruits:", slicefruits);

// 7. Splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//Ex1: Remove elements
console.log("Original Fruits:", fruits);
fruits.splice(2,1) //2 is starting index, 1 is represent how many elements to remove.
console.log("After splice (remove):", fruits);

//Ex2: Replace elements
console.log("Original Fruits:", fruits);
fruits.splice(1,2,"Pineapple","Strawberry") //1 is starting index, 2 is represent how many elements to remove.
console.log("After splice:", fruits);

// 8. IndexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
fruits.push("Strawberry","Pomogranate","Kiwi")
console.log("Updated Fruits:", fruits);

let index = fruits.indexOf("Strawberry") //Returns the index of the first occurrence of "Strawberry"
console.log("Index of Strawberry:", index)

