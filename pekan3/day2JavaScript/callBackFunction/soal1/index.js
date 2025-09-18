function operasi(operasi, angka1, angka2) {
  return operasi(angka1, angka2);
}

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return a / b;
}

console.log(operasi(tambah, 90, 90));
