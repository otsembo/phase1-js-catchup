// Creating variables
//Syntax: identifier name = value;

// const = unchangable/immutable values, var = reassignable / redeclarable, let = reassignable (tied to specific scope)

const pi = 3.1417;
// pi = 22;

var full_name = "John Doe";
var full_name = "jANE Doee";
full_name = "tEST User";

let last_name = "Kibet";
last_name = "Temba";

console.log(`Hello, ${last_name}`)


// Selection Statements
// 1. if .. else => This usually performs an action based on a boolean expression
const age = 10;

if(age < 18){
    // code here
    console.log("You can join our holiday tution program");
} else if(age >= 18 && age <= 30){
    console.log("You can join our Bootcamp");
} else {
    console.log("You can partake in our professional certifications");
}

// switch .. case => performs action based on multiple distinct choices
let enrollment = "Hybrid|Remote|PartTime";

switch(enrollment){
    case "Hybrid":
        console.log("Your hybrid fees is 10k");
        break;
    
    case "Remote":
        console.log("Karo yako ya shule ni $20");
        break;

    case "PartTime":
        console.log("Your PartTime school fee is 20k");
        break;

    default:
        console.log("It seems you have entered wrong data");
}


// Repetition
// 1. while - loop => used when there is a need to customize/(sth extra with) your iterator (variable that acts as a counter). 
// { Action is performed after condition check }

let it = 1;
while(it < 11){
    // code to be repeated
    console.log("hello");
    
    // adjust counter
    it++;
}

// 2. for-loop => used when you do not have a need to do customize the iterator
for(let j = 1; j < 11; j++){
    console.log("world");
}

// 3. do .. while => action is perfomed before condition check
let k = 1;
do {
    // code here
    console.log("HelloWorld");
    k++;
} while(k < 11);


// Increment (++) => add a  numeric value by 1 (post or pre)
// post => value is added but will be reflected in the next usage of the variable
// pre => value is added and reflects immediately

// Decrement (--) => reduce a numeric value by 1 (post or pre)

let a = 20;
console.log(`The value of a is ${++a}`);
console.log(`The value of a is ${a}`);


// functions => reusable blocks of code executed together.
// can take input and can emit results/output.
// defined in 3 ways: function expression, function declaration, arrow functions (lambda, anonymous, ) TODO: Read on functional programming concepts

//function declaration
function sum(num1, num2){
    const y = num1 + num2;
    console.log(`The sum of a and b is ${y}`);
    return y;
}
// using a function
const total = sum(16, 33);
console.log(`"The double of the sum is ${total * 2}"`)

// function expression
const sumFxn = function(num1, num2){
    // code goes here
    return num1 + num2;
}

// arrow function
const sumArrow = (a, b) => {
    // code goes here
    return a + b;
}
// one-line
const sumOtherArrow = (a, b) => a + b

// Array Methods (functions applied to arrays)
// Array => Collection of elements.

const scores = [ 99, 45, 87, 87, 39, 50 ];
const sa = () => console.log("Current scores: ", scores);

sa()

// methods
// push -> add item(s) at end
scores.push(85);
sa()

// unshift -> add item(s) at front
scores.unshift(95, 100, 77, 80)
sa()

// pop -> remove last item
scores.pop()
sa()

// shift -> remove first item
scores.shift()
sa()

// forEach -> goes through each item
const printScores = (score) => {
    console.log("The score is ", score);
}
scores.forEach(printScores);

// map -> goes through each item and transforms it into something then return all transformed values as a new array
const halfScore = (score) => score / 2;
const halvedScores = scores.map(halfScore);
sa();
console.log("Half Score: ", halvedScores);


