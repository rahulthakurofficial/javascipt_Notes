// onject literals

// const mySym = Symbol("key1")

// const jsuser = {
//     name:"RAHUL",
//     "full name": "rahul thakur",
//     [mySym]:"mykey1",
//     age:18,
//     location:"jaipuir",
//     email:"hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
// console.log(jsuser.email)
// console.log(jsuser.name)
// console.log(jsuser["full name"])
// console.log(jsuser.age)
// console.log(jsuser[mySym])
// console.log(jsuser.lastLoginDays)

// jsuser.email = "rahulthakur.gmail.com"
// Object.freeze(jsuser)
// jsuser.email = "hitesh@gmail.com"
// console.log(jsuser)

const jsUser = {
    name: "John"
}
jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
