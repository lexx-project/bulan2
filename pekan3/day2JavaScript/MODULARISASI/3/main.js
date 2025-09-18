import { addBook, findBook, deleteBook } from "./book.js";

addBook({ judul: "Laskar Pelangi", penulis: "Andrea Hirata", tahun: 2005 });

console.log(findBook("Pulang"));
console.log(deleteBook("Pulang"));
console.log(findBook("Pulang"));
