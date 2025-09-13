import { student } from "./data.js";

function addStudent(newStudent) {
  student.push(newStudent);
  return student;
}

function showAllStudent() {
  for (let key in student) {
    const { id, nama, kelas, nilai } = student[key]; // use object distructuring for show data (fitur tambahan yang terakhir)
    console.log(
      `Siswa Ke : ${id}, Nama : ${nama}, Kelas : ${kelas}, Nilai : ${nilai}`
    );
  }
}

function updateDataStudent(id, newData) {
  for (let key in student) {
    if (student[key].id === id) {
      student[key] = {
        id: newData.id,
        nama: newData.nama,
        kelas: newData.kelas,
        nilai: newData.nilai,
      };
    }
  }
  return student;
}

function deleteDataStudent(id) {
  for (let key in student) {
    if (student[key].id === id) {
      student.splice(key, 1);
    }
  }
  return student;
}

function findStudent(name) {
  for (let key in student) {
    if (student[key].nama.toLowerCase() === name.toLowerCase()) {
      console.log(
        `Siswa Di Temukan Dengan Nama : ${student[key].nama}, Kelas Di : ${student[key].kelas}, Dengan Nilai : ${student[key].nilai}`
      );
    }
  }
}

findStudent("ali");

function calculateAverage() {
  let total = 0;

  for (let key in student) {
    total += student[key].nilai;
  }
  return total;
}

export {
  addStudent,
  showAllStudent,
  updateDataStudent,
  deleteDataStudent,
  findStudent,
  calculateAverage,
};
