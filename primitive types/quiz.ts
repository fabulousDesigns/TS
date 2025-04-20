/**TypeScript Primitive Types Challenges
Challenge 1: Type Annotations
Identify and fix any type errors in the following code: */
let userName: string = "TechLearner";
let userAge: number = "28"; // let userAge: number = 28
let isActive: Boolean = true; // let isActive: boolean = true
let greeting = "Welcome " + 42;
/**Challenge 2: Type Inference
For each of these variables, what type will TypeScript infer? */
let message = "Hello TypeScript"; // string
let count = 10; // number
let isEnabled = false; // boolean
let combined = count + " items"; // string
/**Challenge 3: Type Compatibility
Will these assignments work? If not, explain why. */
let num: number;
let str: string;
let bool: boolean;

num = 42.5; // will work since number covers for all numeric types e.g float and integers
str = num.toString(); // will work because we are directly converting from number to a string
num = "100"; // type string cannot be assigned to a number so definitely it will not work
bool = 1; // type number cannot be assigned to a boolean it will not work

/**Challenge 4: Type Errors
What's wrong with each of these expressions and how would you fix them? */
// Expression 1
let name: string;
console.log(name.toUpperCase()); // console.log(name3.toLocaleUpperCase())

// Expression 2
let id: number = "user123"; // let id: number = 123

// Expression 3
let flag: boolean = "true"; // let flag: boolean = true
/**Challenge 5: Practical Usage
Write a function calculateTax that:
Takes a price (number) and a tax rate (number)
Returns the total price with tax (number)
Include proper type annotations */

let calculateTax = (price: number, tax: number) => {
  return price + tax;
};
