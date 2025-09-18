import { nilai } from "./nilai.js";

function rataRata() {
  let total = 0;
  for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
  }
  return total / nilai.length;
}

function nilaiTertinggi() {
  return Math.max(...nilai);
}

function nilaiTerendah() {
  return Math.min(...nilai);
}
console.log(nilaiTerendah());
console.log(nilaiTertinggi());
console.log(rataRata());
