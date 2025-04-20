// Challenge 1: Basic Array Types
// Fix the type errors in the following code:
let prices: number[] = [19.99, 29.99, "39.99", 49.99]; // should be 39.99 and not "39.99"
let names: string[] = ["Alice", "Bob", 42, "Charlie"]; // should be str "42" and not 42
let mixed: (string | number)[] = [1, "two", true, 4]; // is true isn't either str or num so get it off
//Challenge 2: Array Type Annotations
// Add appropriate type annotations to these arrays:
// Array of car makes
let carMakes: Array<string> = ["Toyota", "Honda", "Ford"];
// Array of test scores (numbers between 0-100)
let testScores: Array<number> = [98, 87, 92, 79, 85];
// Array of user objects
let users: Array<{ id: number; name: string; active: boolean }> = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
];
/**Challenge 3: Array Methods
What will be the types of these variables after the operations? */
let numbers = [1, 2, 3, 4, 5];
let strings = ["a", "b", "c"];

// What is the type of doubledNumbers?
let doubledNumbers = numbers.map((x) => x * 2); // number[]

// What is the type of combined?
let combined = [...numbers, ...strings]; //(string | number)[]

// What is the type of filtered?
let filtered = numbers.filter((x) => x > 2); // number[]

// What is the type of found?
let found = numbers.find((x) => x === 3); // number[]

/**Challenge 4: Multidimensional Arrays
Create type annotations for these multidimensional arrays: */
// 2D grid of numbers (3x3)
let grid: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Array of string arrays with different lengths
let jaggedArray: string[][] = [
  ["a", "b", "c"],
  ["d", "e"],
  ["f", "g", "h", "i"],
];
/**Challenge 5: Practical Application
Write a function called calculateTotal that:
Takes an array of product prices (numbers)
Returns the sum of all prices with appropriate type annotations */
const calculateTotal = (prices: number[]) => {
  return prices.reduce((acc, price) => acc + price, 0);
};
/**Then, write another function called filterExpensiveProducts that:
Takes an array of products (each with a name and price)
Returns only products with a price over $50
Uses appropriate type annotations */
const filterExpensiveProducts = (
  products: Array<{ name: string; price: number }>
) => {
  return products.filter((product) => product.price > 50);
};
