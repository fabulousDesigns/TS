//! Function Type Expressions
//* Key points:
// Define function types using syntax similar to arrow functions: (param: type) => returnType
// Parameter names are required in the type definition (for documentation) but don't affect type checking
// Use type aliases to create reusable function types: type GreetFunction = (name: string) => void;
function greeter(fn: (a: string) => void) {
  fn("Hello world");
}
// with type Alias
type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  fn("Amazing stuff");
}
/**Call Signatures
Key points:
Use call signatures when you need functions with properties
Defined in object types using (params): returnType syntax with : instead of =>
Allows describing callable objects with additional properties */
// Function with properties
type DescribableFunction = {
  description: string; // Property
  (someArg: number): boolean; // Call signature
};

// Usage
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
/**Construct Signatures
Key points:
Used for functions that can be called with new (constructors)
Add new keyword before the call signature
Can combine call and construct signatures for functions that work both ways */

// Constructor type
type SomeConstructor = {
  new (s: string): SomeObject;
};

// Combined call and construct
interface CallOrConstruct {
  (n?: number): string; // Call signature
  new (s: string): Date; // Construct signature
}
