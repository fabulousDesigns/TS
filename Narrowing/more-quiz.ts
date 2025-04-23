/**🔥 Question 1: The never Type Challenge
 You have a union type of Shape = Circle | Square | Rectangle.
 How would you implement a function getArea(shape: Shape) that uses never for exhaustiveness checking?
 What would happen if you accidentally add a new shape like Triangle without updating getArea? How would TypeScript react? */
function assertionCheck(param: never): never {
  throw new Error("You have got some Error(s): " + param)
}
type Shape = {kind: "Circle", radius: number} | {kind: "Rectangle"; length: number; width: number;} | {kind: "Square"; length: number;} 
function getArea(shape: Shape){
    switch (shape.kind){
        case "Rectangle":
            return shape.length * shape.width;
        case "Circle":
          return Math.PI * shape.radius ** 2;
        case "Square":
            return shape.length ** 2;
        default:
           assertionCheck(shape)
    }
}
/**🔥 Question 2: Discriminated Unions Deep Dive
Imagine you have a User type with the roles "admin" | "editor" | "viewer".
Each user has different fields: Admin has permissions, Editor has posts, and Viewer has readOnly.
Create a function describeUser(user: User) that returns a string summary of the user, and make sure you apply exhaustiveness checking with never.
What edge cases could break your logic, and how would you handle them?
 */
type Admin = {kind: "Admin"; permissions: string[];}
type Editor = {kind: "Editor"; posts: string[];}
type Viewer = {kind: "Viewer"; readonly readOnly: boolean;}
type User = Admin | Editor | Viewer;
function describeUser(user: User){
  switch (user.kind) {
    case "Admin":
      return "Admin has permissions" + user.permissions.join(",")
    case "Editor":
      return "Editor has the following posts" + user.posts.join(",")
    case "Viewer":
      return user.readOnly ? "I'm just a chill viewer" : "I'm not a chill viewer"
    default:
      assertionCheck(user)
  }
}
/**🔥 Question 3: Type Predicate Mastery
You are given a union type Fish | Bird.
Implement a user-defined type guard function isFish(pet: Fish | Bird): pet is Fish.
Now, write a function describePet(pet: Fish | Bird) that uses isFish to provide different outputs depending on whether the pet is a Fish or Bird.
Explain why using the type guard pet is Fish works here. */

/**🔥 Question 4: API Response Handling
You have a union type ApiResponse = Loading | Success<T> | Error.
Write a function renderApiResponse(res: ApiResponse<string>) to render the state of the API.
How would you modify this function to handle multiple response types dynamically, like ApiResponse<number> or ApiResponse<MyCustomType>? What changes would you need to make to ensure the function is flexible and type-safe? */
interface Loading{
  status: boolean
}
interface Success<T>{
  data<T>: T
}
type ApiResponse = Loading | Success<T> | Error