// JavaScript mein this ka matlab hota hai "jis object se function call ho raha hai.

const student = {
  name: "Rahul",
  printName: function () {
    console.log(this.name);
  }
};

student.printName(); // Output: Rahul
// Yahan this.name ka matlab hai student.name



// what is the use of call and bind 
// Problem aati hai jab function ko alag call karo:

const student = {
  name: "Rahul",
  printName: function () {
    console.log(this.name);
  }
};

const print = student.printName;
print(); // ❌ Output: undefined
// Kyun? Kyunki print ko object ke bina call kiya gaya, to this ka reference chala gaya.


// Solution: call aur bind
// call() — directly function call karo, with new this
const student = {
  name: "Rahul",
};

function sayHello() {
  console.log("Hello, " + this.name);
}

sayHello.call(student); // Output: Hello, Rahul
// call ke andar hum manually bolte hain ki this kis object ko refer kare.

// bind() — new function banata hai, jisme this fix hota hai

const student = {
  name: "Rahul",
};

function sayHello() {
  console.log("Hello, " + this.name);
}

const boundFunction = sayHello.bind(student);

boundFunction(); // Output: Hello, Rahul
// bind ek copy banata hai function ki jisme this set hota hai. Us copy ko baad mein kabhi bhi call kar sakte ho.



const person = {
  name: "Amit"
};

function greet() {
  console.log("Hi " + this.name);
}

greet();                // Hi undefined (kyunki this kuch nahi hai)
greet.call(person);     // Hi Amit (call se this set kiya)
const g = greet.bind(person);
g();                    // Hi Amit (bind se function bana jo this fix kar ke chala)





// Method	Kya karta hai?
// call()	Function turant call karta hai aur this set karta hai
// bind()	Function ka copy banata hai jisme this fix hota hai, aur baad mein call kar sakte ho