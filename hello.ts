// industrial-grade general purpose greeter function
function greet(person: string, date: Date) {
    console.log(`Hello ${person} today is ${date}`);
}

greet("Bernard", new Date())

// Keep in mind, we don’t always have to write explicit type annotations. In many cases, TypeScript can even just infer (or “figure out”) the types for us even if we omit them.

let msg = "Hello there"