/*
===========================================
JAVASCRIPT ARRAY METHODS 
===========================================

===========================================
*/

// ===========================================
// 1. ARRAY SEARCHING & INDEXING METHODS
// ===========================================

// indexOf(value) - Returns first index of value, -1 if not found
// lastIndexOf(value) - Returns last index of value, -1 if not found
// includes(value) - Returns true if array contains value

const searchArray = [1, 2, 3, 2, 4, 5];
console.log("indexOf(2):", searchArray.indexOf(2)); // Output: 1
console.log("lastIndexOf(2):", searchArray.lastIndexOf(2)); // Output: 3
console.log("includes(3):", searchArray.includes(3)); // Output: true

// ===========================================
// 2. ARRAY EXTRACTION & SLICING METHODS
// ===========================================

// slice(start, end) - Returns new array from start to end (non-destructive)
// splice(start, deleteCount, ...items) - Modifies array by removing/replacing elements

const extractArray = [1, 2, 3, 4, 5];
console.log("slice(1,3):", extractArray.slice(1, 3)); // Output: [2, 3]

const spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(1, 2, "a", "b"); // Remove 2 elements, add 'a','b'
console.log("splice result:", spliceArray); // Output: [1, 'a', 'b', 4, 5]

// ===========================================
// 3. ARRAY MODIFICATION METHODS (MUTATING)
// ===========================================

// push(value) - Adds element to end, returns new length
// pop() - Removes last element, returns removed element
// shift() - Removes first element, returns removed element
// unshift(value) - Adds element to beginning, returns new length

const modifyArray = [1, 2, 3];
modifyArray.push(4); // [1, 2, 3, 4]
modifyArray.pop(); // [1, 2, 3]
modifyArray.shift(); // [2, 3]
modifyArray.unshift(1); // [1, 2, 3]

// ===========================================
// 4. ARRAY TRANSFORMATION METHODS
// ===========================================

// reverse() - Reverses array in place
// sort() - Sorts array in place
// fill(value, start, end) - Fills array with value

const transformArray = [3, 1, 4, 1, 5];
transformArray.reverse(); // [5, 1, 4, 1, 3]
transformArray.sort(); // [1, 1, 3, 4, 5]

const fillArray = [1, 2, 3, 4, 5];
fillArray.fill(0, 2, 4); // [1, 2, 0, 0, 5]

// ===========================================
// 5. ARRAY ITERATION METHODS (NON-MUTATING)
// ===========================================

const numbers = [1, 2, 3, 4, 5];

// map(callback) - Creates new array with transformed elements
const doubled = numbers.map((item) => item * 2);
console.log("map:", doubled); // Output: [2, 4, 6, 8, 10]

// filter(callback) - Creates new array with filtered elements
const greaterThan2 = numbers.filter((item) => item > 2);
console.log("filter:", greaterThan2); // Output: [3, 4, 5]

// forEach(callback) - Executes function for each element
numbers.forEach((item) => console.log("forEach:", item)); // Output: 1, 2, 3, 4, 5

// ===========================================
// 6. ARRAY REDUCTION & TESTING METHODS
// ===========================================

// reduce(callback, initialValue) - Reduces array to single value
const sum = numbers.reduce((acc, item) => acc + item, 0);
console.log("reduce sum:", sum); // Output: 15

// every(callback) - Tests if ALL elements pass condition
const allPositive = numbers.every((item) => item > 0);
console.log("every > 0:", allPositive); // Output: true

// some(callback) - Tests if AT LEAST ONE element passes condition
const hasLarge = numbers.some((item) => item > 4);
console.log("some > 4:", hasLarge); // Output: true

// ===========================================
// 7. ARRAY FINDING METHODS
// ===========================================

// find(callback) - Returns first element that passes test
const firstLarge = numbers.find((item) => item > 3);
console.log("find > 3:", firstLarge); // Output: 4

// findIndex(callback) - Returns index of first element that passes test
const firstLargeIndex = numbers.findIndex((item) => item > 3);
console.log("findIndex > 3:", firstLargeIndex); // Output: 3

// findLast(callback) - Returns last element that passes test
const lastEven = numbers.findLast((item) => item % 2 === 0);
console.log("findLast even:", lastEven); // Output: 4

// findLastIndex(callback) - Returns index of last element that passes test
const lastEvenIndex = numbers.findLastIndex((item) => item % 2 === 0);
console.log("findLastIndex even:", lastEvenIndex); // Output: 3

// ===========================================
// 8. ARRAY FLATTENING & JOINING METHODS
// ===========================================

// flat(depth) - Flattens nested arrays
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log("flat:", nestedArray.flat()); // Output: [1, 2, 3, 4, [5, 6]]
console.log("flat(2):", nestedArray.flat(2)); // Output: [1, 2, 3, 4, 5, 6]

