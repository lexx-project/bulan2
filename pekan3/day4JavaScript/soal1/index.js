async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    } else {
      throw new Error("Data not found");
    }
  } catch (err) {
    console.log(err.message);
  }
}

getUser();
