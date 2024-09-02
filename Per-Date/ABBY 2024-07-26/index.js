// =========================== SLIDE KE 3 ================================

// fungsi yang hanya akan mengembalikan tipe data primitif
/* PSEUDOCODE:
    1.buat function getPrimitive
    2. parameter arr
    3. buat variabel primitive untuk menampung hasil
    4. buat looping dari indeks 0 hingga indeks terakhir
    5. buat variable value untuk menampung arr saat ini
    6. buat if statement jika value sama dengan null, undefined, boolean, number, string, symbol maka push value ke primitive
    7. return primitive
*/

function getPrimitive(arr) {
  const primitive = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (
      typeof value === "boolean" ||
      typeof value === "number" ||
      typeof value === "string" ||
      typeof value === "symbol"
    ) {
      primitive.push(value);
    }
  }
  return primitive;
}

const arr = [1, "string", null, false, undefined, 2, "yes", "undefined"];
console.log(getPrimitive(arr));

// ======================================================================================

// fungsi dari array angka yang diberikan dan kembalikan angka terkecil kedua.
/* PSEUDOCODE: 
  1. buat function secondSmallest
  2. buat variabel firstSmallest dan secondSmallest
  3. buat looping dari indeks 0 hingga indeks terakhir
  4. buat if statement jika i lebih kecil dari firstSmallest,
  maka firstSmallest diperbarui dan nilai lama firstSmallest disimpan ke secondSmallest.
  5. Jika i lebih kecil dari secondSmallest tetapi tidak sama dengan firstSmallest,
  maka secondSmallest diperbarui.
  6. return secondSmallest
*/

function secondSmallest(arr) {
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== firstSmallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Angka terkecil kedua adalah: " + secondSmallest(arr1));

// ======================================================================================

// fungsi dari array tipe data campuran yang diberikan dan kembalikan jumlah semua angka tersebut.
/* PSEUDOCODE
  1. buat function mengembalikanAngka
  2. buat variabel angka
  3. buat looping dari indeks 0 hingga indeks terakhir
  4. buat if statement jika value sama dengan number, push value ke variabel angka
  5. return angka
*/

function mengembalikanAngka(arr) {
  const angka = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value === "number") {
      angka.push(value);
    }
  }
  return angka;
}

const arr2 = ["arya", 1, 2, "gusti"];
console.log(mengembalikanAngka(arr2));

// ======================================================================================

//  fungsi dari array angka di bawah yang akan mengembalikan jumlah nilai duplikat;
/* PSEUDOCODE:
  1. buat function duplikatValue
  2. parameters arr
  3. buat variabel hitung dan duplikat
  4. buat looping dari indeks 0 hingga indeks terakhir
  5. Buat if statement untuk memeriksa apakah elemen sudah muncul lebih dari sekali jika ya, tambahkan ke array duplikat.
  6. return duplikat
*/

function duplikatValue(arr) {
  const hitung = {};
  const duplikat = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (hitung[value]) {
      hitung[value]++;
    } else {
      hitung[value] = 1;
    }
  }

  for (const key in hitung) {
    if (hitung[key] > 1) {
      duplikat.push(key + " Dengan jumlah " + hitung[key]);
    }
  }

  return duplikat;
}

const arr3 = [1, 2, 1, 3, 1];
console.log("Duplikat value: " + duplikatValue(arr3));

// ======================================================================================

//  fungsi permainan batu, gunting, kertas yang akan mengembalikan 'Menang' atau 'Kalah’;
/* PSEUDOCODE: 
  1. buat function mainBGK
  2. buat variabel pilihan
  3. buat variabel pilihanKomputer
  4. buat if statement jika pilihanPlayer sama dengan pilihanKomputer
  5. return 'Seri! anda dan komputer sama-sama memilih ${pilihanPlayer}'
  6. buat else if statement jika pilihanPlayer 'Batu' dan pilihanKomputer 'Gunting' ||
  pilihanPlayer 'Kertas' dan pilihanKomputer sama dengan 'Batu' ||
  pilihanPlayer 'Gunting' dan pilihanKomputer sama dengan 'Kertas'
  7. return 'Menang! anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer}'
  8. jika tidak, return 'Kalah! anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer}'
*/

function mainBGK(pilihanPlayer) {
  const pilihan = ["Batu", "Gunting", "Kertas"];
  const pilihanKomputer = pilihan[Math.floor(Math.random() * 3)].toLowerCase();

  pilihanPlayer = pilihanPlayer.toLowerCase();
  console.log(pilihanPlayer);

  if (pilihanPlayer === pilihanKomputer) {
    return `Seri! anda dan komputer sama-sama memilih ${pilihanPlayer}`;
  } else if (
    (pilihanPlayer === "batu" && pilihanKomputer === "gunting") ||
    (pilihanPlayer === "gunting" && pilihanKomputer === "kertas") ||
    (pilihanPlayer === "kertas" && pilihanKomputer === "batu")
  ) {
    return `Menang! anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer}`;
  } else if (pilihanBGK(pilihanPlayer) === false) {
    return "Alamak cik pilihan icik salah nih, sila icik pilih batu, gunting, atau kertas";
  } else {
    return `Kalah! anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer}`;
  }
}

console.log(mainBGK("Jempol"));

function pilihanBGK(value) {
  const pilihan = ["batu", "gunting", "kertas"];

  for (let i = 0; i < pilihan.length; i++) {
    if (value === pilihan[i]) {
      return true;
    }
  }
  return false;
}
