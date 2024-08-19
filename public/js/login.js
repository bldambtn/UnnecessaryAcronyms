// Handle login form submission
const loginFormHandler = async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get username and password values
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    // Send POST request to log in
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); // Redirect on success
    } else {
      alert("Failed to log in."); // Alert on failure
    }
  } else {
    alert("Please enter both username and password."); // Alert if missing
  }
};

// Add event listener for login form submission
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
