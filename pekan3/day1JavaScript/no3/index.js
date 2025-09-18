import fs from "fs";
import { formatRupiah } from "../no4/helper.js";

const produk = JSON.parse(fs.readFileSync("./produk.json"));

function tampilkanProduk() {
  for (let i = 0; i < produk.length; i++) {
    console.log(
      `Produk: ${produk[i].nama}, Harga: ${formatRupiah(produk[i].harga)}`
    );
  }
}

tampilkanProduk();
