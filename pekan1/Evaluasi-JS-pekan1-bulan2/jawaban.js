// SOAL 1
const nasiGudeg = 8000;
const ayamGoreng = 12000;
const esTeh = 3000;

function hitungTotalPendapatan(
  jumlahLakuNasiGudeg,
  jumlahLakuAyamGoreng,
  jumlahLakuEsTeh
) {
  const totalHarga =
    jumlahLakuNasiGudeg * nasiGudeg +
    jumlahLakuAyamGoreng * ayamGoreng +
    jumlahLakuEsTeh * esTeh;

  return totalHarga;
}

const pendapatanHariIni = hitungTotalPendapatan(15, 10, 20);
console.log(
  "Total pendapatan sebelum diskon: " + pendapatanHariIni + " rupiah"
);

// SOAL 2
function diskon(totalHarga) {
  if (totalHarga > 50000) {
    return totalHarga * 0.9;
  } else {
    return totalHarga;
  }
}

console.log(
  "Total pendapatan setelah diskon: " + diskon(pendapatanHariIni) + " rupiah"
);

// SOAL 3
function palingBanyakTerjual(
  jumlahLakuNasiGudeg,
  jumlahLakuAyamGoreng,
  jumlahLakuEsTeh
) {
  if (
    jumlahLakuNasiGudeg >= jumlahLakuAyamGoreng &&
    jumlahLakuNasiGudeg >= jumlahLakuEsTeh
  ) {
    return "Nasi Gudeg";
  } else if (jumlahLakuAyamGoreng >= jumlahLakuEsTeh) {
    return "Ayam Goreng";
  } else {
    return "Es Teh";
  }
}

console.log("Menu paling banyak terjual: " + palingBanyakTerjual(15, 10, 20));

// SOAL 4
function sistemDiskon(totalHarga, pelanggan) {
  if (pelanggan === "biasa") {
    return totalHarga * 0.95;
  } else if (pelanggan === "member") {
    return totalHarga * 0.9;
  } else if (pelanggan === "vip") {
    return totalHarga * 0.85;
  } else {
    return totalHarga;
  }
}

console.log(
  "Total Harga setelah diskon pelanggan: " +
    sistemDiskon(70000, "member") +
    " rupiah"
);

// SOAL 5
function rataRataPendapatan(pendapatanPerHari) {
  let totalPendapatan = 0;
  for (let i = 0; i < pendapatanPerHari.length; i++) {
    totalPendapatan += pendapatanPerHari[i];
  }
  return (
    "Rata-rata pendapatan per hari: " +
    Math.floor(totalPendapatan / pendapatanPerHari.length)
  );
}

console.log(
  rataRataPendapatan([150000, 200000, 175000, 180000, 165000, 190000, 145000])
);

// SOAL 6
let produk = {
  kaos: {
    stock: 50,
    harga: 750000,
  },
  celana: {
    stock: 30,
    harga: 150000,
  },
  jaket: {
    stock: 15,
    harga: 200000,
  },
};
function showStock(namaBarang) {
  if (namaBarang === "kaos") {
    return "Stock Dari kaos : " + produk.kaos.stock;
  } else if (namaBarang === "celana") {
    return "Stock Dari celana : " + produk.celana.stock;
  } else if (namaBarang === "jaket") {
    return "Stock Dari jaket : " + produk.jaket.stock;
  } else {
    return `stock kaos : ${produk.kaos.stock} pcs, celana : ${produk.celana.stock} pcs, dan jaket : ${produk.jaket.stock} pcs`;
  }
}

console.log(showStock()); // Jika mau menampilkan semua stock maka kosongkan saja argumen nya, dan jika mau spesifik tulis produk nya di argumen

// SOAL 7
let point = {};
function poin(namaPelanggan, totalHarga) {
  if (totalHarga > 10000) {
    point[namaPelanggan] = Math.floor(totalHarga / 10000);
  }
  return "Poin " + namaPelanggan + " adalah " + point[namaPelanggan] + " poin";
}

console.log(poin("Budi", 38000));
console.log(point);

