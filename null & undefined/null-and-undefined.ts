// JavaScript has two primitive values for "absence":
// undefined = something hasn't been assigned.
// null = explicitly nothing.
// In TypeScript, they are actual types too:
let a: undefined = undefined;
let b: null = null;
/**🔐 strictNullChecks Setting
✅ When OFF (loose mode):
You can assign null or undefined to any type.
This is risky: you might call .toUpperCase() on null and get runtime errors. */
let str: string = null; // allowed when strictNullChecks is off
str.toUpperCase(); // 💣 Boom at runtime
// 🔒 When ON (recommended):
// TypeScript forces you to check or handle null/undefined explicitly.
function greet(name: string | null) {
  if (name !== null) {
    console.log("Hi, " + name.toUpperCase());
  }
}
// Now you must narrow types before use.
// 🔍 Type Narrowing with null / undefined
function getLength(str?: string | null) {
  if (str == null) {
    return 0;
  }
  return str.length;
}
// str == null checks for both null and undefined
// After that check, TypeScript knows str is definitely a string
// ❗ Non-Null Assertion Operator (!)
// Use it to tell TypeScript: "I know better — this is not null or undefined."
function risky(x?: number | null) {
  console.log(x!.toFixed(2)); // ⚠️ Dangerous if x is null or undefined
}
// This is your "I got this" operator — use only when you're sure.
// ✅ Summary
// null and undefined are distinct and treated differently in strict mode.
// Always prefer strictNullChecks: true.
// Use narrowing (e.g., if (x != null)) to safely work with possibly-null values.
// Use ! sparingly — it's a powerful but dangerous escape hatch.
