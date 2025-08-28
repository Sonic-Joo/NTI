let student = {
  name: "Yousef",
  age: 21,
  grade: "B",
  isGraduated: false,
};

console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);

student.grade = "A";

console.log(Object.keys(student));
console.log(Object.values(student));

student.email = "yousefshohber0123@gmail.com";

delete student.isGraduated;

console.log(student);
