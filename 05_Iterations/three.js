// for of loop

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
    
// }




// let greeting = "hello world!"

// for (const i of greeting) {
// console.log(`Each char id ${i}`);

// }


//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);
for (const [key, value] of map ){
    console.log(key, ':-', value);
    
}