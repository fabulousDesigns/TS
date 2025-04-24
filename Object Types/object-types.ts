/**🔹 Extending Interfaces (via extends)
When you extend an interface, you’re saying:
“This new interface is the old one, plus more.”
✅ Use case:
You want to build on top of an existing shape without repeating it. */
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
interface AddressWithUnit extends BasicAddress {
  unit: string;
}
/**Here, AddressWithUnit inherits everything from BasicAddress, then adds unit. It’s clear, DRY, and signals intent.
✅ Multiple Inheritance: */
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
interface ColorfulCircle extends Colorful, Circle {}
/**🔸 Intersection Types (&)
Intersection types let you combine multiple types on the fly—sort of like building LEGO blocks of types. */
type ColorfulCircle2 = Colorful & Circle;
/**No new interface is created—you’re building a new shape by requiring all properties from both sides.
✅ Use case:
Great for ad-hoc composition where inheritance isn’t semantically necessary.
✅ Function example: */
function draw(circle: Colorful & Circle) {
  console.log(circle.color);
  console.log(circle.radius);
}
// This is like saying: “Only accept things that are both Colorful and a Circle.”
// ⚠️ Interface vs Intersection — The Subtle Differences
// ⚡ Property Conflict
// Interfaces: TypeScript does not allow conflicts.
interface A {
  name: string;
}
interface A {
  name: number;
} // ❌ Error: Conflicting type
// Intersection types: TypeScript merges—but merging conflicting properties results in never.
type C = { name: string } & { name: number };
const c: C = { name: "oops" }; // ❌ name: never
// So the lesson: Don’t intersect types with conflicting properties unless you're sure.
