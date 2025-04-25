type Point = {x: number; y: number;}
type P = keyof Point;
function getPointValue(point: Point, key: P) {
    return point[key];
}
const myPoint = {x:10, y:20}
console.log(getPointValue(myPoint, "x"))
console.log(getPointValue(myPoint, "y"))
// console.log(getPointValue(myPoint, "z"))
// 📦 With Index Signatures:
// 1. Numeric Index Signature:
type Arrayish = {[n: number]: unknown }
type A = keyof Arrayish // 👉 Since the keys are numbers, keyof returns number.
// 2. String Index Signature:
type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // string | number
// ⚠️ M is string | number — why?
// obj[0] === obj["0"] // true
// So TS includes number too, even if the index is string-based.
/**💡 Pro Tip:
 keyof becomes super powerful when combined with:
 Mapped Types
 Generic Utility Types like Record<K, T>, Pick, etc.*/
//✅ What is typeof in TypeScript?
// In JavaScript, typeof is a runtime operator:
console.log(typeof "hello")
// int Ts, typeof can also be used in a type context to extract the type of variable or a value
// basic example
let s = "hello"
let n: typeof s; // string
// ⚒️ Practical Use Case: With Utility Types
// Use with ReturnType<T> to get the return type of function
type Predicate = (x: unknown ) => boolean;
type K = ReturnType<Predicate>; // bool
// but if you try to pass a function value like this:
function f(){
    return {x: 10, y: 3};
}
type P2 = ReturnType<typeof f>;
// ⚠️ Limitation:
//     You can only use typeof on identifiers or their properties:
let user = { name: "Bernard", age: 30 };
type U = typeof user.name; // string ✅
// But not:
type Bad = typeof getUser().name; // ❌ Not allowed
// Because:
//     getUser().name is not a static reference — it’s an expression.
//     TypeScript disallows this to avoid logic traps like code that looks like it executes but doesn’t.
// 🔁 Quick Recap:
//     Use case	Code	Result Type
// From variable	let n = 5; type T = typeof n;	number
// From function return	type T = ReturnType<typeof fn>	whatever fn returns
// Invalid usage	ReturnType<fn> (no typeof)	❌ Error – "value used as type"
/*✅ What are Indexed Access Types?
They allow you to extract the type of a property from another type using bracket notation:*/
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // number ✅
// 🔁 You can index with:
// Single property
// Union of properties
// keyof keyword
// Custom alias types
type I1 = Person["age" | "name"];         // number | string
type I2 = Person[keyof Person];          // number | string | boolean
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];           // string | boolean
// ❌ Indexing a Non-Existent Key:
type Bad = Person["alve"]; // ❌ Error: 'alve' doesn't exist on Person
// 📦 Real-World Pattern: Extract Array Element Type
const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];
type Person = typeof MyArray[number];
// Person: { name: string; age: number }
type Age = typeof MyArray[number]["age"]; // number
// 🧠 MyArray[number] = “an element from MyArray”
// ⚠️ Important Gotcha: Can’t Use const for Indexing
const key = "age";
type Age = Person[key]; // ❌ Error — 'key' is a value, not a type
// ✅ Fix: use a type alias:
type Key = "age";
type Age = Person[Key]; // number
// 🧠 Memory Hook:
//     If you can say it as a sentence, you can write it as a TypeScript indexed access type.
// ✍️ “Give me the type of the age in Person” → Person["age"]
// ⚙️ Summary Table
// Expression	Meaning
// T["key"]	Get type at key "key"
//     `T["a"	"b"]`
// T[keyof T]	Union of all property types in T
// typeof arr[number]	Type of elements in array
// typeof arr[number]["prop"]	Type of a specific property in items
//🧠 What are Conditional Types?
// Conditional types let you write type-level if/else logic:
// SomeType extends OtherType ? TrueType : FalseType
/**This is TypeScript's way of saying:
 “If SomeType can be assigned to OtherType, then use TrueType, else use FalseType.”*/
// 🔄 Real Power: When Combined with Generics
// With generics, you can express reusable, decision-making logic in your types. For example:
type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;
createLabel(123); // → IdLabel
createLabel("TS"); // → NameLabel
// 💡 Mental Model: Think of conditional types like runtime if-statements, but happening entirely at the type level.
// ⚠️ Type Guards at the Type Level
// This:
type MessageOf<T> = T["message"];
//Fails if T doesn't guarantee the "message" key.
// But this:
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
// works like a type guard — it only attempts access if the key is known to exist.
/**🪄 Inferring with infer
 You can extract inner types using infer:*/
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
/**✅ Core Concepts of Mapped Types
 🔁 What’s a Mapped Type?
 Mapped types let you create new types by transforming properties of existing ones — think of it like .map() for object keys.*/
type OptionsFlags<Type> = {
    [Key in keyof Type]: boolean;
};
// It iterates over keys of Type, replacing their types with boolean.

