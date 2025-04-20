/**TypeScript Object Types and Union Types Challenges
Challenge 1: Object Type Definitions
Create type annotations for these objects:
 */
// 1. Create a type annotation for a person object with name (string), age (number),
// and optional email (string)
type Person = {
  name: string;
  age: number;
  email?: string;
};
const person: Person = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

// 2. Create a type annotation for a product with id (number), name (string),
// price (number), and optional tags (array of strings)
type Product = {
  id: number;
  name: string;
  price: number;
  tags?: string[];
};
const product: Product = {
  id: 123,
  name: "Headphones",
  price: 79.99,
  tags: ["electronics", "audio"],
};

// 3. Create a type annotation for a configuration object with read-only properties
type Config = {
  readonly apiUrl: string;
  readonly timeout: number;
  readonly debug: boolean;
};
const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  debug: false,
};
/**Challenge 2: Working with Optional Properties
Fix the errors in this code: */
// This function processes a user profile
type User = { id: number; name: string; bio?: string; age?: number };
function updateProfile(user: User) {
  // Calculate years until retirement (assuming retirement age is 65)
  let yearsToRetirement;
  if (user.age !== undefined) {
    yearsToRetirement = 65 - user.age;
  }
  // Create greeting using bio
  const greeting = `Hello ${user.name}, ${user.bio}`;

  return {
    id: user.id,
    yearsToRetirement,
    greeting,
  };
}

// Test with different users
const user1 = { id: 1, name: "Alex" };
const user2 = { id: 2, name: "Taylor", bio: "Web developer" };
const user3 = { id: 3, name: "Jordan", age: 45 };

updateProfile(user1);
updateProfile(user2);
updateProfile(user3);

/**Challenge 3: Union Types
Create appropriate union types for these scenarios: */

// 1. Create a function validate() that takes an input which could be a string,
// number, or boolean and returns a standardized string representation
const validate = (input: string | number | boolean): string => {
  return String(input).trim().toLowerCase();
};
// 2. Create a type for a Status that could be:
//    - "loading"
//    - "success" with a data property (any type)
//    - "error" with an error message (string)
type Status =
  | { type: "loading" }
  | { type: "success"; data: any }
  | { type: "error"; error: string };

// 3. Create a function renderStatus() that takes a Status and returns an appropriate message
function renderStatus(status: Status) {
  switch (status.type) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log("Data Received: ", status.data);
      break;
    case "error":
      console.error("Something went wrong:", status.error);
      break;
  }
}
// Challenge 4: Type Narrowing
// Fix this function to properly handle the union type:
// This function should find the length of a string or array
function getLength(value: string | any[]) {
  // Return the length
  return typeof value === "string" || Array.isArray(value)
    ? value.length
    : console.log("Invalid input type");
  // return value.length;
}
// This function should format the input differently depending on its type
function formatData(input: string | number | boolean) {
  return typeof input === "string" ? input.toUpperCase() : input.toString();
}
// Challenge 5: Advanced Object Types
// Create object type definitions for this application:
// Create types for a simple e-commerce system with:
// 1. A User type with required id, name, email and optional phoneNumber and address
// 2. A type for different payment methods:
//    - Credit card: with number, expiryDate, cvv
//    - PayPal: with email
//    - Bank transfer: with accountNumber, bankCode
// 3. An Order type with id, items (array of products with id, name, price, quantity),
//    user (User type), payment (one of the payment methods), and status
// Then create a sample order object with proper typing
type UserType = {
  id: number;
  name: string;
  email: string;
  phoneNumber?: number;
  address?: string;
};
type PaymentMethod =
  | {
      type: "Credit Card";
      creditCardNumber: number;
      expiryDate: Date;
      cvv: number;
    }
  | { type: "PayPal"; email: string }
  | { type: "Bank Transfer"; accountNumber: number; bankCode: number };
type ProductType = {
  id: number;
  name: string;
  price: number;
  qty: number;
};
type Order = {
  id: number;
  items: ProductType[];
  user: UserType;
  payment: PaymentMethod;
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
};

const sampleOrder: Order = {
  id: 1001,
  items: [
    { id: 1, name: "Laptop", price: 1200, qty: 1 },
    { id: 2, name: "Mouse", price: 25, qty: 2 },
  ],
  user: {
    id: 500,
    name: "Bernard Maina",
    email: "bernard@example.com",
    phoneNumber: 712345678,
  },
  payment: {
    type: "Credit Card",
    creditCardNumber: 1234567890123456,
    expiryDate: new Date("2026-12-31"),
    cvv: 123,
  },
  status: "pending",
};
