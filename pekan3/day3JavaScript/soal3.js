const userName = "Lexx";
const userEmail = "lexx@gmail.com";

function checkName(name) {
  return new Promise((resolve, reject) => {
    if (name === userName) {
      resolve("Username Benar");
    } else {
      reject("Username Salah");
    }
  });
}

function checkEmail(email) {
  return new Promise((resolve, reject) => {
    if (email === userEmail) {
      resolve("Email Benar");
    } else {
      reject("Email Salah");
    }
  });
}

const nama = "Lexx";
const email = "lexx@gmail.com";

checkName(nama)
  .then((result) => {
    console.log(result);
    return checkEmail(email);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
