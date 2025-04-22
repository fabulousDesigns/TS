interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}
type Shape = Circle | Square;
/**🔑 Key things that make this a "discriminated union":
You have multiple types in a union.
Each has a shared property (kind).
That property holds a literal string value that uniquely identifies the type. */
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    // TypeScript now *knows*: shape is a Circle
    return Math.PI * shape.radius ** 2;
  } else {
    // shape is a Square
    return shape.sideLength ** 2;
  }
}
/**This is pure type-safe magic. No need for !, no weird casts, just clean and safe logic.
TypeScript is like:
“Oh you checked kind === 'circle'? Cool. From now on in this block, I'll treat shape as a Circle`.”
You can even go cleaner with a switch: */
function getAreaWithSwitch(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
/**🔥 REAL-WORLD USE CASES
Redux-like Actions */
type Action =
  | { type: "INCREMENT"; amount: number }
  | { type: "DECREMENT"; amount: number }
  | { type: "RESET" };
function reducer(state: number, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.amount;
    case "DECREMENT":
      return state - action.amount;
    case "RESET":
      return 0;
  }
}
// Network State
type NetworkState =
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; error: string };

function render(state: NetworkState) {
  switch (state.status) {
    case "loading":
      return "Loading...";
    case "success":
      return state.data;
    case "error":
      return `Error: ${state.error}`;
  }
}
/**🧠 MEMORY HACKS TO LOCK THIS IN
🧩 "Discriminated" = there's a "discriminator" (aka kind, type, status) that helps TS figure out what shape you're holding.
🔪 if (x.kind === "something") = slice away the other types.
⚔️ switch is your best friend — it's clean, safe, and TS loves it.
📦 Each shape is its own box. You just switch boxes based on a label (kind). */
/**✅ Summary Checklist for Mastery
✅ Use literal types for your kind/type field.
✅ Create separate interfaces for each variant.
✅ Combine them using | into a union.
✅ Narrow with if or switch on the discriminant (kind).
✅ Never use optional props in a shared union type unless you must — use separate types for safety! */
