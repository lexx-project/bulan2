let count = 10;
const intervalId = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log("MBLEDOSS");
    clearInterval(intervalId);
  }
}, 1000);
