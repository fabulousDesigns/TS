/**
 * Primitive Types in TypeScript
TypeScript provides type annotations for JavaScript's three primary primitive types:
string: For text values like "Hello, world"
number: For numerical values (no distinction between integers and floating-point)
boolean: For true/false values
 */
// String Type
// String rep text data
let greeting: string = "Hello world"
// number type
// The number type covers all numeric values in JavaScript. Unlike some languages, TypeScript doesn't have separate types for integers and floating-point numbers:
let integer: number = 42
let float: number = 3.142

// Boolean type
let isComplete: boolean = false

/**
 * ! TypeScript also has capitalized versions (String, Number, Boolean) but these refer to special built-in types that rarely appear in typical code. Always use lowercase string, number, and boolean for your type annotations.
 */

// * Lowercase vs Capitalized Types in TypeScript
const stringObject = new String("hello")
const stringPrimitive = "hello"

console.log(typeof stringObject);
console.log(typeof stringPrimitive);

/**
 * In TypeScript's type system:

The lowercase types represent the primitive values you normally use
The capitalized types represent these object wrappers, which have different behavior

Why Avoid Capitalized Types?
You should use lowercase types because:

Most JavaScript code uses primitive values, not their object wrappers
Object wrappers have different behavior than primitives (e.g., with equality comparisons)
TypeScript's standard library is designed around primitive types

For example:
 */

// GOOD: Using the primitive type
let name1: string = "Alice";

// BAD: Using the object wrapper type
let name2: String = "Alice";

// The capitalized versions are mainly useful when you specifically need to refer to the type of the constructor functions themselves or when working with the rare case of explicitly created wrapper objects.