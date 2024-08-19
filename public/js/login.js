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

let idleTime = 0;
const maxIdleTime = 15 * 60 * 1000; // 15 minutes

const resetIdleTimer = () => {
  idleTime = 0; // Reset the idle time counter
};

const checkIdleTime = () => {
  idleTime += 1000; // Increment the idle time counter by 1 second

  if (idleTime >= maxIdleTime) {
    alert("You have been idle for too long. Logging out...");

    // Make a request to the logout route
    fetch("/logout")
      .then(() => {
        // After logout, redirect to the login page
        document.location.replace("/login");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  }
};

// Reset the idle timer on user interaction
window.onload = resetIdleTimer;
window.onmousemove = resetIdleTimer;
window.onkeydown = resetIdleTimer;
window.ontouchstart = resetIdleTimer; // For mobile touch events

// Check the idle time every second
setInterval(checkIdleTime, 1000);

// Add event listener for login form submission if the form exists
const loginForm = document.querySelector(".login-form");

if (loginForm) {
  loginForm.addEventListener("submit", loginFormHandler);
}
