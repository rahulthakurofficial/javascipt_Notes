const user = {
    username: "Rahul",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)





// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()



// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai ()




// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2,4))




// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(2,4))


// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(2,4))


const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(2,4))