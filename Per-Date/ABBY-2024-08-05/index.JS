let students = ["Sastra", "Junha", "De Oka", "Yastu", "Abby", "Zerina"];
let studentUpper = students.map((student) => {
  return student.toUpperCase();
});
console.log(studentUpper);

let value = 1;
console.log(value);

function myFunction(cb) {
  cb();
}

myFunction(() => {
  value = 10;
});

console.log(value);
