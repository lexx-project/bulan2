// 1.5 Scope, Hoisting, Closure
// STUDI KASUS
// 1. SCOPE
// 1. Buat variabel namaSekolah di global, lalu tampilkan di dalam fungsi.
const namaSekolah = "RUMAH IT INDONESIA";
function showNamaSekolah() {
  console.log(namaSekolah); // output: RUMAH IT INDONESIA
}
showNamaSekolah();

//2. Buat variabel namaGuru di dalam fungsi, coba tampilkan di luar fungsi.
function guru() {
  const namaGuru = "BHUDI";
}
// console.log(namaGuru); // output: namaGuru is not defined

//3. Buat perulangan for dengan let i, cek apakah i bisa dipakai di luar perulangan.
for (let i = 0; i < 5; i++) {}
// console.log(i); // output: i is not defined

// 4. Bandingkan var dan let di dalam perulangan (lihat bedanya).
for (var i = 0; i < 5; i++) {}
// console.log(i); // output: 5

for (let j = 0; j < 5; j++) {}
// console.log(j); // output: j is not defined

// 5.Buat dua fungsi berbeda, masing-masing punya variabel namaSiswa. Apakah mereka bisa saling ganggu?
function siswaA() {
  const namaSiswa = "A";
  console.log(namaSiswa);
}
function namaSiswa() {
  console.log("Dono");
}

function namaSiswa() {
  console.log("Siti");
}

namaSiswa(); // output: Siti

// 2. HOISTING
// 1. Coba tampilkan variabel var sebelum didefinisikan.
console.log(namaa); // output: undefined
var namaa = "Adi";

// 2. Coba tampilkan variabel let sebelum didefinisikan.
// console.log(umur); // output: Cannot access 'umur' before initialization
let umur = 15;

// 3. Coba tampilkan variabel const sebelum didefinisikan.
// console.log(tinggi); // output: Cannot access 'tinggi' before initialization
const tinggi = 170;

// 4. Buat fungsi normal di bawah, lalu panggil di atas.
showUmur(); // output: 17
function showUmur() {
  console.log(17); // output: 17
}

//  5. Buat fungsi versi panah (const halo = () => {}), panggil di atas. Apa bedanya?
// showNama(); // output: showNama is not a function
const showNamaa = () => {
  console.log("Adi"); // output: Adi
};

// 3. CLOSURE
// 1. Buat fungsi buatCounter() yang setiap dipanggil nambah 1.
function buatCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const counter = buatCounter();
console.log(counter()); // output: 1
console.log(counter()); // output: 2
console.log(counter()); // output: 3

// 2.Buat fungsi buatTabungan() yang bisa menyimpan uang.
function buatTabungan() {
  let saldo = 0;
  return function (jumlah) {
    saldo += jumlah;
    return saldo;
  };
}
const tabungan = buatTabungan();
console.log(tabungan(100)); // output: 100
console.log(tabungan(200)); // output: 300
console.log(tabungan(300)); // output: 600

//  3. Buat fungsi buatKeranjangBelanja() yang bisa menambahkan barang baru.
function buatKeranjangBelanja() {
  let barang = [];
  return function (item) {
    barang.push(item);
    return barang;
  };
}

const keranjangBelanja = buatKeranjangBelanja();
console.log(keranjangBelanja("apel")); // output: [ 'apel' ]
console.log(keranjangBelanja("jeruk")); // output: [ 'apel', 'jeruk' ]
console.log(keranjangBelanja("mangga")); // output: [ 'apel', 'jeruk', 'mangga' ]

// 4.Buat fungsi buatTimer() yang menyimpan detik setiap kali dipanggil.
function buatTimer() {
  let detik = 0;
  return function () {
    detik++;
    return detik;
  };
}
const timer = buatTimer();
console.log(timer()); // output: 1
console.log(timer()); // output: 2
console.log(timer()); // output: 3

// 5. Buat fungsi buatCatatanNama() yang bisa menambahkan nama siswa ke daftar.
function buatCatatanNama() {
  let daftarNama = [];
  return function (nama) {
    daftarNama.push(nama);
    return daftarNama;
  };
}
const catatanNama = buatCatatanNama();
console.log(catatanNama("Adi")); // output: [ 'Adi' ]
console.log(catatanNama("Budi")); // output: [ 'Adi', 'Budi']
console.log(catatanNama("Caca")); // output: [ 'Adi', 'Budi', 'Caca' ]

// LATIHAN MANDIRI
//  1. Buat variabel global nama, lalu tampilkan di fungsi.
const nama = "Adi";
function showNama() {
  console.log(nama); // output: Adi
}
showNama(); // output: Adi

// 2. Uji coba hoisting dengan var, let, dan const.
console.log(a); // output: undefined
var a = 10;

// console.log(b); // output: ReferenceError: Cannot access 'b' before initialization
let b = 20;

// console.log(c); // output: ReferenceError: Cannot access 'c' before initialization
const c = 30;

// 3. Buat fungsi closure pencatatanPengeluaran() untuk menyimpan total belanja harian.
function pencatatanPengeluaran() {
  let total = 0;
  return function (belanja) {
    total += belanja;
    return total;
  };
}
const pengeluaran = pencatatanPengeluaran();
console.log(pengeluaran(100)); // output: 100
console.log(pengeluaran(200)); // output: 300
console.log(pengeluaran(300)); // output: 600

// SOAL JAVASCRIPT BAB 1.1 – BAB 1.5
// SOAL TEORI DI SOALTEORI.md
// STUDI KASUS
// 1. Buat variabel nama, umur, statusPelajar. Tampilkan semuanya dengan console.log().
const naama = "Adi";
const uumur = 17;
const statusPelajar = true;
console.log(naama, uumur, statusPelajar); // output: Adi 17 true

