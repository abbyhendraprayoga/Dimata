let age = 28;

if (age >= 18) {
  console.log("Umur mencukupi");
} else {
  console.log("Umur tidak mencukupi");
}

let grade = "a";

if (grade === "a") {
  console.log("Excellent");
} else if (grade === "b") {
  console.log("Good");
} else if (grade === "c") {
  console.log("Fair");
} else {
  console.log("Remedial");
}

switch (grade) {
  case "a":
    console.log("Excellent");
    break;
  case "b":
    console.log("Good");
    break;
  case "c":
    console.log("Fair");
    break;
  default:
    console.log("Remedial");
}

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean(true));

console.log(!!0);
console.log(!!1);
console.log(!!"");
console.log(!!"Hello");
console.log(!!undefined);

console.log("1" === 1);
console.log("1" == 1);
console.log(1 === 1);
console.log(1 == 1);
console.log(0 === 0);
console.log(0 !== "1");

let car = "civic";

if (car === "CR-V" || car === "civic") {
  console.log("Ini buatan honda");
} else {
  console.log("Ini bukan buatan honda");
}

car === "civic"
  ? console.log("ini buatan honda")
  : console.log("ini bukan buatan honda");

// let i = 1;
// while (i < 10) {
//   console.log("Yang Ke" + i);
//   if (i === 5) {
//     break;
//   }
//   i++;
// }

let i = 0;
do {
  console.log(1);
  i++;
} while (i < 10);
