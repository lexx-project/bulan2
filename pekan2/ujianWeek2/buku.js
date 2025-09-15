// DI SINI SAYA TIDAK MEMAKAI AI SAMA SEKALI, JIKA ADA METHOD YANG BELUM DI PELAJARI DI SINI, ITU SAYA TAHU DAN SAYA PELAJARI SENDIRI, DAN JUGA SAYA MEMAKAI READLINE-SYNC INI SUDAH TANYA MAS DANI DAN KATANYA BOLEH, KARENA KALAU TIDAK MEMAKAI READLINE-SYNC JADINYA GITU GITU AJA WKWKWKWK

let dataBook = [
  {
    id: 1,
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    tahun: 2024,
    tersedia: true,
  },
];

function addBook(title, author, year) {
  if (!title || !author) {
    return "Judul dan penulis tidak boleh kosong.";
  } else {
    const newBook = {
      id: dataBook.length + 1,
      judul: title,
      penulis: author,
      tahun: year,
      tersedia: true,
    };
    dataBook.push(newBook);
    return `Buku ${title} Berhasil Di Tambah`;
  }
}

function showAllBook() {
  dataBook.forEach((item) => {
    console.log(
      `id: ${item.id}, judul: ${item.judul}, penulis: ${item.penulis}, tahun: ${item.tahun}, tersedia: ${item.tersedia}`
    );
  });
}

function updateDataBook(id, newData) {
  let found = false;
  dataBook.forEach((item, index) => {
    if (item.id === id) {
      dataBook[index] = {
        id: newData.id,
        judul: newData.judul,
        penulis: newData.penulis,
        tahun: newData.tahun,
        tersedia: newData.tersedia,
      };
      found = true;
    }
  });
  if (found === true) {
    return `Buku Dengan Id: ${id} Berhasil Di Update`;
  } else {
    return "Id Tidak Di temukan";
  }
}

function deleteBook(id) {
  dataBook.forEach((item, index) => {
    if (item.id === id) {
      dataBook.splice(index, 1);
    }
  });
  return `Buku Dengan Id: ${id} Berhasil Di hapus`;
}

function findBook(title) {
  const foundBook = dataBook.find(
    (item) => item.judul.toLocaleLowerCase() === title.toLocaleLowerCase()
  );
  if (foundBook) {
    return `Buku Dengan Judul ${title} Ditemukan, Berikut Data Data Nya: \nId: ${foundBook.id}, \nJudul: ${foundBook.judul}, \nPenulis: ${foundBook.penulis}, \nTahun: ${foundBook.tahun}, \nTersedia: ${foundBook.tersedia}`;
  } else {
    return `Buku Tidak Di Temukan`;
  }
}

function showAvailableBook() {
  const available = dataBook.filter((item) => {
    return item.tersedia === true;
  });
  return available;
}

function addBooks(newBooks) {
  return [...dataBook, newBooks];
}

export {
  dataBook,
  addBook,
  showAllBook,
  updateDataBook,
  deleteBook,
  findBook,
  showAvailableBook,
  addBooks,
};
