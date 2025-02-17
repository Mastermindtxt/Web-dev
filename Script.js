// Login Form Validation
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Hardcoded credentials (for demonstration only)
const validCredentials = {
  username: "admin",
  password: "password123"
};

// Single login handler
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === validCredentials.username && password === validCredentials.password) {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "secret.html";
  } else {
    errorMessage.textContent = "Invalid username or password!";
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000);
  }
});

// Dark Mode Toggle
document.getElementById("dark-mode-toggle")?.addEventListener("change", function() {
  document.body.classList.toggle("dark-mode");
});
