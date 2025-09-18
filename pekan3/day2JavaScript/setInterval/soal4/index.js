let loading = "Loading";
let count = 0;
const intervalId = setInterval(() => {
  loading += ".";
  console.log(loading);
  count++;
  if (count === 5) {
    clearInterval(intervalId);
    console.log("Done!");
  }
}, 1000);
