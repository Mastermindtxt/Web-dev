// Login Form Validation
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Hardcoded credentials (for demonstration purposes only)
const validUsername = "admin";
const validPassword = "password123";

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === validUsername && password === validPassword) {
    // Redirect to the secret page
    window.location.href = "secret.html";
  } else {
    // Show error message
    errorMessage.textContent = "Invalid username or password.";
    errorMessage.style.display = "block";
  }
});