console.log("Homework-Object");

//Exercise/Homework

//Task
//Create 3 classes: Academy, Student and Subject.

//Their structure should look like this:

//Academy

//name - string
//students - array of Students
//subjects - array of Subjects
//start - Date when it starts
//end - Date when it ends
//numberOfClasses - number of subjects multipled by 10, not settable*
//printStudents - method that prints all students in console
//printSubjects - method that prints all subjects in console

class Academy {
  constructor(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
  }

  get numberOfClases() {
    return this.subjects.length * 10;
  }

  printStudents() {
    this.students.forEach((student) => {
      console.log(student);
    });
  }
  printSubjects() {
    this.subjects.forEach((subject) => {
      console.log(subject);
    });
  }
}

const firstAcademy = new Academy(
  "SEDC",
  ["Ana", "Marko", "Bojan"],
  ["JavaScript", "CSS", "HTML"],
  "25.01.2023",
  "27.12.2024"
);

//console.log(firstAcademy);
//console.log(firstAcademy.printStudents());
//console.log(firstAcademy.printSubjects());

//Subject
//title - string
//numberOfClasses - default 10, not settable*
//isElective - boolean
//academy - Academy object
//students - array of Students
//overrideClasses - method that accepts a number and rewrites the numberOfClasses property with that number.
//The number can't be smaller than 3.

class Subject {
  constructor(title, numberOfClasses = 10, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = numberOfClasses;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
  }

  overrideClasses(number) {
    if (number > 3) {
      return (this.numberOfClasses = number);
    }
  }
}

const firstSubject = new Subject("JavaScript", 20, false, firstAcademy, [
  "Bojan",
  "Marko",
  "Ana",
]);

//console.log(firstSubject);
//firstSubject.overrideClasses(12);
// console.log(firstSubject);

//Student
//firstName - string
//lastName - string
//age - number
//completedSubjects - emptyArray as default, not settable*
//academy - null as default, not settable*
//currentSubject - null as default, not settable*
//startAcademy - method that accepts Academy object that it sets to the Academy property of the student
//startSubject - method that accepts Subject object and adds it to the currentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

class Student {
  constructor(
    firstName,
    lastName,
    age,
    completedSubject = [],
    academy = null,
    currentSubject = null
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubject = completedSubject;
    this.academy = academy;
    this.currentSubject = currentSubject;
  }

  startAcademy(academyObejct) {
    return (
      (this.academy = academyObejct) &&
      academyObejct.students.push(this.firstName)
    );
  }

  startSubject(subjectObject) {
    if (this.currentSubject) {
      return this.completedSubject.push(this.currentSubject);
    }
    if (!this.currentSubject) {
      return (this.currentSubject = subjectObject);
    }
    if (
      this.academy &&
      firstAcademy.subjects.some((subject) => {
        return subject === subjectObject.title;
      })
    ) {
      return firstSubject.students.push(this.firstName);
    }
  }
}

const firstStudent = new Student("Igor", "Jovanovskki", 19, "CSS");

//console.log(firstAcademy);

//firstStudent.startAcademy(firstAcademy);

//console.log(firstAcademy);

//console.log(firstSubject);

//firstStudent.startSubject(firstSubject);

//console.log(firstSubject);

//console.log(firstStudent);

//console.log(firstAcademy.students);

//Site console.log mi se staveni vo komentar za sekoja klasa
