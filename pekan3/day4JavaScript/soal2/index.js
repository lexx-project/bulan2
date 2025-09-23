async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    if (response.ok) {
      if (data.length > 50) {
        console.log("Data Terlalu Banyak");
      } else {
        console.log(data);
      }
    } else {
      throw new Error("Data not found");
    }
  } catch (err) {
    console.log(err.message);
  }
}

getData();
