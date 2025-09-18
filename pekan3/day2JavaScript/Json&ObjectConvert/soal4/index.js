let dataSiswa = `[
  {
    "nama": "Budi",
    "kelas": "X",
    "nilai": 85
  },
  {
    "nama": "Dono",
    "kelas": "XI",
    "nilai": 92
  },
  {
    "nama": "Asep",
    "kelas": "IX",
    "nilai": 58
  },
  {
    "nama": "Ani",
    "kelas": "X",
    "nilai": 60
  },
  {
    "nama": "Siti",
    "kelas": "XII",
    "nilai": 88
  }
]`;

let data = JSON.parse(dataSiswa);

function nilaiSiswaDiatas75() {
  return data.filter((siswa) => siswa.nilai > 75);
}

console.log(nilaiSiswaDiatas75());
