let point: { x: number; y: number } = { x: 10, y: 20 };
function calculateDistance(
  p1: { x: number; y: number },
  p2: { x: number; y: number }
) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

console.log(calculateDistance({ x: 10, y: 20 }, { x: 30, y: 35 }));
// TypeScript ensures that objects have the required properties of the correct types:
// These will cause type errors:
let badPoint: { x: number; y: number } = { x: 10 }; // Missing 'y' property
let wrongPoint: { x: number; y: number } = { x: "10", y: 20 }; // 'x' is string, not number
/**Optional Properties
Add a ? after the property name to make it optional: */
// Object type with optional properties
let user: { id: number; name: string; email?: string } = {
  id: 1,
  name: "Alice",
  // email is optional, so it can be omitted
};
// Function with optional properties
function sendEmail(message: {
  subject: string;
  body: string;
  cc?: string;
  bcc?: string;
}) {
  // Implementation
}
// Usage with or without optional properties
sendEmail({ subject: "Hello", body: "How are you?" });
sendEmail({
  subject: "Meeting",
  body: "Tomorrow at noon",
  cc: "team@example.com",
});
// When accessing optional properties, you need to check if they exist:
function displayUser(user: { name: string; age?: number }) {
  console.log(`Name: ${user.name}`);

  // Need to check if optional property exists
  if (user.age !== undefined) {
    console.log(`Age: ${user.age}`);
  }

  // Alternative using optional chaining
  console.log(`Age: ${user.age?.toString() || "Not provided"}`);
}
/**Readonly Properties
You can make properties read-only: */
let config: { readonly apiKey: string; readonly maxRetries: number } = {
  apiKey: "abc123",
  maxRetries: 3,
};

// This will cause a type error:
config.apiKey = "xyz789"; // Cannot assign to 'apiKey' because it is a read-only property
/**Index Signatures
For objects with a variable number of properties of the same type:
 */
// Object can have any number of string properties, all with number values
let metrics: { [key: string]: number } = {
  clicks: 456,
  impressions: 2340,
  conversions: 38,
};
// Can add new properties with same type
metrics.bounces = 120; // OK
metrics.date = "2023-01-01"; // Error: Type 'string' is not assignable to type 'number'
/**Union Types
Union types allow a value to be one of several types.
Basic Union Types */
// Variable that can be either string or number
// Variable that can be either string or number
let id: string | number;
id = "abc123"; // OK
id = 456; // OK
id = true; // Error: Type 'boolean' is not assignable to type 'string | number'
// Function parameter with union type
function printId(id: string | number) {
  console.log(`ID: ${id}`);
}
printId("abc123"); // OK
printId(456); // OK
/**Working with Union Types through Narrowing
To use methods specific to one type in the union, you need to narrow the type:
1. Type Guards with typeof */
function formatValue(value: string | number) {
  // Need to narrow the type before using type-specific methods
  if (typeof value === "string") {
    // TypeScript knows value is a string here
    return value.toUpperCase();
  } else {
    // TypeScript knows value is a number here
    return value.toFixed(2);
  }
}
// 2. Array Type Guards with Array.isArray()
function process(data: string | string[]) {
  if (Array.isArray(data)) {
    // TypeScript knows data is string[] here
    return data.join(", ");
  } else {
    // TypeScript knows data is string here
    return data.trim();
  }
}
// 3. Property Checks
// Union of different object types
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; sideLength: number };

function calculateArea(shape: Circle | Square) {
  if (shape.kind === "circle") {
    // TypeScript knows shape is Circle here
    return Math.PI * shape.radius * shape.radius;
  } else {
    // TypeScript knows shape is Square here
    return shape.sideLength * shape.sideLength;
  }
}
// 4. Using the in operator
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    // TypeScript knows animal is Fish here
    animal.swim();
  } else {
    // TypeScript knows animal is Bird here
    animal.fly();
  }
}
// Union Types with Common Properties
// If all types in a union share properties, you can use those without narrowing:

// Discriminated unions
// A common pattern is to include a property that distinguishes between union members:
type ValidationSuccess = {
  success: true;
  value: string;
};

type ValidationError = {
  success: false;
  errorMessage: string;
};

type ValidationResult = ValidationSuccess | ValidationError;

function handleResult(result: ValidationResult) {
  if (result.success) {
    // TypeScript knows it's ValidationSuccess
    console.log(`Validated: ${result.value}`);
  } else {
    // TypeScript knows it's ValidationError
    console.log(`Error: ${result.errorMessage}`);
  }
}
