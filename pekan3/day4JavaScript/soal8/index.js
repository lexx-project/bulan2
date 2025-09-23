async function checkNumber(num) {
  try {
    return new Promise((resolve, reject) => {
      if (num % 2 === 0) {
        resolve("Angka Di Perbolehkan");
      } else {
        reject("Angka Ganjil Tidak Di Perbolehkan");
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}

checkNumber(9)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
