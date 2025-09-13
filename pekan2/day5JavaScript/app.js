import readline from "readline-sync";
import { student } from "./data.js";

import {
  addStudent,
  showAllStudent,
  updateDataStudent,
  deleteDataStudent,
  findStudent,
  calculateAverage,
} from "./function.js";

function showMenu() {
  console.log(" ");
  console.log("APLIKASI MANAJEMEN SISWA");
  console.log("1. Tambah Siswa");
  console.log("2. Tampilkan Semua Siswa");
  console.log("3. Update Data Siswa");
  console.log("4. Hapus Data Siswa");
  console.log("5. Cari Siswa");
  console.log("6. Hitung Rata-rata Nilai");
  console.log("7. Keluar");
}

function addNewStudent() {
  const nama = readline.question("Masukkan Nama Siswa Baru : ");
  const kelas = readline.question("Masukkan Kelas Untuk Siswa Baru : ");
  const nilai = parseInt(
    readline.question("Masukkan Nilai Untuk Siswa Baru : ")
  );
  const newId = student.length + 1;
  return addStudent({
    id: newId,
    nama: nama,
    kelas: kelas,
    nilai: nilai,
  });
}

function showAllOfStudent() {
  showAllStudent();
}

function updateDataOfStudent() {
  const id = parseInt(
    readline.question("Masukkan Id Siswa Yang Mau Di Ubah : ")
  );
  const newId = parseInt(readline.question("Masukkan Id Baru : "));
  const nama = readline.question("Masukkan Nama : ");
  const kelas = readline.question("Masukkan Kelas : ");
  const nilai = readline.question("Masukkan Nilai : ");

  return updateDataStudent(id, {
    id: newId,
    nama: nama,
    kelas: kelas,
    nilai: parseInt(nilai),
  });
}

function deleteDataOfStudent() {
  const id = parseInt(readline.question("Masukkan Id Yang Mau Di Hapus : "));

  return deleteDataStudent(id);
}

function findTheStudent() {
  const nama = readline.question("Masukkan Nama Siswa Yang Mau Di Cari : ");

  return findStudent(nama);
}

showMenu();

let choice = parseInt(readline.question("Pilihan Anda : "));
console.log(" ");
while (true) {
  if (choice == 1) {
    console.log(addNewStudent());
  } else if (choice == 2) {
    showAllOfStudent();
  } else if (choice == 3) {
    console.log(updateDataOfStudent());
  } else if (choice == 4) {
    console.log(deleteDataOfStudent());
  } else if (choice == 5) {
    findTheStudent();
  } else if (choice == 6) {
    console.log(calculateAverage());
  } else if (choice == 7) {
    console.log("Terima Kasih Telah Menggunakan Aplikasi Ini :)");
    console.log(" ");
    break;
  } else {
    console.log("Pilihan Invalid");
  }
  showMenu();
  choice = parseInt(readline.question("Pilihan Anda : "));
  console.log(" ");
}
