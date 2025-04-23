//! Function Type Expressions
//* Key points:
// Define function types using syntax similar to arrow functions: (param: type) => returnType
// Parameter names are required in the type definition (for documentation) but don't affect type checking
// Use type aliases to create reusable function types: type GreetFunction = (name: string) => void;
function greeter(fn) {
    fn("Hello world");
}
function greeter2(fn) {
    fn("Amazing stuff");
}
console.log(greeter2);
