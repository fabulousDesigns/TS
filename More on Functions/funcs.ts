/**Optional Parameters
Key points:
Mark optional parameters with ?: function f(x?: number) { ... }
Optional parameters have the type T | undefined by default
You can provide default values: function f(x = 10) { ... }
Callers can pass undefined to use the default value */
// Optional parameter
function f(x?: number) {
  // x has type number | undefined
}
// Default parameter
function greet(name = "world") {
  console.log(`Hello, ${name}!`);
}
// All valid calls
f(); // x is undefined
f(5); // x is 5
f(undefined); // x is undefined
/**Optional Parameters in Callbacks
Key points:
Be careful with optional parameters in callback type definitions
Marking a parameter as optional means the implementation might not provide it
For callbacks, only mark parameters optional if you might not provide them */
// COMMON MISTAKE: index? doesn't mean "might not use it"
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    // TypeScript thinks this is fine, but might cause errors
    callback(arr[i], i);
  }
}
// BETTER: All parameters required in type signature
function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
/**Function Overloads
Key points:
Define multiple signatures for a function with different parameter patterns
Write 2+ overload signatures followed by an implementation signature
Implementation signature isn't visible from outside and must be compatible with all overloads
Callers can only use patterns defined in the overload signatures */
// Overload signatures
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// Implementation signature - not directly callable
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

// Valid calls
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 2025);

// Invalid - no overload expects 2 arguments
const d3 = makeDate(1, 3); // Error!