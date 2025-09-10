// BAB 2.3
// STUDI KASUS
// 1.
let mobil = {
  merk: "toyota",
  warna: "merah",
};

console.log(mobil.merk);

// 2.
let siswa = {
  nama: "Budi",
  kelas: 11,
};
console.log(siswa.kelas);

// 3.
let hewan = {
  jenis: "mamalia",
  umur: 90,
};
console.log(hewan.umur);

// 4.
let film = {
  judul: "Merah Putih: One For All",
  tahun: 2025,
};
console.log(film.tahun);

// 5.
let akun = {
  username: "pdnServer",
  password: "Admin1234",
};
console.log(akun.username);

// MENAMBAH PROPERTI
// 1.
mobil.harga = 250000000;
console.log(mobil.harga);

// 2.
siswa.alamat = "Jln.Sendirian No 14";
console.log(siswa.alamat);

// 3.
hewan.makanan = "Daging";
console.log(hewan.makanan);

// 4.
film.genre = "Komedi";
console.log(film.genre);

// 5.
akun.email = "kominfoniboss@gmail.com";
console.log(akun.email);

// MENGUBAH NILAI PROPERTI
// 1.
mobil.warna = "hitam";
console.log(mobil.warna);

// 2.
siswa.kelas = "XI";
console.log(siswa.kelas);

// 3.
hewan.umur = 5;
console.log(hewan.umur);

// 4.
film.tahun = 2024;
console.log(film.tahun);

// 5.
akun.password = "rahasia123";
console.log(akun.password);

// HAPUS PROPERTi
// 1.
delete mobil.harga;
console.log(mobil);

// 2.
delete siswa.alamat;
console.log(siswa);

// 3.
delete hewan.makanan;
console.log(hewan);

// 4.
delete film.genre;
console.log(film);

// 5.
delete akun.email;
console.log(akun);

// LOOPING PADA OBJECT
// 1.
for (let key in mobil) {
  console.log(`${key} : ${mobil[key]}`);
}

// 2.
for (let key in siswa) {
  console.log(key + " : " + siswa[key]);
}

// 3.
for (let key in hewan) {
  console.log(`${key} : ${hewan[key]}`);
}

// 4.
for (let key in film) {
  console.log(key + " : " + film[key]);
}

// 5.
for (let key in akun) {
  console.log(`${key} : ${akun[key]}`);
}

// LATIHAN MANDIRI GABUNGAN
// 1.
let buku = {
  judul: "Pulang Pergi",
  pengarang: "Tere Liye",
  tahunTerbit: 2024,
};

// 2.
buku.penerbit = "Sabak Grip Nusantara";

// 3.
buku.tahunTerbit = 2021;

// 4.
delete buku.pengarang;

// 5.
for (let key in buku) {
  console.log(key + " : " + buku[key]);
}

// EVALUASI HARIAN (STUDI KASUS BESAR)
// 1.
let bukuFavorit = {
  judul: "Pulang Pergi",
  pengarang: "Tere Liye",
  tahunTerbit: 2024,
};

// 2.
bukuFavorit.penerbit = "Sabak Grip Nusantara";

// 3.
bukuFavorit.tahunTerbit = 2021;

// 4.
delete bukuFavorit.pengarang;

// 5.
for (let key in bukuFavorit) {
  console.log(key + " : " + bukuFavorit[key]);
}

// BAB 2.4
// STUDI KASUS DESTRUCTING ARRAY
// 1.
let angka = [10, 20, 30];
let [x, y, z] = angka;
console.log(x);

// 2.
let buah = ["apel", "jeruk", "mangga"];
let [pertama, kedua] = buah;

// 3.
let numbers = [5, 6, 7, 8];

// 4.
let ratusan = [100, 200];
let [satu, dua] = ratusan;

// 5.
let bool = [true, false, true];
let [t1, t2, t3] = bool;

// STUDI KASUS DESTRUCTING OBJECT
// 1.
let siswaa = {
  nama: "Budi",
  umur: 17,
};

let { nama, umur } = siswaa;

// 2.
let bukuu = {
  judul: "Buku A",
  pengarang: "Andi",
};

let { judul, pengarang } = bukuu;

// 3.
let mobill = {
  merk: "Honda",
  warna: "Merah",
};

let { merk, warna } = mobill;

// 4.
let akunn = {
  username: "danz",
  password: "123",
};

let { username, password } = akunn;

// 5.
let siswi = {
  namaa: "Siti",
  kelas: "XI",
};

let { namaa, kelas } = siswi;

// STUDI KASUS SPREAD OPERATOR
// 1.
let angka1 = [1, 2];
let angka2 = [3, 4];
let gabungan = [...angka1, ...angka2];

// 2.
let puluhan = [10, 20, 30];
let puluhanCopy = [...puluhan];

// 3.
let obj1 = {
  a: 1,
};

let obj2 = {
  b: 2,
};

let objGabungan = { ...obj1, ...obj2 };

// 4.
let angka3 = [5, 6, 7];
console.log(...angka3);

// 5.
let arr1 = ["a", "b"];
let arr2 = ["c", "d"];
let arrGabungan = [...arr1, ...arr2];

// STUDI KASUS REST OPERATOR
// 1.
function jumlah(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}

console.log(jumlah(1, 2, 3, 4));

// 2.
function cetak(...string) {
  string.forEach((n) => {
    console.log(n);
  });
}

cetak("Hello", "World", "!");

// 3.
function kalikan(...numbs) {
  return numbs.reduce((total, n) => total * n, 1);
}

console.log(kalikan(2, 3, 4));

// 4.
function gabungKalimat(...word) {
  return word.join(" ");
}
console.log(gabungKalimat("hello", "World"));

// 5.
let [awal, ...sisa] = [1, 2, 3, 4, 5];

// LATIHAN MANDIRI GABUNGAN
// 1.
let aangkaa = [1, 2, 3, 4];
let [a, b, c, d] = aangkaa;

// 2.
let mobilll = {
  merek: "Innova Reborn",
  tahun: 2024,
};
let { merek, tahun } = mobilll;

// 3.
let array1 = ["Pajero", "Fortuner", "Xpander"];
let array2 = ["Innova", "Rush", "Avanza"];
let arrayGabungan = [...array1, ...array2];
console.log(arrayGabungan);

// 4.
function penjumlahan(...numbs) {
  return numbs.reduce(function (total, n) {
    return total + n;
  }, 0);
}

console.log(penjumlahan(1, 2, 3, 4, 5));

// EVALUASI HARIAN (STUDI KASUS BESAR)
// 1.
let siswii = {
  naamaa: "Dewi",
  umur: 17,
  kelass: "XI",
};

// 2.
let { naamaa, kelass } = siswii;

// 3.
siswii = {
  ...siswii,
  hobi: "Mancing",
};

// 4.
function totalNilaiUjian(...nilai) {
  return nilai.reduce((total, n) => total + n, 0);
}

// 5.
console.log(siswii);
console.log(naamaa, kelass);
console.log(siswii.hobi);
console.log(totalNilaiUjian(90, 80, 70, 68, 89));
