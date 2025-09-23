function tampilkanData() {
  const nama = "Lxx";
  const umur = 17;
  document.getElementById(
    "biodata"
  ).innerHTML = `Nama: ${nama}<br>Umur: ${umur}`;
}

function gantiWarna() {
  document.getElementById("biodata").style.color = "red";
}
