/**Challenge 1: Parameter and Return Type Annotations
Add proper type annotations to these functions: */
// Add parameter and return type annotations
// Add parameter and return type annotations
function multiply(a: number, b: number): number {
  return a * b;
}
// Add parameter and return type annotations
function joinStrings(a: string, b: string, separator: string): string {
  return a + separator + b;
}
// Add parameter type annotation
function printPerson(person: { name: string; age: number }) {
  console.log(`${person.name} is ${person.age} years old`);
}
/**Challenge 2: Promise Return Types
Fix the type annotations in these async functions: */
// Add proper Promise return type
async function fetchUserData(
  userId: number
): Promise<{ id: number; name: string; email: string }> {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    email: data.email,
  };
}
interface Product {
  id: number;
  name: string;
  price: number;
}
// Add proper Promise return type
async function fetchAllProducts(): Promise<string[]> {
  const response = await fetch("/api/products");
  const products: Product[] = await response.json();
  return products.map((p) => p.name);
}
/**Challenge 3: Function Types
Create function type definitions and apply them: */
// Create a function type for a calculator operation (takes two numbers, returns a number)
// Then apply it to these functions

// Function type definition for calculator operations
type CalculatorOperation = (a: number, b: number) => number;

// Apply the type to each function
const add: CalculatorOperation = (a, b) => a + b;
const subtract: CalculatorOperation = (a, b) => a - b;
const multiply2: CalculatorOperation = (a, b) => a * b;
const divide: CalculatorOperation = (a, b) => a / b;

// Create a function type for a data transformer (takes any type, returns same type)
// Then apply it to these functions

type DataTransformer<T> = (x: T) => T;

const doubleNumber: DataTransformer<number> = (x) => x * 2;
const capitalizeString: DataTransformer<string> = (x) => x.toUpperCase();
/**Challenge 4: Anonymous Functions and Contextual Typing
Identify any type errors in this code: */

const numbers = [1, 2, 3, 4, 5];

// 1. Map numbers to their squared values
const squared = numbers.map((n) => n * n);

// 2. Filter for even numbers
const evenNumbers = numbers.filter((n) => n % 2 === 0);

// 3. Find first number greater than 3
const firstLarge = numbers.find((n) => n.length > 3); // Property 'length' does not exist on type 'number'.ts(2339)

// 4. Transform array to string
const numbersText = numbers.reduce(
  (text, num) => text.concat(num.toString()),
  ""
);

// 5. Check if all numbers are positive
const allPositive = numbers.every((n) => n.value > 0); // Property 'value' does not exist on type 'number'
/**Challenge 5: Advanced Function Features
Fix or complete these functions: */

// 1. Create a function that takes a required id, optional name, and returns a user object
function createUser(
  id: number,
  name?: string
): {
  id: number;
  name?: string;
} {
  return {
    id,
    name: name || "Anonymous",
  };
}

// 2. Create a function that calculates the average of any number of values
function calculateAverage(...values: number[]) {
  if (values.length === 0) return 0;

  const sum = values.reduce((total, n) => total + n, 0);
  return sum / values.length;
}

// 3. Create a function that takes a callback which processes a string
function processUsername(
  username: string,
  processor: (processedUsername: string) => boolean
): boolean {
  if (username.length < 3) {
    return false;
  }

  const processed = username.trim().toLowerCase();
  return processor(processed);
}

