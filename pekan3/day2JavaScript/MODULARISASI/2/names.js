let names = [];

function addName(newName) {
  names.push(newName);
}

function deleteName(name) {
  let found = false;
  for (let i = 0; i < names.length; i++) {
    if (name === names[i]) {
      names.splice(i, 1);
      found = true;
      break;
    }
  }
  if (!found) {
    console.log("Nama tidak ditemukan");
  }
}

function showAllName() {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

export { addName, deleteName, showAllName };
