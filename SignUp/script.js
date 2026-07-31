const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{11}$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Mobile number must be exactly 11 digits.");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.some(function (user) {
            return user.email === email;
        });

        if (exists) {
            alert("Email already registered.");
            return;
        }

        users.push({
            name: name,
            email: email,
            phone: phone,
            password: password
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful!");

        signupForm.reset();

        window.location.href = "login.html";
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(function (item) {
            return item.email === email && item.password === password;
        });

        if (user) {
            alert("Login successful!");
        } else {
            alert("Invalid email or password.");
        }

        loginForm.reset();
    });
}
