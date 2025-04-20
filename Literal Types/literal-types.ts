// A literal type lets you specify that a value must be exactly one of a set of values — like "left", 0, or true.
// 🔹 String Literal Types
type Alignment = "left" | "right" | "center";
function setTextAlign(align: Alignment) {
  console.log(`Aligning text to the ${align}`);
}
setTextAlign("left");
setTextAlign("middle");
// 🔹 Number Literal Types
type Direction = -1 | 0 | 1;
function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}
move(1); // ✅
move(5); // ❌
// 🔹 Boolean Literal Types
type Toggle = true | false;
function setToggle(value: Toggle) {
  console.log(`Toggle is ${value}`);
}
setToggle(true); // ✅
setToggle(false); // ✅
// Feature | Explanation
// "left" | string literal type
// 0, 1, -1 | number literal types
// true, false | boolean literal types
// as const | freezes a value's type to its literal
// Use in switch, unions | Helps build safe & expressive code
