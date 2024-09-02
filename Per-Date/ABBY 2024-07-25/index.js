// ===========================================================================
// Function membuat triangle
/*  pseucode :

    1. buat sebuah function triangle
    2. parameter height
    3. perulangan
    4. perulangan dalam perulangan
    5. output
    6. return

    contoh:
    
    */
// ===========================================================================

function Triangle(height) {
  let num = 1;
  for (let i = 1; i <= height; i++) {
    let line = [];
    for (let j = 0; j < i; j++) {
      line.push(num.toString().padStart(2, "0"));
      num++;
    }
    console.log(line.join(" "));
  }
}

Triangle(2);

// ===========================================================
// 2. Function log 0 sampai N
/*  pseucode :  

    1. buat sebuah function log
    2. parameter n
    3. perulangan
    4. perulangan dalam perulangan
    5. output
    6. return

    contoh:
*/

function log(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, "TIGA LIMA");
    } else if (i % 3 === 0) {
      console.log(i, "TIGA");
    } else if (i % 5 === 0) {
      console.log(i, "LIMA");
    } else {
      console.log(i);
    }
  }
}

log(10);

// ===========================================================
// 3. Function BMI
/*  pseucode: 

    1. buat sebuah function BMI
    2. parameter weight
    3. parameter heightCm
    4. konversi hegihtCm menjadi heightM
    5. rumus BMI
    6. logika pengkategorian
    7. return
*/

function BMI(weight, heightCm) {
  let heightM = heightCm / 100;
  let result = weight / (heightM * heightM);
  if (result < 18.5) {
    return "Berat Kurang";
  } else if (result >= 18.5 && result <= 24.9) {
    return "Ideal";
  } else if (result >= 25 && result <= 29.9) {
    return "Kelebihan Berat Badan";
  } else if (result >= 30 && result <= 34.9) {
    return "Sangat Kelebihan Berat Badan";
  } else if (result > 34.9) {
    return "Obesitas";
  }
}

console.log(BMI(55, 168));

// ===========================================================
//  4. Function menghapus angka ganjil dalam array dan mengembalikan array yang berisi angka genap
/* 
    1. buat sebuah fungsi removeOdd
    2. parameter arrayOfNumber
    3. inisialisasi result sebagai array kosong
    4. untuk setiap elemen i dalam arrayOfNumber Lakukan
    4. jika elemen i adalah angka genap (elemen i % 2 == 0) 
    5. tambahkan elemen i ke array result
    6. return array result

*/

function removeOdd(arrayOfNumber) {
  let result = [];
  for (let i = 0; i < arrayOfNumber.length; i++) {
    if (arrayOfNumber[i] % 2 === 0) {
      result.push(arrayOfNumber[i]);
    }
  }
  return result;
}

console.log(removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ===========================================================
// 5. Function mengubah string menjadi array of string
/* 
    pseucode:

    1. buat sebuah function stringToArray
    2. parameter  string
    3. inisialisasi result sebagai array kosong
    5. perulangan dari 0 hingga string.length
    6. tambahkan karakter pada index ke i ke array result
    7. kembalikan ke array result
*/

function stringToArray(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    result.push(string[i]);
  }
  return result;
}

console.log(stringToArray("ABCD"));
