const user ={
    username: "hitesh",
    loginCount: 8,
    SignedIn: true,

    getUserDetails: function () {
        // console.log("got user details from browser");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
        
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());



// constructor function
// Constructor ek special function hota hai jo kisi object ya class ka 
// naya instance banane ke time automatically call hota hai. Iska
//  kaam hota hai initial values set karna (jaise name, age, etc.) 
//  jab object create kiya jata hai.

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("Rahul", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);

