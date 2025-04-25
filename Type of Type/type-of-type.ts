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