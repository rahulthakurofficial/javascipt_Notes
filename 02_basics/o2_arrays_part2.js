const marvel_heros = ["thor", "ironman", "spiderman"]
const dc = ["abhi", "rahul", "kansh"]

// marvel_heros.push(dc)
// console.log(marvel_heros);

// const allHero = marvel_heros.concat(dc)
// console.log(allHero)


// const all_new_heros = [...marvel_heros, ...dc]
// console.log(all_new_heros)


// const another_array = [1,2,3,[4,5],6,7,[8,9,[2,4]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

const arr = [1, 2, 3];
console.log(Array.isArray(arr));  // true

const obj = { name: "test" };
console.log(Array.isArray(obj));  // false


const arr1 = Array.of(5);         // [5]
const arr2 = Array(5);            // [empty × 5] (5 empty slots)

console.log(arr1);  // [5]
console.log(arr2);  // [ <5 empty items> ]

const str = "hello";
const arr3 = Array.from(str);
console.log(arr3);  // ["h", "e", "l", "l", "o"]


const mySet = new Set([1, 2, 3]);
const arr4 = Array.from(mySet);
console.log(arr4);  // [1, 2, 3]


const nums = Array.from([1, 2, 3], x => x * 2);
console.log(nums);  // [2, 4, 6]


function test() {
  const args = Array.from(arguments);
  console.log(args);
}
test(10, 20, 30);  // [10, 20, 30]
