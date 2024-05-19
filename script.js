// Classes OOP

/*
    1. Create a class called "Animal"

    2. Allow us to pass in 2 properties/fields to the
       Animal constructor which get set to the instance:
       - type (String)
       - name (String)

    3. Create two instances of the Animal class of your
       choice passing in different "type" and "name" for each

    4. Print out both animal instances

    5. Change the "name" of one of your animals and print it
       out again.

    
*/

// class Animal {
//   constructor(type, name) {
//     this.type = type;
//     this.name = name;
//   }
// }

// const monkey = new Animal("monkey", "Abu");
// console.log(monkey);
// const fish = new Animal("fish", "Nemo");
// console.log(fish);

// monkey.name = "Oscar";
// console.log(monkey);

// Exercise 1

/*
    1. Create a class called "Student"

    2. Allow us to pass in 3 properties/fields to the
       Student constructor which get set to the instance:
       - name (String)
       - major (String)
       - grades (Array of Numbers)

    3. Create a method on "Student" called "addGrade" that
       has one paramater "grade". It will simply push the
       "grade" given on to the "grades" Array.

    4. Create a method on "Student" called "gpa" that will
       return the AVERAGE grade of the student's "grades"

    5. Create an instance of the Student class like so:
       const eva = new Student("Eva", "Arts", [95, 75, 83])

    4. Print out the "eva" instance

    6. Use the "gpa" method on "eva" to print out their average
       grade (Should be 84.33)
*/

class Student {
  constructor(name, major, grades) {
    this.name = name;
    this.major = major;
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  gpa() {
    let averageGrade = 0;
    for (const grade of this.grades) {
      averageGrade += grade;
    }
    return averageGrade / this.grades.length;
  }
}

const eva = new Student("Eva", "Arts", [95, 75, 83]);
console.log(eva);

console.log(eva.gpa());
eva.addGrade(89);
console.log(eva.gpa());
