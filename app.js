const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(something) {
    something.preventDefault();
    //const userName = loginInput.value;
    console.log(something)
}

loginForm.addEventListener("submit", onLoginSubmit)