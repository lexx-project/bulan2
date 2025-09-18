function progress(step) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Progress ${step}`);
    }, 1000);
  });
}

progress("25%")
  .then((result) => {
    console.log(result);
    return progress("50%");
  })
  .then((result) => {
    console.log(result);
    return progress("75%");
  })
  .then((result) => {
    console.log(result);
    return progress("100%");
  })
  .then((result) => {
    console.log(result);
  })
  .then(() => {
    console.log("SELESAI!!");
  })
  .catch((err) => {
    console.log(err);
  });
