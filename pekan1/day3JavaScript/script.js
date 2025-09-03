// TUGAS MAS DANI
// Studi Kasus 1 (percabangan)
// if else
// 1. menentukan Ganjil atau genap
let angka = 20;
if (angka % 2 === 0) {
  console.log("angka anda genap");
} else {
  console.log("angka anda ganjil");
}

// // 2. menentukan apakah seseorang boleh masuk bioskop usia > 17
let umur = 17;
if (umur <= 17) {
  console.log("anda belum boleh masuk bioskop");
} else {
  console.log("anda boleh masuk bioskop");
}
//
// // 3. menentukan apakah suhu termasuk dingin atau panas
let suhu = 80;
if (suhu <= 35) {
  console.log("hipotermia woyy, urusin itu , mati ntar anak orang");
} else if (suhu <= 37) {
  console.log("Anda sehat WalAfiat");
} else {
  console.log("Segera Sampaikan Wasiat!!");
}

// // 4. Mengecek Login dengan username dan password
// let usn = prompt("masukan username");
// let pass = prompt("masukan password");

// if (usn !== "admin" || pass !== "12345") {
//   window.location.href =
//     "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1";
// } else {
//   alert("selamat datang admin");
// }

// // 5. Mengecek apakah nilai ujian lulus atau tidak
const nilaii = 80;
if (nilaii < 80) {
  console.log("Anda Tidak Lulus, Belajar Lagi Deckkk");
} else {
  console.log("Anda Lulus");
}

// Switch
// 1. Menampilkan bulan dari 1-12
const bulan = 3;
switch (bulan) {
  case 1:
    console.log("Januari");
    break;
  case 2:
    console.log("Februari");
    break;
  case 3:
    console.log("Maret");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("Mei");
    break;
  case 6:
    console.log("Juni");
    break;
  case 7:
    console.log("Juli");
    break;
  case 8:
    console.log("Agustus");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("Oktober");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("Desember");
    break;
  default:
    console.log("bulan tidak ditemukan");
    break;
}

// 2. Menampilkan menu makanan berdasarkan pilihan nomor

const pilihanMenu = 3;
switch (pilihanMenu) {
  case 1:
    console.log("Anda memilih Nasi Goreng");
    break;
  case 2:
    console.log("Anda memilih Mie Ayam");
    break;
  case 3:
    console.log("Anda memilih Bakso");
    break;
  case 4:
    console.log("Anda memilih Soto");
    break;
  default:
    console.log("Pilihan menu tidak tersedia");
    break;
}

// 3. Menentukan Jenis Kelamin (L/P)
const jenisKelamin = "O";
switch (jenisKelamin) {
  case "L":
    console.log("Anda Laki-laki, Cari Duit Yang Banyakk");
    break;
  case "P":
    console.log("Anda Perempuan, Urusin tu anak woyy, Jangan Scroll Teruss");
    break;
  default:
    console.log("Jenis kelamin tidak valid, atau Anda tidak memiliki kelamin?");
    break;
}

// 4. Menentukan tingkat pendidikan
const kelas = 3;
switch (kelas) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("SD Kelas : " + kelas); // This will be executed for cases 1-6
    break;
  case 7:
  case 8:
  case 9:
    console.log("SMP kelas : " + kelas);
    break;
  case 10:
  case 11:
  case 12:
    console.log("SMA Kelas : " + kelas);
    break;
  default:
    console.log("Kelas Tidak Ditemukan");
    break;
}

// 5. Menentukan status lampu lalu lintas (merah, kuning, hijau)
const lampu = "biru";
switch (lampu) {
  case "merah":
    console.log("Berhenti");
    break;
  case "kuning":
    console.log("Hati-hati");
    break;
  case "hijau":
    console.log("Jalan");
    break;
  default:
    console.log("Lampu tidak valid");
    break;
}

// TUGAS BUKU

// 1. cekUmur
function cekUsia(umur) {
  if (umur < 13) {
    return "Anak-anak";
  } else if (umur < 20 && umur >= 13) {
    return "Remaja";
  } else if (umur < 40 && umur >= 20) {
    return "Dewasa";
  }
  return "Lansia";
}

console.log(cekUsia(90));

// 2. cetak Angka 1-10
function cetakAngka10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

cetakAngka10();

// 2.1 cetak Angka (bebas)
function cetakAngka(angka) {
  for (let i = 0; i <= angka; i++) {
    console.log(i);
  }
}

cetakAngka(1);

// 3. menampilkan Hari dari Hari 1 sampai 7
function cetakHari(number) {
  switch (number) {
    case 1:
      console.log("Senin");
      break;
    case 2:
      console.log("Selasa");
      break;
    case 3:
      console.log("Rabu");
      break;
    case 4:
      console.log("Kamis");
      break;
    case 5:
      console.log("Jumat");
      break;
    case 6:
      console.log("Sabtu");
      break;
    case 7:
      console.log("Minggu");
      break;
    default:
      console.log("Inputan Salah");
      break;
  }
}

cetakHari(5);

// SUDI KASUS
let nilai = 80;
if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 80) {
  console.log("B");
} else if (nilai >= 70) {
  console.log("C");
} else if (nilai >= 60) {
  console.log("D");
} else {
  console.log("E");
}
