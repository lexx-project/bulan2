function reject() {
  let data = "BUDIONO SIREGAR";
  return new Promise((resolve, reject) => {
    if (data === "KEMENDIKBUD") {
      resolve(data);
    } else {
      reject("Data gagal diproses");
    }
  });
}

reject()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    {
      console.log(err);
    }
  });
