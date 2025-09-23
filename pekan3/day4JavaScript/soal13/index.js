async function mbohManut() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/5"
    );
    const data = await response.json();
    try {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  } catch (err) {
    console.log("Error:", err.message);
  }
}

mbohManut();
