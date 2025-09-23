const display = document.getElementById("display");
let arrNumber = [];

function updateDisplay(value) {
  arrNumber.push(value);
  display.innerText = arrNumber.join("");
}

for (let i = 0; i <= 9; i++) {
  const button = document.getElementById(i.toString());
  console.log(button);
  button.addEventListener("click", () => {
    updateDisplay(i.toString());
  });
}

const clearButton = document.getElementById("clear");

function clearDisplay() {
  arrNumber.pop();
  display.innerText = arrNumber.join("");
}

function clear() {
  arrNumber = [];
  display.innerText = "0";
}

const clearr = document.getElementById("plus");

clearr.addEventListener("click", () => {
  clear();
});

clearButton.addEventListener("click", () => {
  clearDisplay();
});
