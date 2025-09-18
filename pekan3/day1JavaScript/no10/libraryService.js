import { books } from "./books.js";

function getAllBooks() {
  return books;
}

function addBook(dataBook) {
  books.push(dataBook);
}

function findBookByTittle(title) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].judul.toLocaleLowerCase() === title.toLocaleLowerCase()) {
      return `Buku Di Temukan Berikut Data Nya : 
      ID : ${books[i].id}  
      Judul : ${books[i].judul}
      Penulis : ${books[i].penulis}
      Tahun : ${books[i].tahun}
      `;
    } else {
      return "Buku Tidak Di Temukan";
    }
  }
}

console.log(findBookByTittle("pulang"));

// addBook({
//   id: 2,
//   judul: "Bumi",
//   penulis: "Tere Liye",
//   tahun: 2020,
// });
// console.log(getAllBooks());