// SOAL 8
function diskonStokTipis() {
  if (produk.kaos.stock < 10) {
    return (
      "FLASH SALE!, PRODUK KAOS ADA DISKON 5% NIH DARI HARGA " +
      produk.kaos.harga +
      " MENJADI CUMA " +
      produk.kaos.harga * 0.95
    );
  } else if (produk.celana.stock < 10) {
    return (
      "FLASH SALE!, PRODUK CELANA ADA DISKON 5% NIH DARI HARGA " +
      produk.celana.harga +
      " MENJADI CUMA " +
      produk.celana.harga * 0.95
    );
  } else if (produk.jaket.stock < 10) {
    return (
      "FLASH SALE!, PRODUK JAKET ADA DISKON 5% NIH DARI HARGA " +
      produk.jaket.harga +
      " MENJADI CUMA " +
      produk.jaket.harga * 0.95
    );
  } else {
    return "Stock Masih Banyak, Tidak Ada Diskon";
  }
}

console.log(diskonStokTipis()); // Fungsi ini akan otomatis update dari data Produk Asli di atas

// SOAL 9
function peringatanStokTipis() {
  if (produk.kaos.stock < 20) {
    return (
      "GAWAT STOK KAOS TINGGAL " +
      produk.kaos.stock +
      " PCS, SEGERA RESTOCK LAGI!!"
    );
  } else if (produk.celana.stock < 20) {
    return (
      "GAWAT STOK CELANA TINGGAL " +
      produk.celana.stock +
      " PCS, SEGERA RESTOCK LAGI!!"
    );
  } else if (produk.jaket.stock < 20) {
    return (
      "GAWAT STOK JAKET TINGGAL " +
      produk.jaket.stock +
      " PCS, SEGERA RESTOCK LAGI!!"
    );
  } else {
    return "TENANG BROWWW SEMUA STOCK MASIH BANYAK, NYANTAI DULU GAK SIEHHH";
  }
}
console.log(peringatanStokTipis()); // In i juga update langsung dari data global di atas

// SOAL 10
function showRole(namaPelanggan) {
  let role = {};
  if (point[namaPelanggan]) {
    if (point[namaPelanggan] <= 99) {
      role[namaPelanggan] = "Bronze";
    } else if (point[namaPelanggan] <= 499) {
      role[namaPelanggan] = "Silver";
    } else {
      role[namaPelanggan] = "Gold";
    }
    return namaPelanggan + " Mempunyai Role " + role[namaPelanggan];
  } else {
    return "Nama " + namaPelanggan + " Tidak Ditemukan";
  }
}

console.log(showRole("Budi"));

// SOAl 11
let siswa = [
  {
    nama: "Alice",
    nilai: [85, 90, 78, 92, 88],
  },
  {
    nama: "Bob",
    nilai: [72, 65, 80, 75, 70],
  },
  {
    nama: "Charlie",
    nilai: [90, 88, 92, 85, 95],
  },
  {
    nama: "Diana",
    nilai: [68, 70, 65, 72, 60],
  },
  {
    nama: "Eve",
    nilai: [95, 93, 98, 90, 96],
  },
  {
    nama: "Frank",
    nilai: [78, 80, 75, 82, 77],
  },
  {
    nama: "Grace",
    nilai: [88, 85, 90, 87, 89],
  },
  {
    nama: "Heidi",
    nilai: [65, 60, 68, 62, 70],
  },
  {
    nama: "Ivan",
    nilai: [92, 90, 95, 88, 93],
  },
  {
    nama: "Judy",
    nilai: [70, 72, 68, 75, 65],
  },
  {
    nama: "Kevin",
    nilai: [83, 80, 85, 82, 84],
  },
  {
    nama: "Liam",
    nilai: [75, 70, 78, 73, 76],
  },
  {
    nama: "Mia",
    nilai: [91, 93, 89, 92, 90],
  },
  {
    nama: "Noah",
    nilai: [60, 62, 58, 65, 55],
  },
  {
    nama: "Olivia",
    nilai: [98, 96, 99, 97, 95],
  },
  {
    nama: "Peter",
    nilai: [73, 70, 75, 72, 74],
  },
  {
    nama: "Quinn",
    nilai: [86, 84, 88, 85, 87],
  },
  {
    nama: "Rachel",
    nilai: [69, 65, 70, 68, 72],
  },
  {
    nama: "Sam",
    nilai: [89, 87, 90, 88, 91],
  },
  {
    nama: "Tina",
    nilai: [77, 75, 79, 76, 78],
  },
  {
    nama: "Uma",
    nilai: [93, 90, 95, 92, 94],
  },
  {
    nama: "Victor",
    nilai: [62, 60, 65, 61, 63],
  },
  {
    nama: "Wendy",
    nilai: [96, 94, 98, 95, 97],
  },
  {
    nama: "Xavier",
    nilai: [71, 70, 72, 68, 73],
  },
  {
    nama: "Yara",
    nilai: [84, 82, 86, 83, 85],
  },
]; // Ai yang buatin data nya :v

