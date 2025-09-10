const usernameAdmin = "admin123";
const passwordAdmin = "admin123";

let inputUsername = document.getElementById("username");
let inputPassword = document.getElementById("password");
let submitButton = document.getElementById("loginButton");

if (submitButton) {
  submitButton.addEventListener("click", login);
}

let usernameRegis = document.getElementById("usernameRegis");
let passwordRegis = document.getElementById("passwordRegis");
let emailRegis = document.getElementById("emailRegis");
let phoneRegis = document.getElementById("phoneRegis");
let confirmPasswordRegis = document.getElementById("confirmPassword");
let registerButton = document.getElementById("registerButton");

let showUserButton = document.getElementById("showUserButton");

let user = JSON.parse(sessionStorage.getItem("user")) || [
  {
    username: "a",
    password: "a",
    email: "a",
    phone: "a",
  },
];

function login(event) {
  event.preventDefault();

  let isUser = user.find((data) => {
    return (
      inputUsername.value === data.username &&
      inputPassword.value === data.password
    );
  });

  if (isUser) {
    window.location.href = "user.html";
  } else if (
    inputUsername.value === usernameAdmin &&
    inputPassword.value === passwordAdmin
  ) {
    window.location.href = "admin.html";
  } else {
    alert("Login Gagal");
  }
}

function register(event) {
  event.preventDefault();

  let username = usernameRegis.value;
  let password = passwordRegis.value;
  let confirmPassword = confirmPasswordRegis.value;
  let email = emailRegis.value;
  let phone = phoneRegis.value;

  if (
    username &&
    password &&
    confirmPassword &&
    password === confirmPassword &&
    email &&
    phone
  ) {
    user.push({ username, password, email, phone });
    sessionStorage.setItem("user", JSON.stringify(user));
    alert("Register Berhasil");
    console.log(user);
  } else {
    alert("Register Gagal");
  }
}

if (registerButton) {
  registerButton.addEventListener("click", register);
}

function showUser(event) {
  event.preventDefault();
  const userList = document.getElementById("userList");
  userList.innerHTML = "";
  if (user && user.length > 0) {
    user.forEach((data) => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `
        <p>Username: ${data.username}</p>
        Nama: ${data.username}<br>
        Email: ${data.email}<br>
        Nomor Telepon: ${data.phone}
      `;
      userList.appendChild(userDiv);
    });
  } else {
    userList.innerHTML = "<p>Tidak ada user yang terdaftar.</p>";
  }
}

if (showUserButton) {
  showUserButton.addEventListener("click", showUser);
}

function deleteUser(event) {
  event.preventDefault();
  let userName = document.getElementById("searchInput").value;
  if (userName) {
    const filteredUser = user.filter((data) => data.username !== userName);
    user = filteredUser;
    sessionStorage.setItem("user", JSON.stringify(user));
    alert("User berhasil dihapus");
  } else {
    alert("User tidak ditemukan");
  }
}

let deleteButton = document.getElementById("deleteUserButton");

if (deleteButton) {
  deleteButton.addEventListener("click", deleteUser);
}
