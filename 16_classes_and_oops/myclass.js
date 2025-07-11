class Student {
  constructor(name, rollNumber) {
    // Yeh constructor hai
    this.name = name;
    this.rollNumber = rollNumber;
  }

  showDetails() {
    console.log(`Name: ${this.name}, Roll No: ${this.rollNumber}`);
  }
}

// 👇 Object bana rahe hain "new" se
const student1 = new Student("Rahul", 101);
const student2 = new Student("Priya", 102);

// 👇 Ab inka data dekhte hain
student1.showDetails(); // Name: Rahul, Roll No: 101
student2.showDetails(); // Name: Priya, Roll No: 102
