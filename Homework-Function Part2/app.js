console.log("Function Part 2 is working");

const STUDENTS_URL =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

const fetchStudents = (studentsApi) => {
  fetch(STUDENTS_URL)
    .then((res) => res.json())
    .then((data) => {
      // Find all students with an average grade higher than 3:

      const studentsWithAverageGardeHigherThanThree = data.filter(
        (student) => student.averageGrade > 3
      );

      console.log(
        "All students with an average grade higher than 3:",
        studentsWithAverageGardeHigherThanThree
      );

      // Find all female student names with an average grade of 5:

      const femaleStudentsNameWithAverageGardeOfFive = data.filter(
        (student) => student.gender === "Female" && student.averageGrade >= 5
      );

      console.log(
        "All female student names with an average grade of 5:",
        femaleStudentsNameWithAverageGardeOfFive
      );

      // Find all male student full names who live in Skopje and are over 18 years old:

      const maleStudentsSkopjeOverEighteen = data
        .filter((student) => student.city === "Skopje" && student.age > 18)
        .map((student) => `${student.firstName} ${student.lastName}`);

      console.log(
        "All male student full names who live in Skopje and are over 18 years old:",
        maleStudentsSkopjeOverEighteen
      );

      // Find the average grades of all female students over the age of 24:

      const femaleStudentsGradesOverTwentyFour = data
        .filter((student) => student.age > 24 && student.gender === "Female")
        .map((student) => `${student.averageGrade}`);

      console.log(
        "The average grades of all female students over the age of 24:",
        femaleStudentsGradesOverTwentyFour
      );

      // Find all male students with a name starting with B and average grade over 2:

      const maleStudentsNameWithB = data.filter(
        (student) =>
          student.firstName[0] === "B" &&
          student.averageGrade > 2 &&
          student.gender === "Male"
      );

      console.log(
        "All male students with a name starting with B and average grade over 2:",
        maleStudentsNameWithB
      );
    });
};

fetchStudents(STUDENTS_URL);
