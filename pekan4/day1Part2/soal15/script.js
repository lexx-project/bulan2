const btn = document.getElementById("btn");

btn.addEventListener(
  "click",
  () => {
    alert("button di klik");
  },
  {
    once: true,
  }
);
