function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Selesai Menunggu");
    }, ms);
  });
}

async function menunggu() {
  console.log(await delay(2000));
}

menunggu();
