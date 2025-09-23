const inputUser = document.getElementById("inputUser");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(inputUser.value);
});
