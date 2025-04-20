var person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
var product = {
    id: 123,
    name: "Headphones",
    price: 79.99,
    tags: ["electronics", "audio"],
};
var config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    debug: false,
};
function updateProfile(user) {
    // Calculate years until retirement (assuming retirement age is 65)
    var yearsToRetirement;
    if (user.age !== undefined) {
        yearsToRetirement = 65 - user.age;
    }
    // Create greeting using bio
    var greeting = "Hello ".concat(user.name, ", ").concat(user.bio);
    return {
        id: user.id,
        yearsToRetirement: yearsToRetirement,
        greeting: greeting,
    };
}
// Test with different users
var user1 = { id: 1, name: "Alex" };
var user2 = { id: 2, name: "Taylor", bio: "Web developer" };
var user3 = { id: 3, name: "Jordan", age: 45 };
updateProfile(user1);
updateProfile(user2);
updateProfile(user3);
