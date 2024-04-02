/*
példa a class-ra és instructor-re!!!!!

különbég
-> 
- itt nincsenenek mezők 
- meg van határozva egy bizonyos érték a constructor-ben 
 */

class Robot {
    constructor(name = "Robbie", model = "X-1000") {
      this.name = name;
      this.model = model;
      this.battery = 100;
    }
  
    greet() {
      return `Hello, I'm ${this.name}, model ${this.model}.`;
    }
  
    charge() {
      this.battery = 100;
      return `${this.name} is fully charged!`;
    }
  
    doTask(task) {
      if (this.battery >= 10) {
        this.battery -= 10;
        return `${this.name} completes task: ${task}`;
      } else {
        return `${this.name} is too low on battery to do the task! Please recharge.`;
      }
    }
  }
  
  // Creating a new Robot instance with custom parameters
  const customRobot = new Robot("Bender", "BDR-9000");
  
  console.log(customRobot.greet()); // Output: Hello, I'm Bender, model BDR-9000.
  
  console.log(customRobot.doTask("Clean the house")); // Output: Bender completes task: Clean the house.
  
  console.log(customRobot.charge()); // Output: Bender is fully charged!

/*
Class Pattern: Introduced in ECMAScript 6 (ES6), the class syntax provides a more familiar and concise way 
of defining objects and their behavior in JavaScript. It uses the class keyword to define a blueprint for creating objects,
 and methods are defined directly within the class using regular function syntax.
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
/*
Function Constructor Pattern: In JavaScript, functions can also be used as constructors to create objects. 
These functions are typically named with an initial capital letter to indicate that they are intended to be used with the new keyword. 
Inside the constructor function, properties and methods are assigned to the newly created object using the this keyword.
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  
  this.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
/*
Inheritance:

Class Pattern: Classes in JavaScript support inheritance through the use of the extends keyword. 
This allows one class to inherit properties and methods from another class, creating a hierarchical relationship between them.
*/
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  
  study() {
    return `${this.name} is studying hard for the exams!`;
  }
}
/*
Function Constructor Pattern: Achieving inheritance with function constructors typically involves setting the prototype
of the child constructor to an instance of the parent constructor.
*/
function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  return `${this.name} is studying hard for the exams!`;
};
/*
this Binding:

Class Pattern: In class methods, the value of this is automatically bound to the instance of the class,
making it easier to access instance properties and methods.

Function Constructor Pattern: In function constructors, the value of this needs to be explicitly bound within methods or properties,
often using techniques like .bind(this) or storing this in a variable (var self = this;).

Overall, while both patterns can be used to achieve similar results, the class pattern introduced in ES6 offers a more concise
and intuitive syntax, as well as built-in support for inheritance. 
However, the function constructor pattern still sees use, especially in legacy codebases or where broader 
compatibility with older JavaScript engines is required.
*/