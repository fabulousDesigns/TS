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
// In all three examples above, we’ve written functions that take objects that contain the property name (which must be a string) and age (which must be a number).
// ! Property Modifiers
// Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.
// ? Optional Properties
type Shape = {};
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}
function paintShape(opt: PaintOptions) {}
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
// ? readonly Properties
// A prop marked a s readOnly cant be written to during type-checking
interface SomeType {
  readonly prop: string;
}
function doSomething(obj: SomeType) {
  // we can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
  // cant re-assign it
  obj.prop = "hello"; // cannot assign prop because it is a readonly
}
/**Using the readonly modifier doesn’t necessarily imply that a value is totally immutable - or in other words, that its internal contents can’t be changed. It just means the property itself can’t be re-written to.
 */

// readonly is a compile-time constraint only.
// It tells the TypeScript compiler: “Do not allow reassignment to this property.”
// It does not freeze the object at runtime like Object.freeze().
// It's shallow: only prevents direct reassignments, not deep/internal mutations.
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  console.log(obj.prop); // ✅ Allowed: reading is fine
  obj.prop = "hello"; // ❌ Error: Cannot assign to 'prop'
}
// So readonly here protects the property, not the value’s internals.
// 🧠 Immutable Illusion – It’s Shallow
interface Home {
  readonly resident: { name: string; age: number };
}
function visitForBirthday(home: Home) {
  home.resident.age++; // ✅ Allowed: You can mutate internals
}
function evict(home: Home) {
  home.resident = {
    // ❌ Error: You can't reassign the property
    name: "Victor",
    age: 42,
  };
}
/**📌 Memory Hack:
readonly protects the link, not the contents. */
// 🧠 Think:
// readonly resident → can’t change the resident object
// but resident.age++ is fine because we didn’t change the link.
// ? 🔄 Type Compatibility: readonly doesn’t make types incompatible
interface Person {
  name: string;
  age: number;
}
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}
let writablePerson: Person = {
  name: "McPersonface",
  age: 42,
};
let readonlyPerson: ReadonlyPerson = writablePerson;
writablePerson.age++; // ✅ Updates also reflect in readonlyPerson
console.log(readonlyPerson.age); // 43
/**🚨 Even though readonlyPerson looks frozen, it’s not — because it's just a view into the same object.
This is called aliasing — readonly is a type-level constraint, not a runtime freeze. */
// ! 📚 What are Index Signatures?
// They’re how you tell TypeScript:
// “I don’t know the exact property names, but I know the type of values those properties will hold.”
// basic syntax
interface StringArray {
  [index: number]: string;
}
/**🧠 This says:
Any time someone accesses this object with a number like obj[0], it must return a string.
✅ Use-case: Arrays, Maps, Dictionaries, Record-style objects. */
// 🔍 Example in Action
const myArray: StringArray = getStringArray();
const secondItem = myArray[1]; // ✅ typed as string
/**🧬 What types can be indexers?
Only these are allowed as key types:
string
number
symbol
template string patterns (e.g. ${number}-id)
Unions of the above (e.g. string | number) */
// ⚠️ Watch Out: Index Signatures Apply to All Props
interface NumberDictionary {
  [index: string]: number;
  length: number; // ✅
  name: string; // ❌ Error
}

//🎯 What are Excess Property Checks?
// When you create an object literal and immediately assign it to a type, TypeScript checks for extra properties that don’t exist in that type.
interface SquareConfig {
  color?: string;
  width?: number;
}
createSquare({ colour: "red", width: 100 }); // ❌ Error: 'colour' not in SquareConfig
//🧠 Why?
// Because object literals are treated as exactly typed when used inline — TypeScript assumes you might have made a typo.

// ✅ Why It’s Good
// Let’s be real:

{
  colour: "red";
} // looks fine in JS
// But in TS:

{
  colour: "red";
} // probably meant "color"
// So TypeScript helps you catch typos early instead of silently ignoring them like JS does.

// 🛠️ 3 Ways to Bypass or Handle the Check (with Pros and Cons)
// 🔸 1. Type Assertion
createSquare({ width: 100, opacity: 0.5 } as SquareConfig); // ✅ compiles
// 🔸 2. Index Signature (best for known-but-flexible shapes)
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: unknown;
}
// ✅ Now createSquare({ colour: "red", width: 100 }) is legal
// ⚠️ You lose strictness — any property is allowed, so no typo protection.
// 🔍 Use this only if you actually want to support dynamic props, like option bags.

// 🔸 3. Assign Object to Variable First
const squareOptions = { colour: "red", width: 100 };
createSquare(squareOptions); // ✅ compiles
//*✅ Works because excess property checks only happen for inline object literals
// ⚠️ Can lead to subtle bugs if you're actually passing invalid data.

// ⚠️ This Won’t Work:

const squareOptions = { colour: "red" };
createSquare(squareOptions);  // ❌ Error: no overlap with SquareConfig
// Why? Because colour is not a known property, and no overlap like width to soften the check.