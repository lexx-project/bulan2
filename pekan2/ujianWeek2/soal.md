<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>


# 🌟 بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
- Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang

***

## Doa Sebelum Menuntut Ilmu
اللَّهُمَّ انْفَعْنَا بِمَا عَلَّمْتَنَا وَعَلِّمْنَا مَا يَنْفَعُنَا وَزِدْنَا عِلْمًا

"Ya Allah, manfaatkanlah ilmu yang telah Engkau ajarkan kepada kami, ajarkanlah kami ilmu yang bermanfaat, dan tambahkanlah kami ilmu."

 اللّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً

"Ya Allah, tidak ada kemudahan kecuali yang Engkau jadikan mudah, dan Engkau menjadikan kesulitan itu mudah jika Engkau kehendaki."

***

## Memorandum of Understanding (MOU) Evaluasi Mingguan JavaScript

### Perjanjian Integritas Akademik

**Dengan ini saya menyatakan bahwa:**

1. **Larangan Penggunaan Artificial Intelligence (AI):**
    - 100% harus berdasarkan pemahaman dan kemampuan pribadi
    - Hargai pemahaman anda sejauh ini jangan sampai AI yang ambil alih
    - Ingat client percaya pada kemampuan ANDA, bukan AI. 
    - Bangun kepercayaan dengan kemampuan autentik!
    - AI BUKAN joki ujian! Penggunaan akan mudah terdeteksi.
2. **Larangan Kerjasama dan Plagiarisme:**
    - Dilarang keras menyalin atau mengadaptasi kode dari teman sekelas
    - Setiap jawaban harus hasil pemikiran dan implementasi pribadi
    - Diskusi konsep umum diperbolehkan, namun implementasi harus mandiri
3. **Komitmen Pembelajaran:**
    - Mengerjakan dengan sungguh-sungguh sebagai refleksi pemahaman materi
    - Memberikan dokumentasi yang jelas pada setiap solusi
    - Menghargai proses pembelajaran sebagai investasi kompetensi jangka panjang

**Pelanggaran terhadap MOU ini akan berakibat pada:**

- Pengurangan nilai signifikan (hingga 50%)
- Evaluasi ulang dengan tingkat kesulitan lebih tinggi
- Pembinaan khusus untuk menguatkan integritas akademik

***



# 📝 Studi Kasus Ujian JavaScript: Aplikasi Manajemen Perpustakaan Santri

## 📖 Cerita
Pondok pesantrenmu memiliki sebuah **perpustakaan kecil** untuk santri.  
Selama ini data buku hanya dicatat di kertas, sehingga sering hilang atau rusak.  

Pengurus meminta kamu (sebagai programmer santri) untuk membuat sebuah aplikasi sederhana berbasis JavaScript yang bisa dijalankan lewat **terminal / browser console** untuk **mengelola data buku**.  

Aplikasi harus bisa melakukan **CRUD (Create, Read, Update, Delete)** terhadap data buku, dengan syarat-syarat berikut:  

---

## 🎯 Ketentuan Teknis

### 1. Struktur Data Buku
Simpan data buku dalam bentuk **array of object**.  
Setiap buku minimal punya properti:

```js
{
  id: number,         // id unik, auto increment
  judul: string,      // judul buku
  penulis: string,    // nama penulis
  tahun: number,      // tahun terbit
  tersedia: boolean   // status ketersediaan
}
```

---

### 2. Fitur CRUD

- **Tambah Buku**  
  Fungsi `tambahBuku(judul, penulis, tahun)` → menambahkan data buku baru ke array.

- **Lihat Semua Buku**  
  Fungsi `lihatBuku()` → menampilkan daftar semua buku dalam format rapi (loop).

- **Update Buku**  
  Fungsi `updateBuku(id, dataBaru)` → mengupdate data buku tertentu.  
  Gunakan **destructuring** & **spread** agar lebih efisien.

- **Hapus Buku**  
  Fungsi `hapusBuku(id)` → menghapus buku berdasarkan id.

---

### 3. Fitur Tambahan (Opsional, tapi menantang)
- Cari buku berdasarkan judul/penulis.  
- Tampilkan hanya buku yang tersedia (`tersedia === true`).  
- Gunakan **rest parameter** kalau ingin menambahkan banyak buku sekaligus.

---

### 4. Modularisasi
Pisahkan kode ke dalam file:
- `buku.js` → berisi array buku dan fungsi CRUD.
- `index.js` → file utama untuk menjalankan aplikasi.

---

### 5. Penggunaan Percabangan & Operator
- Saat menambahkan buku, pastikan judul dan penulis tidak kosong (**validasi**).
- Saat update, cek dulu apakah id ada.  
  Jika tidak ada → tampilkan pesan **error**.

---

## 📌 Contoh Alur Eksekusi (Simulasi)

```js
tambahBuku("Fiqh Sunnah", "Sayyid Sabiq", 1995);
tambahBuku("Tafsir Ibnu Katsir", "Ibnu Katsir", 2000);

lihatBuku();
// Output: Daftar buku dalam bentuk tabel/list

updateBuku(1, { tersedia: false });
lihatBuku();

hapusBuku(2);
lihatBuku();
```

---

## 🎯 Materi yang Diuji
- Variabel & tipe data  
- Function  
- Loop  
- Array & object  
- Percabangan  
- Operator  
- Destructuring, spread, rest  
- Modularisasi  