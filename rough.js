// const arr = [1, 2, 3, 4]; // input
// output need [1,2]

// // output = arr.filter((data) => {
// //     return data <= 2;
// // })

// // or

// output = arr.filter((data, index) => {
//   return arr.indexOf(data) <= 1;
// });
// console.log(output);

// so from here we know that filter method can take upto 3 parameters
// result = arr.filter((value, index, array) => {
//   console.log(`values : ${value}  ,index : ${index} , array: ${array}`);
//   return value >= 10;
// });
// console.log(result);

// -----------------------------------------------------------------------------------------

// const arr = [[1, 2], [3, 4]]; // input
// output need [1,2,3,4]

// use flatten array concept
// console.log (arr.flat())

// --------------------------------------------------------------------------------------------

// const arr = [1, 1, 2, 2, 2, 3, 4, 4];
// // output need {1:1 , 2:3 , 3:1 , 4:2} frequency

// const result = arr.reduce((acc, value, index, array) => {
//   // logic to build -> here acc is accumulator which is the type which i take in last after function  , you have to build anything using this object
//   acc[value] = (acc[value] || 0) + 1;
//   return acc;
// }, {});
// console.log(result);

// --------------------------------------------------------------------------------------------

// lets roll on to more reduce problem to solve
// const arr = [1, 2, 3];
// Output: 6

// console.log(
//   arr.reduce((acc, value, index, array) => {
//     acc += value;
//     return acc;
//   })
// );
// // find max
// console.log(
//   arr.reduce((acc, value, index, array) => {
//     acc = Math.max(value, acc);
//     return acc;
//   }, 0)
// );

// const arr = [[1, 2], [3, 4], [5]];

// const flat = arr.reduce((acc, value) => {
//   return acc.concat(value);
// }, []);

// console.log(flat); // [1, 2, 3, 4, 5]

// group by property
// const arr = [
//   { type: "fruit", name: "apple" },
//   { type: "vegetable", name: "carrot" },
//   { type: "fruit", name: "banana" },
// ];

// // Output: {
// //   fruit: [{...}, {...}],
// //   vegetable: [{...}]
// // }

// console.log(
//   arr.reduce((acc, value) => {
//     const key = value.type;
//       acc[key] = acc[key] || [];
//       acc[key].push(value.name)
//     return acc;
//   }, {})
// );

// const arr = [10, 20, 30, 40];
// // Output: 25
// console.log(
//   arr.reduce((acc, value) => {
//     return acc += value / arr.length ;
//   }, 0)
// );

// const obj = {};

// obj["name"] = "brahma";
// obj["price"] = 10;

// console.log(obj); // { name: 'brahma', price: 10 }

// const arr = ['a', 'b', 'c'];
// // Output: { a: true, b: true, c: true }
// console.log(arr.reduce((acc, value) => {
//     acc[value] = true
//     return acc
// }, {}))

// Concatenate strings

// const arr = ["JS", "is", "cool"];
// // Output: 'JS is cool'

// console.log(
//   arr.reduce((acc, value) => {
//     return acc.concat(value + " ");
//   }, "").trim() // remove extra space
// );

// Custom map using reduce

// const arr = [1, 2, 3];
// // Output: [2, 4, 6] (double every item using reduce)

// console.log(
//   arr.reduce((acc, value) => {
//       const val = value * 2
//       acc.push(val)
//       return acc
//   }, [])
// );
// or
// console.log(
//   arr.reduce((acc, value) => {
//     acc.push(value * 2 );
//     return acc;
//   }, [])
// );

// reduce intermidiate complete
// --------------------------------------------------------------------------------------------
// reduce hard start

// Remove duplicates
// const arr = [1, 2, 2, 3, 1];
// Output: [1, 2, 3]
// console.log(
//   arr.reduce((acc, value) => {
//     // for uniqueness i need a set or what
//     // how can i do using reduce base
//     if (!acc.includes(value)) {
//       acc.push(value);
//     }
//     return acc;
//   }, [])
// );
// shortcut
// console.log(
//   arr.reduce((acc, value) => (acc.includes(value) ? acc : [...acc, value]), [])
// );

// Build lookup table by ID
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 2, name: "Bodfdb" },
// ];
// // // Output: { 1: {…}, 2: {…} }

// console.log(
//   users.reduce((acc, data) => {
//     acc[data.id] = acc[data.id] || [];
//     acc[data.id].push (data.name)
//     return acc;
//   }, {})
// );

// --------------------------------------------------------------------------------------------

// Chain of async calls
// (Advanced with promises — ask if you want example)

// Calculate word frequency from sentence