//2. Buat variabel uangSaku = 50000, jajan = 15000, hitung sisa uangnya.
const uangSaku = 50000;
const jajan = 15000;
const sisaUang = uangSaku - jajan;
console.log(sisaUang); // output: 35000

// 3. Buat variabel sudahLogin = true. Cek apakah user sudah login, jika iya tampilkan "Selamat datang".
const sudahLogin = true;
if (sudahLogin) {
  console.log("Selamat datang"); // output: Selamat datang
}

//4. Buat variabel nilai = 75. Jika nilai ≥ 70 tampilkan "Lulus", jika tidak "Tidak Lulus".
const nilai = 75;
if (nilai >= 70) {
  console.log("Lulus"); // output: Lulus
} else {
  console.log("Tidak Lulus"); // output: Tidak Lulus
}

// 5. Coba deklarasikan const angka = 10, lalu ubah nilainya. Apa hasilnya?
const angka = 10;
// angka = 20; // output: TypeError: Assignment to constant variable.

// 6. Buat program cek ganjil/genap dari angka tertentu.
function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}
console.log(cekGanjilGenap(10)); // output: Genap
console.log(cekGanjilGenap(11)); // output: Ganjil

// 7. Buat program yang menampilkan nama bulan sesuai angka (1–12) menggunakan switch.
function showBulan(bulan) {
  switch (bulan) {
    case 1:
      return "Januari";
    case 2:
      return "Februari";
    case 3:
      return "Maret";
    case 4:
      return "April";
    case 5:
      return "Mei";
    case 6:
      return "Juni";
    case 7:
      return "Juli";
    case 8:
      return "Agustus";
    case 9:
      return "September";
    case 10:
      return "Oktober";
    case 11:
      return "November";
    case 12:
      return "Desember";
    default:
      return "Bulan Tidak Valid";
  }
}
console.log(showBulan(1)); // output: Januari
console.log(showBulan(2)); // output: Februari

// 8. Buat program untuk mencetak angka 1 sampai 20 dengan for.
for (let i = 1; i <= 20; i++) {
  console.log(i); // output: 1, 2, ..., 20
}

//9. Buat program untuk mencetak bilangan kelipatan 5 dari 1–50.
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i); // output: 5, 10, ..., 50
  }
}

//10. Buat program yang terus meminta input password hingga benar (while).
let password = "admin123";
let inputPassword = "";
while (inputPassword !== password) {
  inputPassword = prompt("Masukkan password: ");
  if (inputPassword === password) {
    console.log("Password Benar!"); // output: Password Benar!
  } else {
    console.log("Password Salah! Coba lagi."); // output: Password Salah! Coba lagi.
  }
}

// 11. Buat fungsi sapa(nama) yang menampilkan "Halo, [nama]!".
function sapa() {
  let nama = prompt("Masukkan nama: ");
  return `Halo, ${nama}!`;
}
alert(sapa()); // output: Halo, [nama]!

// 12. Buat fungsi hitungLuasSegitiga(alas, tinggi) yang mengembalikan hasilnya.
function hitungLuasSegitiga(alas, tinggi) {
  return (alas * tinggi) / 2;
}
console.log(hitungLuasSegitiga(5, 10)); // output: 25

// 13. Buat fungsi cekUmur(umur) → tampilkan "Dewasa" jika ≥ 18, "Anak-anak" jika < 18.
function cekUmur(umur) {
  if (umur >= 18) {
    return "Dewasa";
  } else {
    return "Anak-anak";
  }
}
console.log(cekUmur(18)); // output: Dewasa
console.log(cekUmur(17)); // output: Anak-anak

// 14. Buat fungsi ekspresi untuk menghitung diskon belanja.
const hitungDiskon = (totalBelanja) => {
  let diskon = 0;
  if (totalBelanja >= 100000) {
    diskon = 0.1;
  } else if (totalBelanja >= 50000) {
    diskon = 0.05;
  }
  return diskon * totalBelanja;
};
console.log(hitungDiskon(150000)); // output: 15000
console.log(hitungDiskon(50000)); // output: 2500
console.log(hitungDiskon(20000)); // output: 0

// 15. Buat arrow function untuk menghitung konversi suhu Celcius ke Fahrenheit.
const konversiSuhu = (celcius) => {
  return (celcius * 9) / 5 + 32;
};
console.log(konversiSuhu(0)); // output: 32
console.log(konversiSuhu(100)); // output: 212

// 16. Buat variabel sekolah di global, tampilkan di dalam fungsi.
const sekolah = "RUMAH IT INDONESIA";
function showSekolah() {
  console.log(sekolah); // output: RUMAH IT INDONESIA
}
showSekolah();

// 17. Buat variabel guru di dalam fungsi, coba tampilkan di luar fungsi. Apa yang terjadi?
function showGuru() {
  const guru = "Budi";
}
// console.log(guru); // output: guru is not defined

// 18. Coba tampilkan variabel var sebelum dideklarasikan. Apa hasilnya?
// console.log(testt); // output: testt is not defined

// 19. Buat fungsi buatCounter() yang tiap kali dipanggil menambah angka +1 (gunakan closure).
function buatCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counterr = buatCounter();
console.log(counterr()); // output: 1
console.log(counterr()); // output: 2
console.log(counterr()); // output: 3

// 20. Buat fungsi pencatatanPengeluaran() yang menyimpan total pengeluaran dengan closure.
function pencatatanPengeluaran() {
  let total = 0;
  return function (pengeluaran) {
    total += pengeluaran;
    return total;
  };
}
const pengeluarann = pencatatanPengeluaran();
console.log(pengeluarann(100)); // output: 100
console.log(pengeluarann(200)); // output: 300
console.log(pengeluarann(300000)); // output: 30300
