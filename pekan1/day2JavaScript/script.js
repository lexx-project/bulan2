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
