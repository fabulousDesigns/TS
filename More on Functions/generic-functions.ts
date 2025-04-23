/**Generic Functions
Key points:
Create functions where input and output types are related
Use type parameters in angle brackets: <Type>
Enables type safety while maintaining flexibility */
// Generic function
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
// TypeScript infers the type automatically
const s = firstElement(["a", "b", "c"]); // s is string
const n = firstElement([1, 2, 3]); // n is number

/**Inference
Key points:
TypeScript automatically infers type parameters when possible
Multiple type parameters can express relationships between arguments and return values
Makes generic functions easy to use */
// Multiple type parameters
function map<Input, Output>(
  arr: Input[], 
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Types are inferred automatically
const parsed = map(["1", "2", "3"], (n) => parseInt(n)); // parsed: number[]

