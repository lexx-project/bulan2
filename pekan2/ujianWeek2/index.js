// DI SINI SAYA TIDAK MEMAKAI AI SAMA SEKALI, JIKA ADA METHOD YANG BELUM DI PELAJARI DI SINI, ITU SAYA TAHU DAN SAYA PELAJARI SENDIRI, DAN JUGA SAYA MEMAKAI READLINE-SYNC INI SUDAH TANYA MAS DANI DAN KATANYA BOLEH, KARENA KALAU TIDAK MEMAKAI READLINE-SYNC JADINYA GITU GITU AJA WKWKWKWK

import readline from "readline-sync";
import {
  dataBook,
  addBook,
  showAllBook,
  updateDataBook,
  deleteBook,
  findBook,
  showAvailableBook,
  addBooks,
} from "./buku.js";

function showMenu() {
  console.log("=== APLIKASI PERPUSTAKAAN ===");
  console.log("1. Tambah Buku");
  console.log("2. Tampilkan Semua Buku");
  console.log("3. Update Buku");
  console.log("4. Hapus Buku");
  console.log("5. Cari Buku");
  console.log("6. Tampilkan Buku Tersedia");
  console.log("7. Keluar");
  console.log("============================");
}

function addOneBook() {
  const judul = readline.question("Masukkan Judul : ");
  const penulis = readline.question("Masukkan Penulis : ");
  const tahun = readline.question("Masukkan Tahun : ");

  console.log(addBook(judul, penulis, parseInt(tahun)));
}

function showAllBooks() {
  showAllBook();
}

function updateBook() {
  const id = parseInt(
    readline.question("Masukkan Id Buku Yang Mau Di Ubah : ")
  );
  const newId = parseInt(readline.question("Masukkan Id Baru : "));
  const newTitle = readline.question("Masukkan Judul Baru : ");
  const newAuthor = readline.question("Masukkan Nama Penulis Baru : ");
  const newYear = parseInt(readline.question("Masukkan Tahun Baru : "));
  const newStatus = readline.question("Status Tersedia Buku (y/n) : ");
  let isAvailable;

  if (newStatus.toLowerCase() === "y") {
    isAvailable = true;
  } else {
    isAvailable = false;
  }

  const result = updateDataBook(id, {
    id: newId,
    judul: newTitle,
    penulis: newAuthor,
    tahun: newYear,
    tersedia: isAvailable,
  });
  console.log(result);
}

function deleteABook() {
  const id = readline.question("Masukkan Id Buku Yang Mau Di Hapus : ");
  return console.log(deleteBook(parseInt(id)));
}

function findABook() {
  const title = readline.question("Masukkan Nama Buku : ");

  return console.log(findBook(title));
}

function showAvailableOfBook() {
  return console.log(showAvailableBook());
}

// Fungsi addBooks (Menambah Banyak Buku) Tidak Saya Tambahkan Karena Saya Belum Paham Cara Menggunakan readline-sync supaya bisa menambahkan banyak data, Tapi Kalau Mau Di Pamggil Biasa Tingal Panggil Saja fungsi nya beserta Argumen nya

showMenu();
let choice = readline.question("Masukkan Pilihan Anda : ");

while (true) {
  if (choice == 1) {
    addOneBook();
  } else if (choice == 2) {
    showAllBooks();
  } else if (choice == 3) {
    updateBook();
  } else if (choice == 4) {
    deleteABook();
  } else if (choice == 5) {
    findABook();
  } else if (choice == 6) {
    showAvailableOfBook();
  } else if (choice == 7) {
    console.log("Thanks Yee Sudah Pakai Aplikasi Ini :)");
    break;
  } else {
    console.log("Pilihan tidak valid woyy!!, pilih lagi!!");
  }
  showMenu();
  choice = readline.question("Masukkan Pilihan Anda : ");
}
