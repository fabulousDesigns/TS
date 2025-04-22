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
function describeUser(user) {
    switch (user.role) {
        case "admin":
            return "Admin with permissions: ".concat(user.permissions.join(", "));
        case "editor":
            return "Editor with posts: ".concat(user.posts.join(", "));
        case "viewer":
            return "Viewer ".concat(user.readOnly);
        default:
            return assertNever(user);
    }
}
console.log(describeUser({ role: "admin", permissions: ["ban-users", "delete-posts"] }));
function renderApiResponse(res) {
    switch (res.kind) {
        case "loading":
            return "Loading... please wait";
        case "success":
            return "Result: ".concat(res.data);
        case "error":
            return "Error: ".concat(res.message);
        default:
            return assertNever(res);
    }
}
// Test
console.log(renderApiResponse({ kind: "success", data: "Hello, Bernard!" }));
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return (1 / 2) * shape.base * shape.height;
        /**What’s happening here?
            You're saying:
            "Yo TypeScript, I’ve handled all valid shapes. So if anything slips through here — that’s a bug. Fail me at compile time!"
            💥 That’s exhaustiveness checking. The power move that makes TypeScript go full strict mode 🧠⚔️ */
        default:
            return assertNever(shape);
    }
}
console.log(getArea({ kind: "rectangle", width: 4, height: 5 })
// → 20
);
function assertNever(x) {
    throw new Error("Unhandled case: ".concat(JSON.stringify(x)));
}
