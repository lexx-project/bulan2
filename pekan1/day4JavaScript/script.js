// TUGAS FORM LOGIN

let registeredEmail = "";
let registeredPassword = "";

function register() {
  let chance = 3;
  let repeatReg = true;
  while (repeatReg === true) {
    let email = prompt("Enter your email");
    let password = prompt("Enter your password");
    let confirmPassword = prompt("Confirm your password");
    if (password === confirmPassword) {
      alert("Registration successful");
      registeredEmail = email;
      registeredPassword = password;
      repeatReg = false;
    } else {
      alert("Passwords do not match");
      chance--;
      if (chance > 0) {
        alert("You have " + chance + " attempts left");
      }
      if (chance === 0) {
        alert(
          "You have reached the maximum number of attempts \n try again later"
        );
        repeatReg = false;
      }
    }
  }
}

function login() {
  if (!registeredEmail || !registeredPassword) {
    alert("Please register first!");
    return;
  }
  let repeatLog = true;
  while (repeatLog === true) {
    let loginEmail = prompt("Enter your email");
    let loginPassword = prompt("Enter your password");
    if (
      loginEmail === registeredEmail &&
      loginPassword === registeredPassword
    ) {
      alert("Login successful");
      repeatLog = false;
    } else {
      alert("nIvalid email or password");
    }
  }
}

// TUGAS BILANGAN GANJIL GENAP
while (true) {
  let angka = prompt("Masukkan angka : ");
  if (!angka) {
    let confirmExit = confirm("Apakah Anda yakin ingin keluar?");
    if (confirmExit) {
      break;
    } else {
      continue;
    }
  } else if (angka % 2 === 0) {
    alert("Angka " + angka + " adalah bilangan Genap");
  } else {
    alert("Angka " + angka + " adalah bilangan Ganjil");
  }
}

// 1.3
// 2. LOOPING FOR
// 1. Cetak angka 1 sampai 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// 2.Cetak semua bilangan genap dari 1 sampai 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. Hitung jumlah dari 1 sampai 10
let total = 0;
for (let i = 1; i <= 10; i++) {
  total += i;
}
// console.log(total);

// 4. Buat tabel perkalian 5
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + 5 * i);
}

// 5. Cetak bintang membentuk segitiga
let hasil = ""; // String untuk menampung hasil cetak

// Perulangan luar untuk mengontrol baris
for (let i = 0; i < 5; i++) {
  // Perulangan dalam pertama untuk spasi (menjaga perataan tengah)
  for (let j = 0; j < 5 - i - 1; j++) {
    hasil += " ";
  }

  // Perulangan dalam kedua untuk bintang
  for (let k = 0; k < 2 * i + 1; k++) {
    hasil += "*";
  }

  // Pindah baris setelah satu baris bintang selesai dicetak
  hasil += "\n";
}

console.log(hasil); // Tampilkan hasilnya di konsol}

// LOOPING WHILE
// 1. Terus Minta Password Sampai Benar
let password = "";
while (password !== "admin1234") {
  password = prompt("Masukkan password : ");
  if (password !== "admin1234") {
    alert("Password salah, coba lagi");
  }
}
alert("Password benar");
// 2. Jalan terus sampai bensin habis
let bensin = 100;
while (bensin > 0) {
  bensin -= 10;
  console.log("Bensin : " + bensin + "%");
}
console.log("Bensin habis");

// 3. Ulangi lempar dadu sampai dapat angka 6
let angka;
while (angka !== 6) {
  angka = Math.floor(Math.random() * 6) + 1;
  console.log("Angka : " + angka);
}

// 4. Terus tambah uang tabungan sampai cukup untuk beli barang.
let tabungan = 0;
const hargaBarang = 100000;
while (tabungan < hargaBarang) {
  tabungan += 10000;
  console.log("Tabungan : " + tabungan);
}

// 5. Ulangi proses input sampai user mengetik "stop".
let input;
while (input !== "stop") {
  input = prompt("Masukkan kata : ");
  console.log("Kata : " + input);
}

// FUNGSI DEKLARATIF
// 1. Fungsi Menyapa User
function sapa() {
  let nama = prompt("Masukkan Nama Anda : ");
  alert("Selamat Datang MR " + nama);
}

// 2. Fungsi Untuk Menghitung Luas Persegi
function luasPersegi(sisi) {
  return sisi * sisi;
}

