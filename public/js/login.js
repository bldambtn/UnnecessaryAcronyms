// Function to handle the login form submission
const loginFormHandler = async (event) => {
  // Prevent the default form submission behavior to handle it via JavaScript
  event.preventDefault();

  // Get the values from the email and password input fields, trimming any extra whitespace
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // Check if both email and password fields have values
  if (email && password) {
    // Send a POST request to the server to log in the user
    const response = await fetch("/api/users/login", {
      method: "POST", // Use the POST method to send data to the server
      body: JSON.stringify({ email, password }), // Convert the email and password into a JSON string for the request body
      headers: { "Content-Type": "application/json" }, // Set the content type to JSON
    });

    // If the server responds with a status of 200 (OK), redirect the user to the homepage
    if (response.ok) {
      document.location.replace("/"); // Redirect to the homepage on successful login
    } else {
      // If the response is not OK, display an alert to the user indicating the login attempt failed
      alert("Failed to log in.");
    }
  }
};

// Function to handle the signup form submission
const signupFormHandler = async (event) => {
  // Prevent the default form submission behavior to handle it via JavaScript
  event.preventDefault();

  // Get the values from the username, email, and password input fields, trimming any extra whitespace
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // Check if all fields (username, email, and password) have values
  if (username && email && password) {
    // Send a POST request to the server to create a new user account
    const response = await fetch("/api/users", {
      method: "POST", // Use the POST method to send data to the server
      body: JSON.stringify({ username, email, password }), // Convert the user data into a JSON string for the request body
      headers: { "Content-Type": "application/json" }, // Set the content type to JSON
    });

    // If the server responds with a status of 200 (OK), redirect the user to the homepage
    if (response.ok) {
      document.location.replace("/"); // Redirect to the homepage on successful signup
    } else {
      // If the response is not OK, display an alert to the user indicating the signup attempt failed
      alert("Failed to sign up.");
    }
  }
};

// Add an event listener to the login form that triggers the loginFormHandler function when the form is submitted
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

// Add an event listener to the signup form that triggers the signupFormHandler function when the form is submitted
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
