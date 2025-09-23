async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Gagal Mengambil Data Dari Api");
    }
  } catch (err) {
    throw new Error(err.message);
  }
}

getData()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });
