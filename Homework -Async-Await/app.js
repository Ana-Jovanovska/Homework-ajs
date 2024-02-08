console.log("Async-Await is working !");

//Async/HOF Exercise / Homework
//Requirements
//Using only async/await syntax fetch the students from this endpoing "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"

//After you have the data display the following informations in the HTML

//ONLY USE HIGHER ORDER FUNCTIONS
//USE AYSNC/AWAIT
//DO NOT MUTATE OR CHANGE OR SORT THE ORIGINAL DATA
//Show the average age and average grade of all students combined
//Show the number of students that are over 60 and the number of students that are under 30 years old
//Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above
//Find the student named Arthur Cadore and display all of his information
//Find the oldest and youngest student and display their information on the screen
//Show a list of the full names of students that have a last name longer than 8 characters
//Show a list of the top 10 best students by average grade
//Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)

// Fetching data

const STUDENT_URL =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

const fetchStudents = async () => {
  try {
    const response = await fetch(STUDENT_URL);
    const data = await response.json();
    renderStudent();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchStudents();

const renderStudent = (studentsInfo) => {
  //Show average age:
  const averageAgeEl = document.querySelector("#averageAge");
  const averageAgeAllStudent = studentsInfo
    .map((student) => {
      return student.averageAgeEl;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);
  const resultOne = averageAgeAllStudent / studentsInfo.lenght;
  averageAgeEl.innerHTML += `<p>Average Age: ${resultOne}</p>`;
  //Show average grade :
  const averageGradeEl = document.querySelector("#averageGrade");
  const averageGradeAllStudent = studentsInfo
    .map((student) => {
      return student.averageGradeEl;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);
  const resultTwo = averageGradeAllStudent / studentsInfo.lenght;
  averageGradeEl.innerHTML += `<p>Average Grade: ${resultTwo}</p>`;

  //Student Over 60:
  const studentOverSixtyEl = document.querySelector("#studentOverSixty");
  const studentOverSixtyYears = studentsInfo.filter((student) => {
    return student.age > 60;
  });
  studentOverSixtyEl.innerHTML += `<p>Student over 60 years old:${studentOverSixtyYears} </p>`;
};

renderStudent();
