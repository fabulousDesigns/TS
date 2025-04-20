// 🧱 Enums: "Named Constants at Runtime"
// ✨ What Are They?
// Enums in TypeScript allow you to define a group of named numeric or string constants. They're not just types, they emit JavaScript code.
// 🔢 Numeric Enums (default)
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}
const move = Direction.Up; // 0
// You can even start from a custom value:
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}
// 🔤 String Enums
enum LogLevel {
  Info = "INFO",
  Warning = "WARN",
  Error = "ERROR",
}
// 🔁 Reverse Mapping (only with numeric enums)
enum Day {
  Monday = 1,
  Tuesday,
}
console.log(Day[2]); // "Tuesday"
// 🧨 Why Be Cautious with Enums?
// Enums generate JS code — they're not just types.
// They can make your bundles heavier if misused.
// Prefer unions of string literals when you don’t need runtime values.
// ✅ Better Alternative?
type Direction = "up" | "down" | "left" | "right";