// hitung dulu semua nilai rata rata per siswa
let rataRataNilai = {};
function hitungNilaiRataRataSemuaSiswa() {
  for (let i = 0; i < siswa.length; i++) {
    let totalNilai = 0;
    for (let j = 0; j < siswa[i].nilai.length; j++) {
      totalNilai += siswa[i].nilai[j];
    }
    let rataRata = totalNilai / siswa[i].nilai.length;
    rataRataNilai[siswa[i].nama] = rataRata;
  }
}

hitungNilaiRataRataSemuaSiswa();
console.log(rataRataNilai);

function showNilaiRataRata(namaSiswa) {
  if (rataRataNilai[namaSiswa]) {
    return (
      "Nilai Rata-rata " + namaSiswa + " adalah " + rataRataNilai[namaSiswa]
    );
  } else {
    return "Siswa Tidak Ditemukan";
  }
}

console.log(showNilaiRataRata("Alice"));

// SOAL 12
//  identifikasi dulu semua grade siswa nya
let grade = {};
function identifikasiGradeSemuaSiswa() {
  for (let i = 0; i < siswa.length; i++) {
    const namaSiswa = siswa[i].nama;
    const nilaiRataRataSiswa = rataRataNilai[namaSiswa];
    if (nilaiRataRataSiswa <= 60) {
      grade[namaSiswa] = "D";
    } else if (nilaiRataRataSiswa < 69) {
      grade[namaSiswa] = "C";
    } else if (nilaiRataRataSiswa < 84) {
      grade[namaSiswa] = "B";
    } else if (nilaiRataRataSiswa <= 100) {
      grade[namaSiswa] = "A";
    } else if (nilaiRataRataSiswa > 100) {
      return "Ga ada nilai lebih dari 100 🗿🗿";
    } else {
      return "Siswa Tidak Ditemukan";
    }
  }
}

identifikasiGradeSemuaSiswa(); //
// console.log(grade);

function showGrade(namaSiswa) {
  if (grade[namaSiswa]) {
    return "Grade " + namaSiswa + " adalah " + grade[namaSiswa];
  } else {
    return "Siswa Tidak Ditemukan";
  }
}

console.log(showGrade("Alice"));

// SOAL 13
function tampilkanDataSiswa(namaSiswa) {
  for (let i = 0; i < siswa.length; i++) {
    if (namaSiswa === siswa[i].nama) {
      return ` Nama Siswa : ${namaSiswa}, \n Mempunyai Nilai : ${siswa[i].nilai} \n dengan rata-rata ${rataRataNilai[namaSiswa]} \n dan Mempunyai Grade ${grade[namaSiswa]}`;
    }
  }
}

console.log(tampilkanDataSiswa("Alice"));

// SOAl 14
let rataRataPerKelas = 0;
function rewardKelas() {
  let nilaiRataRataSiswa = Object.values(rataRataNilai);
  let totalNilaiRataRataSemuaSiswa = 0;
  for (let i = 0; i < nilaiRataRataSiswa.length; i++) {
    totalNilaiRataRataSemuaSiswa += nilaiRataRataSiswa[i];
  }
  rataRataPerKelas = totalNilaiRataRataSemuaSiswa / siswa.length;
  if (rataRataPerKelas >= 80) {
    return "Kelas Ini Mendapatkan Hadiah / Reward";
  } else {
    return "Kelas Ini Tidak Mendapatkan Hadiah / Reward";
  }
}

