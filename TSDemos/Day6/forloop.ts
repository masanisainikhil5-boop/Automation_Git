//For loop
console.log("--- Row Printing ---");
let rowResult = "";

for (let k = 1; k <= 10; k++) {
    rowResult += k + " "; 
}

console.log(rowResult);

//For loop with array
let plans = ["Gold Plan", "Silver Plan", "Bronze Plan", "Platinum Plan"];

console.log("--- Available Insurance Plans ---");

// We run the loop as long as 'i' is less than the total number of plans
for (let i = 0; i < plans.length; i++) {
    console.log("Plan " + (i+1) + ": " + plans[i]);
}