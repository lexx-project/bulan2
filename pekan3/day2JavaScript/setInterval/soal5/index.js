let count = 0;
const intervalId = setInterval(() => {
  if (count <= 10) {
    console.log(count);
    count += 2;
  } else {
    clearInterval(intervalId);
  }
}, 1000);
