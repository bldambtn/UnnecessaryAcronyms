// Handle signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get email, username, and password values
  const email = document.querySelector("#email-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (email && username && password) {
    // Send POST request to sign up
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/"); // Redirect on success
    } else {
      alert("Failed to sign up."); // Alert on failure
    }
  }
};

// Add event listener for signup form submission
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
