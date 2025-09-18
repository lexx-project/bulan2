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

tambah(5, 7)
  .then((result) => {
    return kali(result, 3);
  })
  .then((finalResult) => {
    console.log("Hasil akhir:", finalResult);
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
