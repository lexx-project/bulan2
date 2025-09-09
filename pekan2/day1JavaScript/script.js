// LATIHAN MANDIRI
// 1.
const namaTeman = ["Rifa", "Rafi", "Indra", "Andi", "Rian"];
// 2.
namaTeman.push("Dono");
// 3.
namaTeman.unshift("Riko");
// 4.
namaTeman.splice(1, 0, "Risa");
// 5.
console.log(namaTeman.length);

// STUDI KASUS
// 1.
let buah = ["apel", "jeruk", "mangga", "pisang", "semangka"];
buah.push("anggur");
buah.unshift("jambu");
// 2.
let daftarBelanja = ["nasi", "gula", "kopi", "telor"];
daftarBelanja.push("susu");
// 3.
let hewanPeliharaan = ["anjing", "kucing", "burung"];
hewanPeliharaan.unshift("ikan");
// 4.
let filmFavorit = ["The Dark Knight", "The Godfather", "The Lord of the Rings"];
filmFavorit.push("Avengers: Endgame");
// 5.
let angka = [1, 2, 3, 4, 5];
angka.unshift(0);

// 6.
let mainan = ["kelereng", "layangan", "gangsing", "yoyo"];
mainan.pop();
// 7.
let baju = ["kaos", "kemeja", "celana", "topi", "batik"];
baju.shift();
// 8.
let makanan = ["nasi", "soto", "mie", "bakso", "sate"];
makanan.pop();
// 9.
let tugasSekolah = ["matematika", "bahasa", "fisika", "kimia", "biologi"];
tugasSekolah.shift();
//10.
let daftarAntrian = [
  "Mak Mak",
  "Bapak Bapak",
  "Teteh Teteh",
  "Kakak Kakak",
  "Mbak Mbak",
];
daftarAntrian.shift();

// 11.
console.log("Jumlah buah : " + buah.length);
// 12.
console.log("Jumlah nama teman : " + namaTeman.length);
// 13.
console.log("Jumlah angka : " + angka.length);
// 14.
console.log("Jumlah daftar belanja : " + daftarBelanja.length);
// 15.
console.log("Jumlah hewan peliharaan : " + hewanPeliharaan.length);

// 16.
let warna = ["merah", "kuning", "hijau"];
warna.splice(1, 0, "biru");
// 17.
namaTeman.splice(2, 1);
// 18.
angka.splice(2, 1, 30);
// 19.
makanan.splice(2, 0, "ayam");
// 20.
let benda = ["buku", "pensil", "penghapus"];
benda.splice(1, 1, "pulpen");

// 21.
let daftarBelanja2 = ["nasi", "gula", "kopi"];
daftarBelanja2.push("telor");
daftarBelanja2.pop();
console.log("Jumlah daftar belanja : " + daftarBelanja2.length);

// 22.
let hewanPeliharaan2 = ["anjing", "kucing", "burung"];
hewanPeliharaan2.push("ikan");
hewanPeliharaan2.shift();
hewanPeliharaan2.splice(1, 0, "kelinci");

// 23.
let angka2 = [1, 2, 3, 4, 5];
angka2.push(6);
angka2.shift();
console.log("Jumlah angka : " + angka2.length);

// 24.
let teman2 = ["Rifa", "Rafi", "Indra", "Andi", "Rian"];
teman2.unshift("Dono");
teman2.pop();
teman2.splice(1, 1, "Risa");

// 25.
let makanan2 = ["nasi", "soto", "mie", "bakso", "sate"];
makanan2.push("ayam");
makanan2.pop();
makanan2.splice(2, 0, "udang");
console.log(makanan2);

// BAB 2.2
// LATIHAN MAIN
// 1.
let angkaa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 2.
let angkaaKali5 = angkaa.map((x) => x * 5);
console.log(angkaaKali5);
// 3.
let angkaGenap = angkaa.filter(function (i) {
  return i % 2 == 0;
});
console.log(angkaGenap);
// 4.
let totalSemuaAngka = angkaa.reduce(function (total, angka) {
  return (total += angka);
});
console.log(totalSemuaAngka);
// 5.
let angkaPertamaYangLebihDari8 = angkaa.find(function (i) {
  return i > 8;
});
console.log(angkaPertamaYangLebihDari8);
//

// STUDI KASUS
// 1.
let daftaBuah = [
  "apel",
  "jeruk",
  "mangga",
  "pisang",
  "semangka",
  "anggur",
  "jambu",
  "duku",
  "rambutan",
  "melon",
];
daftaBuah.forEach(function (buah) {
  console.log(buah);
});

// 2.
let daftarHargaBarang = [
  10000, 5000, 2000, 15000, 25000, 30000, 50000, 100000, 150000, 200000,
];
let daftarHargaBarangDiskon = daftarHargaBarang.map(function (i) {
  return Math.floor(i * 1.1);
});
console.log(daftarHargaBarangDiskon);

// 3.
let daftarUmur = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65];
let umurLebihDari17 = daftarUmur.filter(function (i) {
  return i > 17;
});
console.log(umurLebihDari17);

// 4.
let daftarNilaiUjian = [75, 80, 95, 100, 85, 90, 78, 92, 88, 76];
let totalNilaiUjian = daftarNilaiUjian.reduce(function (total, nilai) {
  total += nilai;
  return total;
});
console.log(totalNilaiUjian);

// 5.
let daftarNomorKursi = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

let kursiPertamaYangLebihDari20 = daftarNomorKursi.find(function (i) {
  return i > 20;
});
console.log(kursiPertamaYangLebihDari20);
