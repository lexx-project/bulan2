const button = document.getElementById("btn");

function handler1() {
  alert("handler 1");
}

function handler2() {
  alert("handler 2");
}

button.onclick = handler1;
button.onclick = handler2;

//handler1 akan di timpa dengan handler2, Kecuali kita menggunakan addEventListener maka keduanya akan berjalan
