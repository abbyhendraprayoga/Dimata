// Object

let objectPertama = {};

let objectKedua = new Object();

console.log(objectPertama);
console.log(objectKedua);

let student = {
  "first name": "Ngurah",
};
student.age = 17;
student["last name"] = "Abby";
console.log(student);
console.log(student.age);
console.log(student["first name"]);
console.log(student["last name"]);

let student2 = {
  "first name": "Ngurah",
  grade: "A",
  sayHi() {
    return this["first name"];
  },
  sayGrade() {
    return this.grade;
  },
};

// delete student2["first name"];
// delete student2.grade;

console.log(student2);
console.log(student2["first name"]);
console.log(student2.sayHi(), student2.sayGrade());

let sidakarya = {
  name: "Rumah Sidakarya",
  gang: "Wirasatya II",
};

console.log(sidakarya.name, sidakarya.gang);

let student3 = {
  province: "Bali",
  address: {
    city: "Denpasar",
    street: "Dimata",
  },
};

console.log(student3.province);
console.log(student3.address?.city);
console.log(student3.address?.street);

for (let x in student3) {
  console.log(x);
  console.log(x, student3[x]);
}

console.log(student2.sayHi());
console.log(student2.sayGrade());
