function myname() {
  console.log("R");
  console.log("A");
  console.log("H");
  console.log("U");
  console.log("L");
}
// myname()

// function addtwonumber(number1, number2){  // this () braces k under wala ko called parameters
//    console.log(number1+number2);
// }
// addtwonumber(3,null)  // this braces ka under wala ko called argument

function addtwonumber(number1, number2){  
   return number1 + number2
}
const result = addtwonumber(5,9)
// console.log("Result:",result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a username")
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())




// function loginUserMessage(username = "sam"){
//     if(username === undefined){
//         console.log("please enter a username")
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())


// function calculateCartPrice(...num1){
//    return num1
// }

// console.log(calculateCartPrice(200, 300, 500))


function calculateCartPrice(val1, val2, ...num1){
   return num1
}

// console.log(calculateCartPrice(200, 300, 500))

const user = {
    username: "Rahul",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

handleObject({
    username:"sam",
    price:233
})

const myNewArray = [200, 300, 100, 800]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));