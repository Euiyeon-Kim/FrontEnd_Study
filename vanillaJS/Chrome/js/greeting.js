const NAME_KEY = "name";
const HIDDEN_CLASS = "hidden";

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const savedUserName = localStorage.getItem(NAME_KEY);
if (savedUserName == null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", handleSubmit);
} else {
    paintGreeting(savedUserName);
}

function paintGreeting(name) {
    greeting.innerText = `Hello ${name}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

function handleSubmit(event) {
    // Get user name and prevent default operation
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const name = loginInput.value;

    // Show greeting message
    paintGreeting(name);
    localStorage.setItem("name", name);
}
