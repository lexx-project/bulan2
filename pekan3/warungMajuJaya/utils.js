import barang from "./barang.js";

function tambahBarang(namaBarang) {
  return [...barang, namaBarang];
}

function cariBarang(namaBarang) {
  return barang.find(
    (item) => item.nama.toLowerCase() === namaBarang.toLowerCase()
  );
}

function hitungTotal(belanjaan) {
  let total = 0;
  for (let i = 0; i < belanjaan.length; i++) {
    const itemBelanja = belanjaan[i];
    const barangCocok = barang.find((item) => item.id === itemBelanja.id);

    if (barangCocok && belanjaan) {
      total += barangCocok.harga * itemBelanja.jumlah;
    }
  }
  return total;
}

console.log(barang);
console.log(
  hitungTotal([
    {
      id: 1,
      jumlah: 3,
    },
  ])
);

function updateStock(id, jumlahStok) {
  barang.forEach(function (item) {
    if (item.id === id) {
      item.stok += jumlahStok;
    }
  });
  return barang;
}

console.log(updateStock(1, 20));

export { tambahBarang, cariBarang, hitungTotal, updateStock };
