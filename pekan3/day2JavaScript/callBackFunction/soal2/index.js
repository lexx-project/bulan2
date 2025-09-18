function sapa(nama, callback) {
  return callback(nama);
}

function sapaan(nama) {
  return `halo ${nama}!`;
}

console.log(sapa("lexx", sapaan));
