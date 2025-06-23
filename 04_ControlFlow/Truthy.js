// const userEmail = []
const userEmail = ""
// const userEmail = rahul@gmail.com


if (userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}

//falsy values: false, 0, -0, BigInt 0n, "",null, undefined, NaN
// truthy values: "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0){
    console.log("array is empty");
}



// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? undefined
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

// Ternary operator
// condition ? true : false

