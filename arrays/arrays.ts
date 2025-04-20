// Arrays in TS
// TypeScript provides specific ways to type arrays, which helps catch common errors when working with collections of data.
/**Basic Array Type Notation
TypeScript offers two equivalent syntaxes for typing arrays:
1. Postfix notation (more common): elementType[]
2. Generic notation: Array<elementType> */
// Examples:
// Both of these declarations are equivalent
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
let numbers2: Array<number> = [1, 2, 3, 4, 5, 6, 7];
// String array examples
let names: string[] = ["Alice", "Bob", "Charlie"];
let names2: Array<string> = ["Alice", "Bob", "Charlie"];
// Boolean array
let flags: boolean[] = [true, false, true];
// Multi-dimensional Arrays
// You can define multi-dimensional arrays by adding more brackets:
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Alternative generic syntax
let matrix2: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5, 6],
];
/**Arrays of Mixed Types
Arrays can have multiple types using union types: */
// Array that can contain numbers or strings
let mixed: (number | string)[] = [1, "two", 3, "four"];
// Alternative generic syntax
let mixed2: Array<number | string> = [1, "two", 3, "four"];
/**Arrays vs Tuples
This is an important distinction. Arrays vs tuples:
Arrays: Collections of elements all of the same type (or union of types)
Tuples: Fixed-length arrays where each position has a specific, potentially different type */
// Array example - all elements are numbers
let scores: number[] = [75, 82, 91, 54];
// Tuple example - first element is string, second is number
let person: [string, number] = ["Alice", 30];
// With tuples, the order and length are fixed:
// This works - follows the [string, number] pattern
let employee: [string, number] = ["Bob", 42];
// These would cause errors
let wrongOrder: [string, number] = [42, "Bob"]; // Wrong types in wrong positions
let tooMany: [string, number] = ["Charlie", 35, true]; // Too many elements
/**Array Methods with Type Safety
TypeScript provides type checking when using built-in array methods: */
let numbers3: number[] = [1, 2, 3, 4];
// TypeScript knows push should only accept numbers
numbers3.push(5); // OK
numbers3.push("six"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// TypeScript knows map returns a new array with transformed values
let doubled: number[] = numbers3.map((n) => n * 2); // [2, 4, 6, 8]
// TypeScript knows filter preserves the element type
let evenNumbers: number[] = numbers3.filter((n) => n % 2 === 0); // [2, 4]
// Readonly Arrays
// You can make arrays that can't be modified:
let constants: readonly number[] = [1, 2, 3];
// Alternative syntax
let constants2: ReadonlyArray<number> = [1, 2, 3];
// These operations would cause errors
constants.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'
constants[0] = 0; // Error: Index signature in type 'readonly number[]' only permits reading
