function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Login Berhasil!!");
    }, 1000);
  });
}

function pilihBarang() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Barang Dipilih");
    }, 1000);
  });
}

function bayar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pembayaran Berhasil");
    }, 1000);
  });
}

login()
  .then((result) => {
    console.log(result);
    return pilihBarang();
  })
  .then((result) => {
    console.log(result);
    return bayar();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
