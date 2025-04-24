// In JavaScript, the fundamental way that we group and pass around data is through objects.
// In TypeScript, we represent those through object types.
// As we’ve seen, they can be anonymous:
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
// or they can be named using either an interface
interface Person {
  name: string;
  age: number;
}
function greet2(person: Person) {
  return "Hello " + person.name;
}
// or a type Alias
type Person2 = {
  name: string;
  age: number;
};
function greet3(person: Person) {
  return "Hello " + person.name;
}

