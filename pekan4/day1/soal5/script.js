const paragraf = document.querySelectorAll(".teks");

for (let i = 0; i < paragraf.length; i++) {
  paragraf[i].innerText = `Teks Ke : ${i + 1}`;
}
