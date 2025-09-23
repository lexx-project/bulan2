async function getData() {
  try {
    const res = await fetch("mbohsembarang.com");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Gagal Mengambil Data Dari Api : " + err.message);
  }
}

getData();
