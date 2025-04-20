/**Challenge 1: Identifying Implicit any
Identify where TypeScript would implicitly use the any type in this code (assuming noImplicitAny is off): */
function processData(data) {
  // on this param data tsc may infer it as any
  return data.length;
}

function calculateTotal(items, tax) {
  // on this params also: items & tax will be inferred as any by tsc
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total * (1 + tax);
}

let result; // and finally this variable result will be inferred as any
let values = JSON.parse('{"x": 10, "y": 20}');
/**Challenge 2: Fixing Type Issues
Fix the type issues in this code by adding appropriate type annotations: */
function formatName(user: { firstName: string; lastName: string }) {
  return user.firstName + " " + user.lastName;
}
type point = {
  x: number;
  y: number;
};
function calculateDistance(point1: point, point2: point) {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function logMessage(message: string, timestamp: Date) {
  console.log(`[${timestamp}] ${message}`);
}
/**Challenge 3: Type Inference
What types will TypeScript infer for these variables? (Be specific!) */
let name = "Alice"; // string
let id = 123; // number
let isLoggedIn = false; // boolean
let mixedArray = [1, "two", 3, "four"]; // (string | number)[]
let userData = { id: 1, name: "Bob", roles: ["admin", "user"] }; //{id:number,name:string, roles: string[]}
let getValue = () => 42; // () => number
let items = [
  { name: "Book", price: 10.99 },
  { name: "Pen", price: 1.99 },
]; // { name: string; price: number }[]

/**Challenge 4: Understanding any
Explain what's wrong with using any in each of these scenarios and how you would fix it: */
// Scenario 1 (Help needed)
let apiResponse: any = getDataFromAPI();
let username = apiResponse.user.name;
// Scenario 2 (Help needed)
function processList(items: any) {
  return items.map((item) => item.value * 2);
}
// Scenario 3 (Help needed)
let userData: any = localStorage.getItem("user");
let userLocation = userData.address.city;

// Challenge 5: Practical Application
// Rewrite this JavaScript function with proper TypeScript annotations:

interface SortableItem {
  [key: string]: any;  // Or be more specific with properties
}

function filterAndSortItems<T extends SortableItem>(
  items: T[],
  filterFn: (item: T) => boolean,
  sortKey: string,
  ascending: boolean
): T[] {
  const filtered = items.filter(filterFn);
  
  filtered.sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];
    
    if (valueA < valueB) return ascending ? -1 : 1;
    if (valueA > valueB) return ascending ? 1 : -1;
    return 0;
  });
  
  return filtered;
}
