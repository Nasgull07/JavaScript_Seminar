import { students } from "./0-data.js";

//Map es lo mismo que un forEach pero retorna un nuevo array con los resultados de la función

// An array of JSON objects with students fullnames
let studentNames = students.map(function (student) {
  return {
     fullname: `${student.name} ${student.lastname}`,
  }
})
console.log(studentNames);

studentNames = students.map(student => `${student.name} ${student.lastname}` )


// An array of JSON objects with students fullnames using arrow function
const studentNames2 = students.map((student) => {
  return {
    fullname: `${student.name} ${student.lastname}`,
  };
});

// An array of JSON objects with students doubled age using arrow function
let doubleAges = students.map((student) => student.age).map((age) => age * 2);
console.log(doubleAges);
doubleAges = students.map((student) => student.age*2);

// An array of student JSON objects adding a course
const courseProgramming = students.map((student) => ({
    ...student,
    course: "Programming",
}));
console.log(courseProgramming);

