async function todoFetch() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/5"
    );
    const data = await response.json();

    if (data.completed === true) {
      console.log("Selesai");
    } else {
      throw new Error("Belum Selesai");
    }
  } catch (err) {
    console.log(err.message);
  }
}

todoFetch();
