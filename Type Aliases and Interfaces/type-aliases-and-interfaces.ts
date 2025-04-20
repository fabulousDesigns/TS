//🔹 Type Aliases vs Interfaces — The Basics
// ✅ Type Alias:
type Point = { x: number; y: number };
// ✅ Interface:
interface PointInterface {
  x: number;
  y: number;
}
// Both create an object shape with properties x and y — so far, they behave the same.
/**🔥 Differences (with real dev impact)
1. 📦 Extending/Composition */
// ✅ Interface: extends
interface Shape {
  color: string;
}
interface Circle extends Shape {
  radius: number;
}
// ✅ Clean inheritance like classes.
// ✅ Type Alias: & intersection
type Shape2 = { color: string };
type Circle2 = Shape & { radius: number };
// ✅ More flexible than interface extends, especially when combining types from different sources (e.g., unions, primitives).
/**2. ♻️ Reopening / Declaration Merging
✅ Interfaces can be reopened: */
interface User {
  name: string;
}
interface User {
  age: number;
}
// Merged automatically!
const user: User = { name: "Bernard", age: 25 };
// ⚡️ Very useful in libraries, especially when extending types globally (like in React or Express middlewares).
// ❌ Type aliases cannot be reopened:
type User4 = { name: string };
type User4 = { age: number }; // ❌ Error: Duplicate identifier
// 🔒 Type aliases are sealed once defined.
// 3. 🧵 Unions & Primitives — Only Possible with Type Aliases
type Status = "pending" | "success" | "error"; // ✅
type ID = string | number; // ✅
interface Status {} // ❌ Interfaces can't do this
