function operasi(num = 5, op) {
  return new Promise((resolve, reject) => {
    let result = 1;
    if (op === "*") {
      result *= num;
      resolve(result);
    } else {
      reject(new Error("Operator yang dimasukkan salah"));
    }
  });
}

operasi(undefined, "*")
  .then((result) => {
    console.log(result);
    return operasi(result * 2, "*");
  })
  .then((result) => {
    console.log(result);
    return operasi(result * 3, "*");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err.message));