console.log(rewardKelas());

//SOAL 15
function rankingKelas() {
  let nilaiRataRataSiswa = Object.values(rataRataNilai);
  nilaiRataRataSiswa.sort();
  let ranking = {};
  for (let i = 0; i < siswa.length; i++) {
    ranking[siswa[i].nama] = i + 1;
    console.log(
      siswa[i].nama + " Mendapatkan Ranking : " + ranking[siswa[i].nama]
    );
  }
}

rankingKelas();

// SOAL 16
function hitungEstimasiPendapatan(inginPendapatanBerapa) {
  return (
    "Jika Kamu Menginginkan Uang Sebanyak " +
    inginPendapatanBerapa +
    " Maka Kamu Harus Bekerja Selama : " +
    inginPendapatanBerapa / 25000 +
    " Jam"
  );
}

console.log(hitungEstimasiPendapatan(500000));

// SOAL 17
// Kita Ibaratkan Per motor Butuh Waktu 1 Jam
function cekApakahCukupWaktuUntukPebaikiMotor(jumlahMotor) {
  let bukaPerjam = 8;
  if (jumlahMotor > bukaPerjam) {
    return "WAKTUNYA GAK CUKUUP, LANJUT BESOK AJA BOSKUU";
  } else {
    return "MASIH CUKUP, GAS TERUSSS";
  }
}

console.log(cekApakahCukupWaktuUntukPebaikiMotor(9));

// SOAL 18
let antrianBengkel = {};
let nomorAntrian = 0;

function tambahAntrian(namaUser, merkKendaraan) {
  antrianBengkel[namaUser] = {
    nomorAntrian: nomorAntrian,
    merkKendaraan: merkKendaraan,
  };
  nomorAntrian++;
  console.log(
    "User Atas Nama " +
      namaUser +
      " Berhasil Masuk Antrian Ke : " +
      nomorAntrian +
      " Dengan Kendaraan : " +
      merkKendaraan
  );
}

tambahAntrian("Budi", "SupraX");
tambahAntrian("Dono", "VegaR");

function tampilkanSemuaAntrian() {
  for (let i = 0; i < Object.keys(antrianBengkel).length; i++) {
    console.log(
      "Antrian Ke :" +
        (i + 1) +
        " Atas Nama " +
        Object.keys(antrianBengkel)[i] +
        " Dengan Kendaraan : " +
        antrianBengkel[Object.keys(antrianBengkel)[i]].merkKendaraan
    );
  }
}

tampilkanSemuaAntrian();

// SOAL 19
function cekWaktuGaransi(waktuService) {
  let tanggal = 1;
  if (waktuService <= 2) {
    tanggal += 7;
  } else if (waktuService <= 4) {
    tanggal += 14;
  } else {
    tanggal += 30;
  }
  return "Masa Garansi Kamu Sampai Tanggal " + tanggal;
}

console.log(cekWaktuGaransi(8));

// SOAL 20
function hitungKomisiMekanik(jamService, jenisService) {
  let komisi = 0;
  let biayaPerJam = 25000;
  let biayaService = jamService * biayaPerJam;
  if (jenisService === "ringan") {
    komisi = biayaService * 0.1;
  } else if (jenisService === "sedang") {
    komisi = biayaService * 0.15;
  } else if (jenisService === "berat") {
    komisi = biayaService * 0.2;
  }
  return (
    "Gaji Untuk Kerja " +
    jenisService +
    "Dengan Total Biaya Services Sebesar " +
    biayaService +
    " adalah : " +
    komisi
  );
}

console.log(hitungKomisiMekanik(2, "berat"));
// SOAL 21
let paketHarga = {
  basic: 500000,
  standard: 800000,
  premium: 1200000,
};

