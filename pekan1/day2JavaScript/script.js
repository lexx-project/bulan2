// TUGAS MAS DANI

// 1. Tampilkan biodata pakai console.log().
console.log("Biodata:");
console.log("Nama: John Doe");
console.log("Umur: 25");
console.log("Alamat: Jakarta");

// 2. Buat array buah lalu tampilkan dengan console.table().
const buah = ["Apel", "Jeruk", "Mangga", "Pisang"];
console.table(buah);

// 3. Minta nama lewat prompt(), lalu alert() sapa user.
let nama = prompt("Masukan nama anda");
// 5. Jika variabel user kosong → tampilkan console.error().
if (!nama) {
  console.error("Nama tidak boleh kosong!");
} else {
  alert("Halo " + nama);
}

// 4. Konfirmasi hapus data pakai confirm().
const hapus = confirm("Apakah anda yakin ingin menghapus data?");
if (hapus) {
  console.log("Data berhasil dihapus.");
} else {
  console.log("Data batal dihapus.");
}

// TUGAS BUKU
// LATIHAN MANDIRI
// 1. Buat 3 variable dengan let const dan var
let angka = 10;
const namaa = "Budi";
var isAktif = true;

// 2.
// Gunakan operator aritmatika dan perbandingan untuk membandingkan dua angka.
let angka1 = 10;
let angka2 = 7;
let hasilTambah = angka1 + angka2;
let hasilKali = angka1 * angka2;
let perbandingan = angka1 > angka2;

// 3. Tampilkan hasilnya dengan `console.log()`.
console.log("Nilai angka:", angka);
console.log("Nama:", namaa);
console.log("Status aktif:", isAktif);
console.log("Hasil tambah:", hasilTambah);
console.log("Hasil kali:", hasilKali);
console.log("Apakah angka1 > angka2?", perbandingan);
console.log("Apakah angka1 === 10?", angka1 === 10);

// STUDI KASUS
// 1. Buat variabel nama produk, harga produk 1 dan 2.
let namaProduk1 = "PANTENE";
let namaProduk2 = "ZINK";
let hargaProduk1 = 5000;
 let hargaProduk2 = 4500;

// 2. Hitung total harga dari dua produk.
let totalHarga = hargaProduk1 + hargaProduk2;

// 3. Tampilkan hasil total harga dengan teks seperti: `"Total harga untuk produk A dan B adalah RpXXX"`
console.log(
  "Total Harga Untuk " +
    namaProduk1 +
    " dan " +
    namaProduk2 +
    " adalah " +
    totalHarga
);
