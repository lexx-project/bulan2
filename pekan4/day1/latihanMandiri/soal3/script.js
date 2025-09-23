const inputUser = document.getElementById("inputUser");
const submitButton = document.getElementById("submitButton");
const paragraph = document.getElementById("paragraph");

submitButton.addEventListener("click", function () {
  paragraph.innerText = inputUser.value;
});
