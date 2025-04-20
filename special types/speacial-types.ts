/**Special Types in TypeScript
The any Type
The any type is a special type in TypeScript that effectively opts out of type checking for that particular value.
What any Does: */
let dynamicValue: any = 42; // Initially a number
dynamicValue = "hello"; // Can change to string
dynamicValue = true; // Can change to boolean
dynamicValue = [1, 2, 3]; // Can change to array
dynamicValue = { x: 10 }; // Can change to object
// All these operations are allowed with 'any'
dynamicValue.foo(); // Call arbitrary methods
dynamicValue.bar = 100; // Set arbitrary properties
const n: number = dynamicValue; // Assign to any other type
/**When to Use any:
Migration from JavaScript: When gradually moving from JavaScript to TypeScript
Third-party Libraries: When working with libraries that don't have type definitions
Dynamic Content: When dealing with truly dynamic content where types aren't known
Complex Types: As a temporary solution when you're struggling with complex types */
// ! Why any Can Be Dangerous:
let value: any = "hello world";
// TypeScript won't catch this error
value.toUppercase(); // Runtime error: toUppercase is not a function (should be toUpperCase)
// Type safety is lost in derived values
let length: any = value.length; // length should be a number, but type info is lost
// Errors can propagate through your codebase
let upperValue = value.toUppercase(); // No error flagged
displayUserData(upperValue); // Problem only discovered at runtime
/**The noImplicitAny Compiler Flag
This is a TypeScript compiler option that changes how the language handles situations where it would normally infer the any type.
Without noImplicitAny: */
// TypeScript implicitly gives 'x' type 'any'
function multiply(x, y) {
  return x * y;
}
// With noImplicitAny Enabled:
// Error: Parameter 'x' implicitly has an 'any' type
function multiply(x, y) {
  return x * y;
}
// Must be fixed by adding explicit types:
function multiply(x: number, y: number) {
  return x * y;
}
// Enabling noImplicitAny:
// In your tsconfig.json file:
// {
//   "compilerOptions": {
//     "noImplicitAny": true
//   }
// }
// Benefits of noImplicitAny:
// Forces you to think about proper types
// Catches potential bugs earlier
// Improves code documentation
// Enhances IDE auto-completion

/**Type Annotations in TypeScript
Type annotations let you explicitly tell TypeScript what type a variable, parameter, or function return value should be.
Variable Type Annotations
Basic syntax: variableName: type = value */
// Basic types
let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;
// Arrays
let scores: number[] = [85, 92, 78];
let names: Array<string> = ["Bob", "Charlie"];
// Objects
let user: { id: number; name: string } = { id: 1, name: "Alice" };
// Function types
let greet: (name: string) => string = function (name) {
  return `Hello, ${name}!`;
};
/**Type Inference
TypeScript can automatically determine (infer) types based on the values you assign: */
// TypeScript infers these types without explicit annotations
let name = "Alice"; // inferred as string
let age = 30; // inferred as number
let isActive = true; // inferred as boolean
let scores = [85, 92, 78]; // inferred as number[]

// More complex inference example
let mixed = [1, "two", 3]; // inferred as (string | number)[]

// Function return type inference
function add(a: number, b: number) {
  return a + b; // return type inferred as number
}
// When Type Inference Works Well:
// Variable initialization:
let message = "Hello";
// Default values in functions:
function greet(name = "world") {
  return `Hello, ${name} !`;
}
// Return values in functions:
function getLength(arr: any[]) {
  return arr.length; // Return type inferred as number
}
// When to Use Explicit Type Annotations:
// Variable declaration without initialization:
let userId: number; // Good: type is clear
let userId; // Bad: implicitly any
// Function parameters:
function process(data: string) {
  // Good practice
  // ...
}
// Object properties expected by your code:
function printUser(user: { name: string; age: number }) {
  console.log(`${user.name} is ${user.age} years old`);
}
// Complex types that inference might get wrong:
// Without annotation, might be inferred as literals
const config: { readonly debug: boolean; maxRetries: number } = {
  debug: true,
  maxRetries: 3,
};
// Class properties:
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
