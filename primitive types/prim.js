/**
 * Primitive Types in TypeScript
TypeScript provides type annotations for JavaScript's three primary primitive types:
string: For text values like "Hello, world"
number: For numerical values (no distinction between integers and floating-point)
boolean: For true/false values
 */
// String Type
// String rep text data
var greeting = "Hello world";
// number type
// The number type covers all numeric values in JavaScript. Unlike some languages, TypeScript doesn't have separate types for integers and floating-point numbers:
var integer = 42;
var float = 3.142;
// Boolean type
var isComplete = false;
/**
 * ! TypeScript also has capitalized versions (String, Number, Boolean) but these refer to special built-in types that rarely appear in typical code. Always use lowercase string, number, and boolean for your type annotations.
 */
// * Lowercase vs Capitalized Types in TypeScript
var stringObject = new String("hello");
var stringPrimitive = "hello";
console.log(typeof stringObject);
console.log(typeof stringPrimitive);
