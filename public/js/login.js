// Handle login form submission
const loginFormHandler = async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get email and password values
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send POST request to log in
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/"); // Redirect on success
    } else {
      alert("Failed to log in."); // Alert on failure
    }
  }
};

// Handle signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get username, email, and password values
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    // Send POST request to sign up
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/"); // Redirect on success
    } else {
      alert("Failed to sign up."); // Alert on failure
    }
  }
};

// Add event listener for login form submission
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

// Add event listener for signup form submission
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
