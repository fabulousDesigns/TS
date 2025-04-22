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
            return "Admin with permissions: ".concat(user.permissions);
        case "editor":
            return "Editor with permissions: ".concat(user.posts);
        case "viewer":
            return "Viewer ".concat(user.readOnly);
        default:
            return "N/A";
    }
}
console.log(describeUser({ role: "admin", permissions: ["ban-users", "delete-posts"] }));
