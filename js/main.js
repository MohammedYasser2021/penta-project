// login form
let formLogin = document.querySelector(".form_login");
let formLoginBtn = document.querySelector(".login_nav_btn");
let formCloseBtn = document.querySelector(".form-close");
let loginUsername = document.querySelector("#login_username");
let loginPassword = document.querySelector("#login_password");
let loginError = document.querySelector(".login-error");
let navLinks = document.querySelectorAll(".nav-link");

const username = "mohammed";
const password = "1234";

if (formLoginBtn) {
  formLoginBtn.addEventListener("click", () => {
    formLogin.classList.remove("hide-form");
    formLogin.classList.add("show-form");
  });
}
if (formCloseBtn) {
  formCloseBtn.addEventListener("click", () => {
    formLogin.classList.remove("show-form");
    formLogin.classList.add("hide-form");
  });
}
if (formLogin) {
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    if (loginUsername.value === username && loginPassword.value === password) {
      loginError.classList.remove("login-error-hide");
      window.location = "home.html";
    } else {
      loginError.classList.add("login-error-show");
    }
    loginUsername.value = "";
    loginPassword.value = "";
  });
}

navLinks.forEach((ele) => {
  ele.addEventListener("click", () => {
    // Remove 'active' class from all elements in navLinks
    navLinks.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });

    // Add 'active' class to the clicked element (ele)
    ele.classList.add("active");
  });
});

// add users

let allUsers = [];

let formAddUser = document.querySelector(".form-add-user");
let formAddUserUsername = document.querySelector("#add_username");
let formAddUserPassword = document.querySelector("#add_password");
let formAddUserFile = document.querySelector("#add_user_image");
let formAddUserSelect = document.querySelector("#select_type");
let useraddedtext = document.querySelector(".user_added_text");
let useraddedtextBtn = document.querySelector(".user_added_text_close");

formAddUser.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = { username: "", password: "", imgSrc: "", type: "" };
  user.username = formAddUserUsername.value;
  user.password = formAddUserPassword.value;
  user.imgSrc = formAddUserFile.value;
  user.type = formAddUserSelect.value;
  allUsers.push(user);
  useraddedtext.classList.add("show_added_text");
  formAddUserUsername.value = "";
  formAddUserFile.value = "";
  formAddUserPassword.value = "";
  formAddUserSelect.value = "Add Type";
  console.log(allUsers);
});
useraddedtextBtn.addEventListener("click", () => {
  useraddedtext.classList.remove("show_added_text");
});
