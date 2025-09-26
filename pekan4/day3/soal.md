img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>

<div style="font-family: 'Arial', sans-serif;">

---

# Latihan Soal Local Storage (day 3 week 4 month 2)

## Soal Pertanyaan (5 Soal)

1. Apa fungsi `localStorage` dalam JavaScript?  
   _Clue: digunakan untuk menyimpan data dalam browser._

2. Apa perbedaan `localStorage` dengan `sessionStorage`?  
   _Clue: salah satunya hilang setelah tab/browser ditutup._

3. Bagaimana cara menyimpan data string ke `localStorage`?  
   _Clue: gunakan `.setItem(key, value)`._

4. Bagaimana cara mengambil data dari `localStorage`?  
   _Clue: gunakan `.getItem(key)`._

5. Bagaimana cara menghapus data tertentu di `localStorage`?  
   _Clue: gunakan `.removeItem(key)`._

---

## Soal Praktik (15 Soal)

6. Buat form input username, lalu simpan username ke `localStorage`.  
   _Clue: `localStorage.setItem("username", value)`._

7. Buat tombol yang jika diklik akan menampilkan data `username` dari `localStorage`.  
   _Clue: `localStorage.getItem("username")`._

8. Buat form login sederhana (username + password), lalu simpan datanya di `localStorage`.  
   _Clue: gabungkan `setItem` dengan event form._

9. Buat tombol logout yang menghapus data login dari `localStorage`.  
   _Clue: gunakan `removeItem("key")`._

10. Buat counter (angka naik setiap klik tombol), lalu simpan nilai counter di `localStorage` agar tidak hilang saat reload.  
    _Clue: `parseInt(localStorage.getItem("counter"))`._

11. Buat form pilihan tema (dark/light), lalu simpan pilihan user di `localStorage`.  
    _Clue: `localStorage.setItem("theme", "dark")`._

12. Buat halaman yang otomatis membaca `theme` dari `localStorage` dan menerapkan gaya sesuai.  
    _Clue: `if(localStorage.getItem("theme") === "dark")`._

13. Buat daftar belanja sederhana: ketika user input barang, simpan ke array, lalu taruh array itu di `localStorage`.  
    _Clue: `JSON.stringify()`._

14. Buat daftar belanja tadi agar saat reload data tetap muncul di halaman.  
    _Clue: `JSON.parse(localStorage.getItem("list"))`._

15. Buat tombol clear all yang menghapus seluruh data `localStorage`.  
    _Clue: gunakan `localStorage.clear()`._

16. Buat form biodata (nama, umur, email) lalu simpan datanya di `localStorage`.  
    _Clue: gunakan beberapa `setItem`._

17. Tampilkan biodata dari `localStorage` ke halaman setelah reload.  
    _Clue: gunakan `.getItem` di `window.onload`._

18. Buat form yang hanya bisa di-submit jika username belum pernah disimpan di `localStorage`.  
    _Clue: cek dengan `if(localStorage.getItem("username"))`._

19. Buat tombol "Ganti Username" yang mengganti data lama di `localStorage` dengan data baru.  
    _Clue: cukup `setItem` lagi dengan key yang sama._

20. Buat sistem sederhana "Remember Me" di login: kalau dicentang, simpan username di `localStorage`, kalau tidak, jangan simpan.  
    _Clue: gunakan `checkbox.checked`._
