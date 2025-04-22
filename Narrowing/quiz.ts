/**🧪 Challenge 1: User Roles
Goal:
Design a discriminated union for an app with 3 user types:
Admin – can manage users (has permissions: string[])
Editor – can edit posts (has posts: number[])
Viewer – can only view (has readOnly: true)
✅ Your task:
Define a type called User.
Use a common role property to discriminate.
Create a function describeUser(user: User): string that returns a string summary for each user type.
Example: */
// describeUser({ role: "admin", permissions: ["ban-users", "delete-posts"] })
// → "Admin with permissions: ban-users, delete-posts"

interface Admin {
  role: "admin";
  permissions: string[];
}
interface Editor {
  role: "editor";
  posts: number[];
}
interface Viewer {
  role: "viewer";
  readonly readOnly: boolean;
}
type User = Admin | Editor | Viewer;

function describeUser(user: User): string {
  switch (user.role) {
    case "admin":
      return `Admin with permissions: ${user.permissions.join(", ")}`;
    case "editor":
      return `Editor with posts: ${user.posts.join(", ")}`;
    case "viewer":
      return `Viewer ${user.readOnly}`;
    default:
      return "N/A";
  }
}

console.log(
  describeUser({ role: "admin", permissions: ["ban-users", "delete-posts"] })
);

/**🧪 Challenge 2: API Response State
Goal:
Design an API response type that can represent:
Loading
Success (with data)
Error (with error message)
✅ Your task:
Create a type ApiResponse<T> using discriminated union.
Write a function renderApiResponse(res: ApiResponse<string>) that returns what to show in the UI. */
type Loading = { kind: "loading" };
type Success<T> = { kind: "success"; data: T };
type Error2 = { kind: "error"; message: string };
type ApiResponse<T> = Loading | Success<T> | Error2;
function renderApiResponse<T>(res: ApiResponse<T>): string {
  switch (res.kind) {
    case "loading":
      return "Loading... please wait";
    case "success":
      return `Result: ${res.data}`;
    case "error":
      return `Error: ${res.message}`;
  }
}
// Test
console.log(renderApiResponse({ kind: "success", data: "Hello, Bernard!" }));
/**🧪 Challenge 3: Shape Inspector Upgrade
Goal:
Add a new shape called Rectangle to our existing shape logic.
✅ Your task:
Add a new type Rectangle with width and height.
Update the getArea(shape: Shape) function to handle it.
Example: */
type Shape =
  | {
      kind: "rectangle";
      width: number;
      height: number;
    }
  | {
      kind: "circle";
      radius: number;
    }
  | {
      kind: "square";
      sideLength: number;
    };

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}
console.log(
  getArea({ kind: "rectangle", width: 4, height: 5 })
  // → 20
);
