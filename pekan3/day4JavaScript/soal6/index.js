async function getData() {
  let result = [];
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    if (response.ok) {
      result.push(data);
    } else {
      throw new Error("Gagal Mengambil Data Dari Api");
    }
  } catch (err) {
    throw new Error(err.message);
  }

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    if (response.ok) {
      result.push(data);
    } else {
      throw new Error("Gagal Mengambil Data Dari Api");
    }
  } catch (err) {
    throw new Error(err.message);
  }
  return result;
}

getData()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err.message));