// 3. Fungsi Untuk Menampilkan BioData
function showBioData(nama, umur, kota, hobi, email, noHp) {
  console.log(`Nama: ${nama}`);
  console.log(`Umur: ${umur}`);
  console.log(`Kota: ${kota}`);
  console.log(`Hobi: ${hobi}`);
  console.log(`Email: ${email}`);
  console.log(`No HP: ${noHp}`);
}

// 4. Fungsi untuk mengecek bilangan ganjil atau genap
function ganjilGenap(number) {
  if (number % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

// 5.Fungsi untuk mencetak daftar menu
function cetakMenu(namaMenu, hargaMenu, stokMenu) {
  console.log(`Nama Menu: ${namaMenu}`);
  console.log(`Harga Menu: ${hargaMenu}`);
  console.log(`Stok Menu: ${stokMenu}`);
}

// PANGGIL FUNNGSI DEKLARATIF
sapa();
luasPersegi(5);
showBioData(
  "Budi01Gaming",
  20,
  "Jakarta",
  "Menonton Film",
  "budi@gmail.com",
  "08123456789"
);
console.log(ganjilGenap(7));
cetakMenu("Nasi Goreng", 15000, 10);

// FUNGSI EKSPRESI
// 1.Fungsi Hitung Luas Segitiga
let luasSegitiga = function (alas, tinggi) {
  return (alas * tinggi) / 2;
};

// 2.Fungsi hitung keliling lingkaran
let kelilingLingkaran = function (jariJari) {
  return 2 * 3.14 * jariJari;
};

// 3.Fungs i Menambahkan 2 angka
let penjumlahan = function (a, b) {
  return a + b;
};

// 4.Fungsi Mengubah Huruf Menjadi Kapital
let kapital = function (kata) {
  return kata.toUpperCase();
};

// 5.Fungsi Menghitung Diskon Belanja
let diskonBelanja = function (harga, diskon) {
  return harga - (harga * diskon) / 100;
};

// MEMANGGIL FUNGSI EKSPRESI
console.log(luasSegitiga(5, 10));
console.log(kelilingLingkaran(7));
console.log(penjumlahan(5, 10));
console.log(kapital("hello"));
console.log(diskonBelanja(100000, 10));

// ARROW FUNCTION
// 1. Fungsi Mengurangi Angka
let kurang = (a, b) => a - b;

//2. Fungsi Menghitung Pajak
let hitungPajak = (pendapatan, tarif = 0.12) => pendapatan * tarif;

//3. Fungsi Menampilkan Salam
let salam = (nama) => `Halo, ${nama}!`;

// 4. Fungsi Menghitung Umur Dari Lahir
let hitungUmur = (tahunLahir) => 2025 - tahunLahir;

// 5.Fungsi Mengonversi Suhu Celcius Ke Fahrenhit
let celciusToFahrenhit = (celcius) => (celcius * 9) / 5 + 32;

// PANGGIL ARROW FUNCTION
console.log(kurang(10, 5));
console.log(hitungPajak(1000000));
console.log(salam("Budi"));
console.log(hitungUmur(2000));
console.log(celciusToFahrenhit(25));

// PARAMETER DAN RETURN
// 1. Fungsi menghitung nilai rata rata
function nilaiRataRata(nilai1, nilai2, nilai3) {
  let rataRata = (nilai1 + nilai2 + nilai3) / 3;
  return rataRata;
}

// 2.Fungsi Menggabungkan 2 String
function gabungString(string1, string2) {
  return string1 + " " + string2;
}

// 3. Fungsi mencari angka terbesar dari 2 angka
function angkaTerbesar(angka1, angka2) {
  if (angka1 > angka2) {
    return angka1;
  } else {
    return angka2;
  }
}

// 4. Fungsi Menghitung Luas Lingkaran
function luasLingkaran(jariJari) {
  return 3.14 * jariJari * jariJari;
}

// 5. Fungsi menghtung gaji bersih setelah potongan
function gajiBersih(gajiPokok, potongan) {
  return gajiPokok - potongan;
}

// PANGGIL PARAMETER DAN RETURN
console.log(nilaiRataRata(75, 80, 90));
console.log(gabungString("Hello", "World"));
console.log(angkaTerbesar(10, 5));
console.log(luasLingkaran(7));
console.log(gajiBersih(5000000, 500000));
