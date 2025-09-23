const btn = document.getElementById("btn");
const removeBtn = document.getElementById("removeBtn");

const showAlert = () => {
  alert("Tombol Di Klik");
};

btn.addEventListener("click", showAlert);

removeBtn.addEventListener("click", () => {
  btn.removeEventListener("click", showAlert);
});