// const str = "hello world hello";
// const words = str.split(" "); //[ 'hello', 'world', 'hello' ]
// // console.log (words)
// console.log(
//   words.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
//   }, {})
// );
// or
// without using reduce function
// const str = "hello world hello";
// const arr = str.split("");  // like toCharArray()
// let word = "";
// const result = {};
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === ' ' || i === arr.length) {
//         if (word) {
//             result[word] = (result[word] || 0) + 1;
//             word = "";
//         }
//     } else {
//         word += arr[i];  // string append
//     }
// }
// console.log(result); // { hello: 2, world: 1 }

// Group by first letter

// const arr = ["apple", "banana", "avocado", "blueberry"];
// // // Output: { a: ['apple', 'avocado'], b: ['banana', 'blueberry'] }

// console.log(
//   arr.reduce((acc, val) => {
//     const v = val[0];
//     acc[v] = acc[v] || [];
//     // if (acc[v]) {
//     //   acc[v].push(val);
//     // } else {
//     //   acc[v] = [val];
//       // } // mannual way to do

//       acc[v].append(val)
//           return acc;
//   }, {})
// );

// --------------------------------------------------------------------------------------------

// 4. Check if All Elements Are Unique

// // Input: [1, 2, 3, 4] → true
// // Input: [1, 2, 3, 1] → false
//  Hint: Compare length with new Set(arr).size.

// const arr = [1, 2, 3, 4 ,1 ];
// const set = new Set();
// for (let i = 0; i < arr.length; i++) {
//   set.add(arr[i]);
// }
// if (set.size < arr.length) {
//   console.log(false);
// } else console.log(true);

// --------------------------------------------------------------------------------------------

// 5. Remove Falsy Values from Array

// // Input: [0, false, '', 1, 2, null, undefined]
// // Output: [1, 2]
//  One-liner: arr.filter(Boolean)
// const arr = [0, false, "", 1, 2, null, undefined];

// console.log(
//   arr.filter((val, index) => {
//     return val >= 1;
//   })
// );
// or
// console.log (arr.filter(Boolean)) // here boolean

// --------------------------------------------------------------------------------------------

// 6. Group By Property

// // Input: [{age:20}, {age:21}, {age:20}]
// // Output: {20: [...], 21: [...]}
//  Trick: Use reduce() to group.

// const arr = [{ age: 20 }, { age: 21 }, { age: 20 }];
// console.log(arr.reduce((acc, val) => {
//     const key = val.age
//     acc[key] = acc[key] || []
//     acc[key].push(val)
//     return acc
// }, {}))

// --------------------------------------------------------------------------------------------

// before solving some problem let just quick solve map problem

// 1. Double the Numbers
// Input: [1, 2, 3, 4]
// Output: [2, 4, 6, 8]
// const arr = [1, 2, 3, 4];
// console.log(
//   arr.map((val, idx) => {
//     return 2 * val;
//   })
// );
// --------------------------------------------------------------------------------------------

// 2. Convert Numbers to Strings
// const arr = [1, 2, 3]
// console.log(arr.map((val) => {
//     return val.toString()
// }));
// Output: ["1", "2", "3"]
// or
// console.log (arr.map(String))

// --------------------------------------------------------------------------------------------

// 3. Extract a Property from Array of Objects
// Input:
// const arr = [
//   { name: "Alice", age: 21 },
//   { name: "Bob", age: 25 }
// ]
// Output: ["Alice", "Bob"]
// console.log(arr.reduce((acc, val) => {
//     const key = val.name
//     acc.push(key)
//     return acc
// }, []));

// --------------------------------------------------------------------------------------------

// 4.  Mark All as Completed
// Input:
// const arr = [
//   { task: "Code", done: false },
//   { task: "Eat", done: false },
// ];
// const updated = arr.map((item) => ({
//   ...item,
//   done: true,
// }));
// console.log(updated);

// --------------------------------------------------------------------------------------------

// 5.Append Index to Each String
// const arr =  ["apple", "banana", "mango"]
// Output: ["apple-0", "banana-1", "mango-2"]
// let count = 0;
// console.log(arr.map((val) => {
//     let value = val
//     let final = value + `-${count}`
//     count+=1
//     return final
// }));
// // or
// console.log(arr.map ((val , ind )=> { return val +`-${ind}` }));

// --------------------------------------------------------------------------------------------

// 6. Square Root Each Element
// const arr = [1, 4, 9, 16]
// // Output: [1, 2, 3, 4]
// console.log(arr.map((val) => {
//     return Math.sqrt (val)
// }));

// --------------------------------------------------------------------------------------------

// 7. Capitalize First Letter
// Input: ["hello", "world"]
// Output: ["Hello", "World"]
// --------------------------------------------------------------------------------------------

// 8.  Convert Boolean to 0/1
// Input: [true, false, true]
// Output: [1, 0, 1]
// --------------------------------------------------------------------------------------------

// 9.  Generate Custom Object
// const arr = ["JS", "Python"]
// Output:

// [
//   { lang: "JS", length: 2 },
//   { lang: "Python", length: 6 }
// ]
// console.log(arr.map((val , ind) => {
//     return {Lang : `${arr[ind]}` , Length: `${arr[ind].length}`}
// }));

// --------------------------------------------------------------------------------------------

// 10. Remove HTML Tags
// const arr = ["<b>hello</b>", "<i>world</i>"]
//  Output: ["hello", "world"]
// console.log(arr.map((val , ind ) => {
//     return arr[ind].replace(/<[^>]+>/g, "");
// }));
// hint: use .replace(/<[^>]+>/g, "") inside map
// --------------------------------------------------------------------------------------------

//  Bonus Challenge:
//  Build your own .map() polyfill without using map()

// --------------------------------------------------------------------------------------------

// 7. Find Most Frequent Element

// const arr = [1, 3, 3, 3, 2, 2]
// // Output: 3

// const map = new Map();
// for (let i = 0; i < arr.length; i++) {
//   const val = arr[i];
//   const count = map.get(val) || 0;
//   map.set(val, count + 1);
// }
// console.log(map);
// let maxFreq = 0;
// let mostFreqElement = null;
// for (const [key, value] of map.entries()) {
//   if (value > maxFreq) {
//     maxFreq = value;
//     mostFreqElement = key;
//   }
// }
// console.log("Most frequent element:", mostFreqElement);
// or
// //Hint: Frequency map + reduce for max.
// const arr = [1, 3, 3, 3, 2, 2];
// const freqMap = arr.reduce((acc, val) => {
//   acc[val] = (acc[val] || 0) + 1;
//   return acc;
// }, {});
// let maxFreq = 0;
// let mostFreqElem = null;
// for (const key in freqMap) {
//   if (freqMap[key] > maxFreq) {
//     maxFreq = freqMap[key];
//     mostFreqElem = key;
//   }
// }
// console.log("Most Frequent Element:", Number(mostFreqElem)); //  3

// --------------------------------------------------------------------------------------------

// 8. Find Sum of All Nested Values

// const arr = [1, [2, [3]], 4];
// // // Output: 10
// // Use: Recursive flat(Infinity) + reduce.\
// console.log(arr.flat().flat()); // it go until 2 level so for many level use infinity inside flat
// console.log(
//   arr.flat(Infinity).reduce((acc, val) => {
//     return acc + val;
//   }, 0)
// );

// --------------------------------------------------------------------------------------------

// 9. Filter Unique Objects by Key
// const arr = [{id:1}, {id:2}, {id:1}]
// // // Output: [{id:1}, {id:2}]
// // Trick: Track seen ids in Set.
// let set = new Set()
// console.log(arr.reduce((acc, val) => {
//     if (!set.has(val.id)) {
//         acc.push(val)
//         set.add(val.id);
//     }
//     return acc
// }, []));

// --------------------------------------------------------------------------------------------

// 10. Sort by Frequency Then Value

// const arr = [4, 4, 1, 2, 2, 2, 3];
// // Output: [2, 4, 1, 3]
//  Step:
// Count freq
// Sort by freq desc, value asc

// const map = new Map();
// for (let i = 0; i < arr.length; i++) {
//   const freq = map.get(arr[i]) || 0;
//   map.set(arr[i], freq + 1);
// }
// console.log(map);
// // now do sort by value
// const sortedMap = new Map(
//     [...map.entries()]
//         .sort(
//             (a, b) =>
//                 b[1] - a[1]));
// console.log(sortedMap);

// --------------------------------------------------------------------------------------------

// 11. Get All Substrings of a String

// const str = "abc"
// const arr = []
// Output: ['a', 'ab', 'abc', 'b', 'bc', 'c']
// // Nested loop or flatMap trick
// for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//         let newStr = str.substring(i, j+1)
//         arr.push(newStr);
//     }
// }
// console.log(arr);

// --------------------------------------------------------------------------------------------

// 12. Map + Filter Combo

// // Input: [1, 2, 3, 4]
// // Output: Square only even numbers → [4, 16]
// One-liner: arr.filter(x => x%2 === 0).map(x => x*x)
// --------------------------------------------------------------------------------------------

// 13. Custom Implementation: Array.prototype.myFilter()
// Make your own version of .filter() like a real dev:

// --------------------------------------------------------------------------------------------

// Array.prototype.myFilter = function (cb) {
//   const res = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) res.push(this[i]);
//   }
//   return res;
// }
//  Bonus "Sucker Punch" Question:
// Difference Between filter() and map()
//

// filter() → removes

// map() → transforms

// Combine both when needed, but don’t mutate original array.
