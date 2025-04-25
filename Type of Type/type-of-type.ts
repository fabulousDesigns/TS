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
