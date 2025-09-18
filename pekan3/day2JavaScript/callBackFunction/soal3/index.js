function filterNumber(arr, callback) {
  return callback(arr);
}

function genap(arr) {
  return arr.filter((number) => {
    return number % 2 === 0;
  });
}

function ganjil(arr) {
  return arr.filter((number) => {
    return number % 2 === 1;
  });
}

console.log(filterNumber([1, 2, 3, 4, 5], ganjil));
