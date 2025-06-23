// if

// const temperature = 41

// if (temperature === 40 ){
//     console.log("less then 50");
// }else{
//     console.log("greater then 50")
// }
// console.log("Executed");






// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);



// const balance = 1000
// if(balance < 500){
//     console.log("less then 500");
// }else if (balance < 750){
//     console.log("less then 750");
// }else if (balance < 900){
//     console.log("less then 750");
// }else {
//     console.log("less then 1200");
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoggle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard ){
    console.log("Allow to buy course");
}
if (loggedInFromEmail || loggedInFromGoggle){
    console.log("User logged in");
}