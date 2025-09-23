async function getPostById(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    if (id < 100) {
      console.log(data);
    } else {
      throw new Error("Post not found");
    }
  } catch (err) {
    console.log(err.message);
  }
}

getPostById(111);
