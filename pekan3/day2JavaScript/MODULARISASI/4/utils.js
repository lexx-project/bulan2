function oddEvenCheck(number) {
  if (number % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

export { oddEvenCheck, reverseString, randomNumber };
