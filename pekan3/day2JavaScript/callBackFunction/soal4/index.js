function sorter(arr, callback) {
  return callback(arr);
}

function down(arr) {
  return arr.sort((a, b) => b - a);
}

function up(arr) {
  return arr.sort();
}

console.log(sorter([3, 1, 2], down));
