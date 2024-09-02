let user = {
  name: "Ngurah",
  age: 17,
};

user.isAdmin = true;
console.log("Hello " + user.name);

// 1. Write a JavaScript program to list the properties of a JavaScript object.

let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(Object.keys(student));
console.log(student.name);
