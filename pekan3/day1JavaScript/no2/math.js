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
  if (b === 0) {
    return "Tidak bisa dibagi dengan nol";
  }
  return a / b;
}

export { tambah, kurang, kali, bagi };
