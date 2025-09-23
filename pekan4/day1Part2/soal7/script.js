const area = document.getElementById("area");

area.onmouseout = function () {
  area.style.backgroundColor = "red";
};
area.onmouseover = () => {
  area.style.backgroundColor = "blue";
};
