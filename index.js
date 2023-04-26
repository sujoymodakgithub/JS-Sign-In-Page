let inputElementEl = document.getElementById("inputElement");
let passwordElementEl = document.getElementById("passwordElement");
let signInBtnEl = document.getElementById("signInBtn");
let messageTextEl = document.getElementById("messageText");

function signIn() {
  if (inputElement.value === "") {
    messageTextEl.textContent = "Please Enter Username";
  } else if (passwordElement.value === "") {
    messageTextEl.textContent = "Please Enter Password";
  } else {
    messageTextEl.textContent = "Welcome";
  }
}