// flatMap(callback) - Maps then flattens result
const flatMapped = numbers.flatMap((item) => [item, item * 2]);
console.log("flatMap:", flatMapped); // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// join(separator) - Joins elements into string
const joined = numbers.join(" -> ");
console.log("join:", joined); // Output: "1 -> 2 -> 3 -> 4 -> 5"

// ===========================================
// 9. ARRAY ITERATOR METHODS
// ===========================================

// keys() - Returns iterator of array indices
const keys = Array.from(numbers.keys());
console.log("keys:", keys); // Output: [0, 1, 2, 3, 4]

// values() - Returns iterator of array values
const values = Array.from(numbers.values());
console.log("values:", values); // Output: [1, 2, 3, 4, 5]

// entries() - Returns iterator of [index, value] pairs
const entries = Array.from(numbers.entries());
console.log("entries:", entries); // Output: [[0,1], [1,2], [2,3], [3,4], [4,5]]

// ===========================================
// 10. ARRAY UTILITY METHODS
// ===========================================

// copyWithin(target, start, end) - Copies elements within array
const copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(0, 3, 5); // Copy elements 3,4 to positions 0,1
console.log("copyWithin:", copyArray); // Output: [4, 5, 3, 4, 5]

// toString() - Converts array to string
const stringArray = [1, 2, 3];
console.log("toString:", stringArray.toString()); // Output: "1,2,3"

// toLocaleString() - Converts array to localized string
const localeArray = [1000, 2000, 3000];
console.log("toLocaleString:", localeArray.toLocaleString()); // Output: "1,000,2,000,3,000"

// at(index) - Returns element at index (supports negative indexing)
const atArray = [10, 20, 30, 40, 50];
console.log("at(2):", atArray.at(2)); // Output: 30
console.log("at(-1):", atArray.at(-1)); // Output: 50

// with(index, value) - Returns new array with element replaced (non-mutating)
const withArray = [1, 2, 3, 4, 5];
const newArray = withArray.with(2, 99); // Replace index 2 with 99
console.log("with result:", newArray); // Output: [1, 2, 99, 4, 5]
console.log("original unchanged:", withArray); // Output: [1, 2, 3, 4, 5]

// ===========================================
// 11. STATIC ARRAY METHODS
// ===========================================

// Array.from(iterable) - Creates array from iterable
const fromArray = Array.from("hello");
console.log("Array.from:", fromArray); // Output: ['h', 'e', 'l', 'l', 'o']

// Array.of(...values) - Creates array from arguments
const ofArray = Array.of(1, 2, 3);
console.log("Array.of:", ofArray); // Output: [1, 2, 3]

// Array.isArray(value) - Checks if value is array
console.log("Array.isArray:", Array.isArray(numbers)); // Output: true

// ===========================================
// 12. NUMBER UTILITY METHODS
// ===========================================

// Number.isFinite(value) - Checks if value is finite number
console.log("isFinite(10):", Number.isFinite(10)); // Output: true
console.log("isFinite(Infinity):", Number.isFinite(Infinity)); // Output: false

// Number.isNaN(value) - Checks if value is NaN
console.log("isNaN(NaN):", Number.isNaN(NaN)); // Output: true
console.log("isNaN(10):", Number.isNaN(10)); // Output: false

// Number.isInteger(value) - Checks if value is integer
console.log("isInteger(10):", Number.isInteger(10)); // Output: true
console.log("isInteger(10.5):", Number.isInteger(10.5)); // Output: false

// Number.isSafeInteger(value) - Checks if value is safe integer
console.log("isSafeInteger:", Number.isSafeInteger(9007199254740991)); // Output: true

// ===========================================
// QUICK REFERENCE SUMMARY
// ===========================================

/*
MUTATING METHODS (change original array):
- push(), pop(), shift(), unshift()
- reverse(), sort(), splice()
- fill(), copyWithin()

NON-MUTATING METHODS (return new array/result):
- slice(), map(), filter(), reduce()
- find(), findIndex(), findLast()
- flat(), flatMap(), join()
- toString(), toLocaleString()

SEARCHING METHODS:
- indexOf(), lastIndexOf(), includes()
- find(), findIndex(), findLast(), findLastIndex()

TESTING METHODS:
- every(), some()

ITERATION METHODS:
- forEach(), map(), filter(), reduce()
- keys(), values(), entries()

FLATTENING METHODS:
- flat(), flatMap()

STATIC METHODS:
- Array.from(), Array.of(), Array.isArray()
- Number.isFinite(), Number.isNaN(), Number.isInteger()
*/

console.log("\n=== ALL METHODS TESTED SUCCESSFULLY ===");




// ===========================================
// author : brahmagithubrit  
// ===========================================
