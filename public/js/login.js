const loginFormHandler = async(event) => {
    event.preventDefault();

    const email = document.querySelector("#login-email").value.trim();
    const password = document.querySelector("#login-password").value.trim();
    console.log("email, password", email, password);

    if (email && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to log in.");
        }
    }
};

const signupFormHandler = async(event) => {
    event.preventDefault();

    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    console.log("TEST --------", username, email, password);
    if (username && email && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to sign up.");
        }
    }
};

if (document.getElementById("login-btn")) {
    document
        .getElementById("login-btn")
        .addEventListener("click", loginFormHandler);

    document
        .getElementById("signup-btn")
        .addEventListener("click", signupFormHandler);
}