// STUDI KASUS
// 1.
let menu = [
  {
    nama: "Sate",
    harga: 35000,
    kategori: "makanan",
  },
  {
    nama: "Nasi Goreng",
    harga: 10000,
    kategori: "makanan",
  },
  {
    nama: "Mie Ayam",
    harga: 90000,
    kategori: "makanan",
  },
  {
    nama: "Bakso",
    harga: 80000,
    kategori: "makanan",
  },
  {
    nama: "Gado-gado",
    harga: 100000,
    kategori: "makanan",
  },
  {
    nama: "Es Teh",
    harga: 5000,
    kategori: "minuman",
  },
  {
    nama: "Es Jeruk",
    harga: 7000,
    kategori: "minuman",
  },
  {
    nama: "Kopi",
    harga: 8000,
    kategori: "minuman",
  },
  {
    nama: "Jus Alpukat",
    harga: 15000,
    kategori: "minuman",
  },
  {
    nama: "Air Mineral",
    harga: 3000,
    kategori: "minuman",
  },
];

// 2.
menu.forEach((item) => {
  console.log(
    ` Nama : ${item.nama} | Kategori : ${item.kategori} | Harga : ${item.harga}`
  );
});

// 3.
const menuDibawah30000 = menu.filter((item) => {
  return item.harga < 30000;
});
const formattedMenu = menuDibawah30000.map((item) => item.nama).join(", ");
console.log(`Menu Murah Meriah (Di Bawah Rp30.000) : \n${formattedMenu}`);

// 4.
const namaNamaMenu = menu.map((item) => item.nama);
console.log(`Nama Nama Menu : \n${namaNamaMenu}`);

// 5.
const totalHargaSemuaMenu = menu.reduce(
  (total, item) => (total += item.harga),
  0
);
console.log(`Total Harga Semua Menu : \n Rp.${totalHargaSemuaMenu}`);

// 6.
function findMenu(namaMenu) {
  return menu.find((item) => {
    return item.nama.toLowerCase() === namaMenu.toLowerCase();
  });
}

console.log(findMenu("sate"));

// 7.
const [makanan1, makanan2] = menu;
console.log(`Makanan 1 = ${makanan1} \nMakanan 2 = ${makanan2}`);

// 8.
const { nama, harga } = menu[0];
console.log(nama, harga);
