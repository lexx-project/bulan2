const inputUser = document.getElementById("inputUser");
const show = document.getElementById("show");

inputUser.oninput = () => {
  show.innerText = inputUser.value;
};
