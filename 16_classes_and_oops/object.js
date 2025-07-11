function multiplyBy5(num) {
    return num*5
}
multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);





function  CreateUser(username, score) {
    this.username = username;
    this.score = score;
}

CreateUser.prototype.increment = function () {
    this.score++;
}

CreateUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}

// Now create users using `new`
const chai = new CreateUser("chai", 25);
const tea = new CreateUser("tea", 250);

// Call the methods
chai.increment();   // score becomes 26
chai.printMe();     // Output: price is 26

