const paragraph = document.getElementsByClassName("warna");
const color = ["red", "green", "blue"];

Array.from(paragraph).forEach((item, index) => {
  item.style.color = color[index];
});
