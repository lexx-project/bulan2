async function get3Users() {
  try {
    for (let i = 0; i <= 3; i++) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${i}`
      );
      const data = await response.json();
      console.log(data);
    }
  } catch (err) {
    console.error(err.message);
  }
}

get3Users();
