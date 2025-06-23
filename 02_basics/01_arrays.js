// const myArr = [0,1,2,3,4,5]
// console.log(myArr[1]);

 const myarr2 = new Array(1,2,3,4)
//console.log(myarr2[2])

// myarr2.push(6)
// myarr2.push(7)
// myarr2.pop()

// myarr2.unshift(9)
// myarr2.shift()

// console.log(myarr2.includes(9))

// const newArr = myarr2.join()
//console.log(myarr2);


// slice , splice

// console.log("A", myarr2)
// const myn1 = myarr2.slice(1, 3)

// console.log(myn1);
// console.log("B", myarr2);

// const myn2 = myarr2.splice(1,3)
// console.log("c",myarr2)
// console.log(myn2);

const fruits = ["apple", "banana", "cherry", "date"];
const sliced = fruits.slice(1, 3);

console.log(sliced);      // ["banana", "cherry"]
console.log(fruits);      // ["apple", "banana", "cherry", "date"]  (unchanged)



//const fruits = ["apple", "banana", "cherry", "date"];
const spliced = fruits.splice(1, 2, "blueberry", "kiwi");

console.log(spliced);     // ["banana", "cherry"] (removed elements)
console.log(fruits);      // ["apple", "blueberry", "kiwi", "date"] (modified)



