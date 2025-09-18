import fs from "fs";

const user = JSON.parse(fs.readFileSync("./user.json"));

function getAllUser() {
  for (let i = 0; i < user.length; i++) {
    console.log(`Nama: ${user[i].username}, Email: ${user[i].email}`);
  }
}

function getUserById(Id) {
  for (let i = 0; i < user.length; i++) {
    if (Id === user[i].id) {
      console.log(`Id Ditemukan: ${user[i].username}, Email: ${user[i].email}`);
      return;
    }
  }
  console.log("Id Tidak Ditemukan");
}

getUserById(3);
// getAllUser();
