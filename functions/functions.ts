/**Functions in TypeScript
TypeScript adds powerful type checking to JavaScript functions through parameter types, return types, and more advanced typing features.
Parameter Type Annotations
Parameter type annotations define what types of values a function can accept: */
// Basic parameter typing
function greet(name: string) {
  console.log(`Hello, ${name.toUpperCase()}!`);
}
// Multiple parameters with different types
function createUser(id: number, name: string, isActive: boolean) {
  // ...
}
// Object parameter with specific shape
function printCoordinates(point: { x: number; y: number }) {
  console.log(`X: ${point.x}, Y: ${point.y}`);
}
// Array parameters
function calculateAverage(numbers: number[]) {
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}
// TypeScript will check all function calls to ensure arguments match the expected types:
greet("Alice"); // Works fine
greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
greet();
// Error: Expected 1 argument, but got 0
//Return Type Annotations
// Return type annotations specify what type a function returns:
// Return type annotation
function getFavoriteNumber(): number {
  return 42;
}

// String return type
function formatName(first: string, last: string): string {
  return `${first} ${last}`;
}

// Boolean return type
function isEven(value: number): boolean {
  return value % 2 === 0;
}

// Void return type (function doesn't return a value)
function logMessage(message: string): void {
  console.log(message);
  // Note: No return statement needed
}

// Never return type (function never completes normally)
function throwError(message: string): never {
  throw new Error(message);
}
// TypeScript checks that every return statement in the function matches the specified return type:

function getLength(value: string): number {
  if (value.length === 0) {
    return "Empty"; // Error: Type 'string' is not assignable to type 'number'
  }
  return value.length; // OK
}
//Promise Return Types
// For async functions, you specify what type the Promise resolves to:
// Promise that resolves to a number
async function getFavoriteNumber(): Promise<number> {
  const result = await fetchNumber();
  return result;
}

// Promise that resolves to an array of strings
async function getUsernames(): Promise<string[]> {
  const users = await fetchUsers();
  return users.map((user) => user.username);
}

// Promise that resolves to a complex object
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

async function getCurrentUser(): Promise<User> {
  return await fetchUser(123);
}
// This helps TypeScript understand what types you'll have after awaiting the function:
const num = await getFavoriteNumber(); // TypeScript knows 'num' is a number
const users = await getUsernames(); // TypeScript knows 'users' is string[]

/**Anonymous Functions & Contextual Typing
TypeScript can infer parameter types for anonymous functions based on context: */
// Array methods with callbacks
const numbers = [1, 2, 3, 4, 5];

// TypeScript infers 'num' is a number
numbers.forEach((num) => {
  console.log(num.toFixed(2)); // Works fine, TypeScript knows 'num' is a number
});

// Error: Property 'toUpperCase' does not exist on type 'number'
numbers.map((x) => x.toUpperCase());

// Event handlers
const button = document.getElementById("submit");
// TypeScript infers 'e' is a MouseEvent
button?.addEventListener("click", (e) => {
  console.log(e.target); // TypeScript knows 'e' has target property
});
/**This is called "contextual typing" - TypeScript uses the surrounding context to infer types.
Function Type Expressions
You can define the type of a function: */
// Function type with parameters and return type
type GreetFunction = (name: string) => string;

// Using the type
const sayHello: GreetFunction = (name) => {
  return `Hello, ${name}!`;
};

// Function that takes a callback
function processData(data: string, callback: (processed: string) => void) {
  const processed = data.toUpperCase();
  callback(processed);
}
// Optional and Default Parameters
// Optional parameter (the ? makes it optional)
function greet(name: string, title?: string) {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}
// Default parameter
function greetWithDefault(name: string, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}
// Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// Call with any number of arguments
sum(1, 2); // 3
sum(1, 2, 3, 4, 5); // 15
