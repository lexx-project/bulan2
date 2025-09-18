import { users } from "./users.js";

let user = users;

function login(username, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      return "Login Berhasil";
    }
  }

  return "Username Atau Password Kamu Salah";
}

function register(username, password, email) {
  const newUser = {
    username: username,
    password: password,
    email: email,
  };

  users.push(newUser);

  return "Registrasi Berhasil";
}

console.log(login("Budi", "admin123"));
console.log(register("Dono", "dono123", "dono@example.com"));
console.log(users);
