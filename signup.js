document.addEventListener("DOMContentLoaded", function () {
    let passwordFields = document.querySelectorAll(".password-field");
    passwordFields.forEach((field) => {
        let toggleBtn = document.createElement("span");
        toggleBtn.innerText = "👁️";
        toggleBtn.classList.add("toggle-password");
        field.parentElement.appendChild(toggleBtn);
        toggleBtn.addEventListener("click", function () {
            if (field.type === "password") {
                field.type = "text";
                toggleBtn.innerText = "🙈";
            } else {
                field.type = "password";
                toggleBtn.innerText = "👁️";
            }
        });
    });
    function validateForm(event, formType) {
        event.preventDefault();
        let emailInput = document.querySelector("#email");
        let usernameInput = document.querySelector("#username");
        let passwordInput = document.querySelector("#password");
        let errorMessage = document.querySelector(".error-message");
        if (!emailInput.value.includes("@") || emailInput.value.length < 5 || !emailInput.value.includes(".")) {
            errorMessage.innerText = "Please enter a valid email address!";
            return false;
        }
        if (formType === "signup") {
            if (usernameInput.value.length < 3) {
                errorMessage.innerText = "Username must be at least 3 characters!";
                return false;
            }
            if (passwordInput.value.length < 6) {
                errorMessage.innerText = "Password must be at least 6 characters!";
                return false;
            }
            localStorage.setItem("email", emailInput.value);
            localStorage.setItem("username", usernameInput.value);
            localStorage.setItem("password", passwordInput.value);
            alert("Signup Successful! Redirecting to login...");
            window.location.href = "login.html";
        } else if (formType === "login") {
            let storedEmail = localStorage.getItem("email");
            let storedPassword = localStorage.getItem("password");

            if (emailInput.value === storedEmail && passwordInput.value === storedPassword) {
                alert("Login Successful! Redirecting...");
                window.location.href = "loggedin.html"; 
            } else {
                errorMessage.innerText = "Invalid email or password!";
            }
        }
    }
    let loginForm = document.querySelector("#login-form");
    let signupForm = document.querySelector("#signup-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            validateForm(event, "login");
        });
    }
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            validateForm(event, "signup");
        });
    }
});