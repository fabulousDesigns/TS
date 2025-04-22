// 🧙🏾‍♂️ LEVEL 1: What is a Type Predicate?
// pet is Fish
// This is called a type predicate, and you can only use it in the return type of a function.
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
// isFish is your custom type guard.
// When you call isFish(pet) inside an if block, TypeScript narrows the type of pet to Fish inside that block.
/**🧠 UNDER THE HOOD: What’s Happening?
When you write this: */
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

/**Discriminated Unions = Smart way to let TypeScript know what kind of object you're dealing with based on a special property (called the "discriminant") — usually a kind, type, or status field. */
