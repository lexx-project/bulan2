function tambah(x, y) {
  return new Promise((resolve) => {
    resolve(x + y);
  });
}

function kali(x, y) {
  return new Promise((resolve) => {
    resolve(x * y);
  });
}

tambah(5, 9)
  .then((result) => {
    return kali(result, 3);
  })
  .then((result) => {
    console.log("Hasil akhir:", result);
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
