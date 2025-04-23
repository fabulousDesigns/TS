// function type expterssion
// The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions:
function greeter (fn: (a:string) => void){
  fn("Hello world")
}
function printToConsole(s: string) {
  console.log(s);
}
// greeter(printToConsole);
/**The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”. Just like with function declarations, if a parameter type isn’t specified, it’s implicitly any.
Note that the parameter name is required. The function type (string) => void means “a function with a parameter named string of type any“! */
// Of course, we can use a type alias to name a function type:

type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  // ...
}
// Call signatures
//In JavaScript, functions can have properties in addition to being callable. However, the function type expression syntax doesn’t allow for declaring properties. If we want to describe something callable with properties, we can write a call signature in an object type:

type GreetingFunction = {
  (name: string): string; // Call signature
  description: string;    // Additional property
};

const greet: GreetingFunction = (name: string) => {
  return `Hello, ${name}!`;
};

greet.description = "A function to greet users";

console.log(greet("Alice"));          
console.log(greet.description);     
/**GreetingFunction defines a callable object that takes a string and returns a string.
The greet function implements this call signature and includes an additional description property. */
// ! Calculator Using Call Signature
type Calculator = {
  (a: number, b:number): number; // call signature
  operation: string;
}

const add:Calculator = (a: number, b: number) => a + b
add.operation = "Addition"
const multiply: Calculator = (a: number, b: number) => a * b;
multiply.operation = "Multiplication";

console.log(`${add.operation}: ${add(5, 3)}`);        
console.log(`${multiply.operation}: ${multiply(5, 3)}`); 
//Calculator defines a callable object that takes two number parameters and returns a number.
// 

/**Best Practices for Using TypeScript Call Signatures
Clearly Define Parameter and Return Types: Ensure all call signatures specify explicit parameter and return types for better type safety.
Include Descriptive Properties: Add properties that provide context or metadata about the callable object to enhance code readability.
Use Consistent Naming Conventions: Adopt clear and consistent naming for callable objects and their properties to improve maintainability. */

// construct signatures
// JavaScript functions can also be invoked with the new operator. TypeScript refers to these as constructors because they usually create a new object. You can write a construct signature by adding the new keyword in front of a call signature:
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
// Some objects, like JavaScript’s Date object, can be called with or without new. You can combine call and construct signatures in the same type arbitrarily:

interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}
 
function fn(ctor: CallOrConstruct) {
  // Passing an argument of type `number` to `ctor` matches it against
  // the first definition in the `CallOrConstruct` interface.
  console.log(ctor(10));
               
(parameter) ctor: CallOrConstruct
(n?: number) => string
 
  // Similarly, passing an argument of type `string` to `ctor` matches it
  // against the second definition in the `CallOrConstruct` interface.
  console.log(new ctor("10"));
                   
(parameter) ctor: CallOrConstruct
new (s: string) => Date
}
 
fn(Date);