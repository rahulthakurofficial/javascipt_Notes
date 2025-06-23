let a = 300;
if (true) {
  let a = 10; // global scope
  const b = 20;
  console.log("INNER:", a);
} // ye curley braces ko hi scopes kaha jata hai

console.log(a);

if (true) {
  var d = 10; // wea re not using the var kyu ki var jo local scope se bahar ki taraf jaa rha hai , block scope
  const e = 20;
  console.log("INNER:", d);
}

console.log(d);

// nested scope

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}
one();



// if else scope 

if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++ INTRESTING  +++++++++++++++++++++++
// console.log(addone(5))
// function  addone(num){
//     return num + 1
// }

console.log(addone(5));

function addone(num) {
    return num + 1;
}


console.log(addtwo(3))
const addtwo = function(num){
    return num + 2
}
// console.log(addtwo(3)) 