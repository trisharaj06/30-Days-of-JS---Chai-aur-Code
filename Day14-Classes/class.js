// Activity 1 - class definition
// Task 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings() {
    console.log(`your name is: ${this.name} and age is: ${this.age}`);
  }
}
const obj = new Person("Ram", 25);
obj.greetings();

// Task 2
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings1() {
    console.log(`your name is: ${this.name} and age is: ${this.age}`);
  }
  updateAge(newage) {
    this.age = newage;
  }
}
const obj2 = new Person1("shyam", 27);
console.log(obj2.age);
obj2.updateAge(30);
console.log(obj2.age);

// Activity 2 - Class Inheritance
// Task 3
class Student extends Person {
  constructor(name, age, stuId) {
    super(name, age);
    this.stuId = stuId;
  }
  getId() {
    return this.stuId;
  }
}
const stuObj = new Student("Rahul", 29, 101);
console.log("Id of student is: ", stuObj.getId());

// Task 4
class Student1 extends Person {
  constructor(name, age, stuId) {
    super(name, age);
    this.stuId = stuId;
  }
  getId() {
    return this.stuId;
  }
  greetings() {
    console.log(
      `your name is: ${this.name}, age is: ${this.age} and your ID is: ${this.stuId}`
    );
  }
}
const stuObj2 = new Student1("Geeta", 25, 101);
stuObj2.greetings();

// Activity 3 - static methods and properties
// Task 5
class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings() {
    console.log(`your name is: ${this.name} and age is: ${this.age}`);
  }
  static genericGreeting() {
    console.log("static method greetings!");
  }
}
Person3.genericGreeting();

// Task 6
class Student3 extends Person {
  static totalStudents = 0;
  constructor(name, age, stuId) {
    super(name, age);
    this.stuId = stuId;
    Student3.totalStudents++;
  }
  getId() {
    return this.stuId;
  }
  greetings() {
    console.log(
      `your name is: ${this.name}, age is: ${this.age} and your ID is: ${this.stuId}`
    );
  }
}
const s1 = new Student3("a", 10, 101);
const s2 = new Student3("b", 15, 102);
console.log(Student3.totalStudents);

// Activity 4 - Getters and setters
// Task 7
class Person4 {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  greetings() {
    console.log(`your First name is: ${this.fname} and age is: ${this.age}`);
  }
  static genericGreeting() {
    console.log("static method greetings!");
  }
  get fullName() {
    return "Full Name is: " + this.fname + " " + this.lname;
  }
}
const newobj = new Person4("Trisha", "Raj", 22);
console.log(newobj.fullName);

// Task 8
class Person5 {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  greetings() {
    console.log(`your name is: ${this.name} and age is: ${this.age}`);
  }
  static genericGreeting() {
    console.log("static method greetings!");
  }
  get fullName() {
    return "Full Name is: " + this.fname + " " + this.lname;
  }
  set updateName(name) {
    const [fn, ln] = name.split(" ");
    this.fname = fn;
    this.lname = ln;
  }
}
const obj5 = new Person5("raman", "kumar", 26);
obj5.updateName = "ram kumar";
console.log(obj5.fullName);

// Activity 5 - Private Fields
