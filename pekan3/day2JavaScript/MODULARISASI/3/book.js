let books = [
  {
    judul: "Pulang",
    penulis: "Tere Liye",
    tahun: 2024,
  },
];

function addBook(newBook) {
  books.push(newBook);
}

function findBook(title) {
  for (let i = 0; i < books.length; i++) {
    if (title.toLowerCase() === books[i].judul.toLowerCase()) {
      return `Buku Di Temukan : ${books[i].judul} - ${books[i].penulis} (${books[i].tahun})`;
    } else {
      return "Buku Tidak Di Temukan";
    }
  }
}

function deleteBook(title) {
  for (let i = 0; i < books.length; i++) {
    if (title.toLowerCase() === books[i].judul.toLowerCase()) {
      books.splice(i, 1);
      return "Buku berhasil dihapus";
    }
  }
  return "Buku tidak ditemukan";
}

export { addBook, findBook, deleteBook };
