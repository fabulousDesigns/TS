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

type DescribableFunction = {
  description: string;
  (someArg: number): boolean
}
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + "returned" + fn(6)); 
}
function myFunc(someArg: number){
  return someArg > 3
}
myFunc.description = "default description";
doSomething(myFunc)