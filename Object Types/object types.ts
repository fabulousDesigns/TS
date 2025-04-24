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