function hitungBiayaPerPertemuan(paket) {
  if (paket === "basic") {
    return (
      "Harga Per Pertemuan Untuk Paket Basic Adalah " +
      paketHarga.basic / 4 +
      " Rupiah"
    );
  } else if (paket === "standard") {
    return (
      "Harga Per Pertemuan Untuk Paket Standard Adalah " +
      paketHarga.standard / 8 +
      " Rupiah"
    );
  } else if (paket === "premium") {
    return (
      "Harga Per Pertemuan Untuk Paket Premium Adalah " +
      paketHarga.premium / 12 +
      " Rupiah"
    );
  } else {
    return "Paket Tidak Ditemukan";
  }
}

console.log(hitungBiayaPerPertemuan("premium"));
console.log(hitungBiayaPerPertemuan("basic"));
console.log(hitungBiayaPerPertemuan("standard"));

// SOAL 22
function hitungCicilan(paket, totalBayar) {
  let sisaPembayaran = paketHarga[paket] - totalBayar;
  let cicilanPerBulan = 0;
  let jumlahCicilan = 0;

  if (paket === "basic") {
    jumlahCicilan = 2;
    cicilanPerBulan = paketHarga.basic / jumlahCicilan;
  } else if (paket === "standard") {
    jumlahCicilan = 3;
    cicilanPerBulan = paketHarga.standard / jumlahCicilan;
  } else if (paket === "premium") {
    jumlahCicilan = 4;
    cicilanPerBulan = paketHarga.premium / jumlahCicilan;
  } else {
    return "Paket tidak ditemukan.";
  }

  if (totalBayar >= paketHarga[paket]) {
    return `Pembayaran lunas untuk paket ${paket}.`;
  } else {
    return `Untuk paket ${paket}, cicilan per bulan adalah ${cicilanPerBulan} rupiah selama ${jumlahCicilan} bulan. Sisa pembayaran: ${sisaPembayaran} rupiah.`;
  }
}

console.log(hitungCicilan("basic", 150000));
// SOAL 23
const kapasitasRuangan = {
  A: 20,
  B: 15,
  C: 25,
  D: 10,
  E: 30,
};

let alokasiRuangan = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
};

// SOAL 23
function alokasiSiswaKeRuangan(namaSiswa) {
  if (alokasiRuangan.A < kapasitasRuangan.A) {
    alokasiRuangan.A++;
    return `${namaSiswa} dialokasikan ke Ruang A.`;
  } else if (alokasiRuangan.B < kapasitasRuangan.B) {
    alokasiRuangan.B++;
    return `${namaSiswa} dialokasikan ke Ruang B.`;
  } else if (alokasiRuangan.C < kapasitasRuangan.C) {
    alokasiRuangan.C++;
    return `${namaSiswa} dialokasikan ke Ruang C.`;
  } else if (alokasiRuangan.D < kapasitasRuangan.D) {
    alokasiRuangan.D++;
    return `${namaSiswa} dialokasikan ke Ruang D.`;
  } else if (alokasiRuangan.E < kapasitasRuangan.E) {
    alokasiRuangan.E++;
    return `${namaSiswa} dialokasikan ke Ruang E.`;
  } else {
    return `${namaSiswa} tidak dapat dialokasikan. Semua ruangan penuh.`;
  }
}

for (let i = 0; i < 110; i++) {
  console.log(alokasiSiswaKeRuangan("Siswa " + i));
} // looping untuk data dummy karena lama nambahin 1 per satu :v

// SOAL 24

function hitungPersentaseKehadiran(absensiArray) {
  let hasil = {};
  for (let i = 0; i < absensiArray.length; i++) {
    let nama = absensiArray[i].nama;
    let dataAbsensi = absensiArray[i].absensi;
    let totalPertemuan = 0;
    let totalHadir = 0;
    for (let j = 0; j < dataAbsensi.length; j++) {
      totalPertemuan++;
      if (dataAbsensi[j] === 1) {
        totalHadir++;
      }
    }
    let persentase = (totalHadir / totalPertemuan) * 100;
    hasil[nama] = persentase + "%";
  }
  return hasil;
}

console.log(
  "Persentase Kehadiran Siswa:",
  hitungPersentaseKehadiran([{ nama: "Alice", absensi: [1, 1, 1, 0, 1] }])
);
