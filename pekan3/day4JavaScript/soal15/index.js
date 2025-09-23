function delayFetch(url, ms) {
  setTimeout(async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }, ms);
}

delayFetch("https://jsonplaceholder.typicode.com/todos/1", 2000);
