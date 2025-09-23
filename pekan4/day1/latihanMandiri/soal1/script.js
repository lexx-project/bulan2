const button = document.getElementById("changeParagraph");

const paragraph = document.getElementById("paragraph");

button.addEventListener("click", () => {
  paragraph.innerText = "Hello, world!";
});
