function calculateArea(angka, callback) {
  return callback(angka);
}

calculateArea(5, function (angka) {
  console.log(angka * angka);
});
