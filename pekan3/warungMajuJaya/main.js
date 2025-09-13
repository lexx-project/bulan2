import readline from "readline-sync";
import { tambahBarang, cariBarang, hitungTotal, updateStock } from "./utils.js";
import barang from "./barang.js";

function showMenu() {
  console.log("\n==== Warung Maju Jaya ====");
  console.log("1. Tambah Barang Baru");
  console.log("2. Cari Barang");
  console.log("3. Hitung Total Belanja");
  console.log("4. Tampilkan Semua Barang");
  console.log("5. Update Stock");
  console.log("6. Keluar");
  return readline.question("Pilih menu: ");
}

function tambahBarangBaru() {
  const namaBarangBaru = readline.question("Masukkan Nama Barang Baru: ");
  const hargaBarangBaru = parseInt(
    readline.question("Masukkan Harga Barang Baru: ")
  );

  const stokBarangBaru = parseInt(
    readline.question("Masukkan Jumlah Stok Barang Baru: ")
  );

  const idBaru = barang.length + 1;
  const barangBaru = {
    id: idBaru,
    nama: namaBarangBaru,
    harga: hargaBarangBaru,
    stok: stokBarangBaru,
  };

  barang.push(barangBaru);
  console.log("Barang berhasil ditambahkan:", barangBaru);
}

function cariBarangg() {
  const nama = readline.question("Masukkan Nama Barang : ");
  const hasilCari = cariBarang(nama);
  if (hasilCari) {
    console.log("Barang ditemukan:", hasilCari);
  } else {
    console.log("Barang tidak ditemukan.");
  }
}

function totalHargaBelanja() {
  const idBarang = readline.question("Masukkan Id Barang Yang Mau Di Beli : ");
  const jumlah = readline.question("Masukkan Jumlah Barang : ");

  const total = hitungTotal([
    {
      id: parseInt(idBarang),
      jumlah: parseInt(jumlah),
    },
  ]);
  console.log("Total harga belanja: " + total);
}

function tambahStock() {
  const idBarang = readline.question(
    "Masukkan Id Barang Yang Mau Di Tambah : "
  );
  const jumlahStok = readline.question(
    "Masukkan Jumlah Stok Yang Mau Di Tambah : "
  );

  console.log(updateStock(idBarang, jumlahStok));
}

while (true) {
  const choice = showMenu();

  if (choice === "1") {
    tambahBarangBaru();
  } else if (choice === "2") {
    cariBarangg();
  } else if (choice === "3") {
    totalHargaBelanja();
  } else if (choice === "4") {
    console.log(barang);
  } else if (choice === "5") {
    tambahStock();
  } else if (choice === "6") {
    console.log("Terima kasih telah menggunakan Aplikasi Warung Maju Jaya.");
    break;
  } else {
    console.log("Pilihan tidak valid. Silakan coba lagi.");
  }
}
