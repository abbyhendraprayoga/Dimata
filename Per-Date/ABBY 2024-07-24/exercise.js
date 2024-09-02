// 1. Mengubah Celcius ke Fahrenheit
/*
    pseudo code:
    1. deklarasikan var c
    2. deklarasikan var f
    3. deklarasikan var f = (var c * 9) / 5 + 32
    4. print Jika suhu dalam celcius ${c}, maka suhu dalam fahrenheitnya adalah ${f}
*/

let c = 29;
let f = (c * 9) / 5 + 32;
console.log(
  `Jika suhu dalam celcius ${c}, maka suhu dalam fahrenheitnya adalah ${f}`
);

// 2. Periksa Apakah Suatu Bilangan Genap Atau Ganjil
/*
    pseudo code:
    1. Deklarasikan var number
    2. Deklarasikan var bilangan
    3. Deklarasikan var bilangan = var number % 2
    4. Print bilangan === 0
    ? `angka ${number} adalah angka GENAP`
    : `angka ${number} adalah angka GANJIL` */

let number = 7;
let bilangan = number % 2;
console.log(
  bilangan === 0
    ? `angka ${number} adalah angka GENAP`
    : `angka ${number} adalah angka GANJIL`
);

// 3. Menentukan bilangan prima
/*
    pseudo code:
    1. deklarasikan var number1
    2. deklarasikan var prima
    3. deklarasikan var prima = true
    4. deklarasikan var i
    5. deklarasikan var i = 2
    6. while (i < number1) {
    7. if (number1 % i === 0) {
    8. prima = false;
    9. break;
    10. }
    11. i++;
    12. }
    13. print angka ${number1} adalah angka ${prima ? "PRIMA" : "BUKAN PRIMA
*/

let number1 = 6;
let prima = true;
let i = 2;
while (i < number1) {
  if (number1 % i === 0) {
    prima = false;
    break;
  }
  i++;
}
console.log(`angka ${number1} adalah angka ${prima ? "PRIMA" : "BUKAN PRIMA"}`);

// 4. Menentukan jumlah bilangan 1 sampai N
/*
    pseudo code:
    1. deklarasi var N
    2. deklarasi var sum
    3. sum = (N * (N + 1)) / 2;
    4. print Jumlah bilangan 1 sampai ${N} adalah ${sum}
*/

let N = 5;
let sum = (N * (N + 1)) / 2;
console.log(`Jumlah bilangan 1 sampai ${N} adalah ${sum}`);

// 5. Mencari faktorial suatu bilangan
/*
    pseudo code:
    1. deklarasi var N1
    2. deklarasi var faktorial
    3. faktorial = 1
    4. if (N1 < 0) {
    5. print Faktorial tidak didefinisikan untuk bilangan negatif.
    6. } else {
    7. for (let i = 1; i <= N1; i++) {
    8. faktorial *= i;
    9. }
    10. print Faktorial dari ${N1} adalah: ${faktorial}
    11. }
*/

let N1 = 1;
let faktorial = 1;

if (N1 < 0) {
  console.log("Faktorial tidak didefinisikan untuk bilangan negatif.");
} else {
  for (let i = 1; i <= N1; i++) {
    faktorial *= i;
  }
  console.log(`Faktorial dari  ${N1}  adalah:  ${faktorial}`);
}

// 6. Cetak angka N fibonacci pertama
/* pseudo code:
    1. deklarasi var n2
    2. deklarasi var fibonacci
    3. fibonacci = [0, 1]
    4. for (let i = 2; i < N2; i++) {
    5. fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
    6. }
    7. print fibonacci pertama ${N2} adalah ${fibonacci}
*/

let n2 = 10;
let fibonacci = [0, 1];

for (let i = 2; i < n2; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

console.log(`fibonacci pertama ${n2} adalah ${fibonacci}`);
