// Get the logout button element
const logoutButton = document.querySelector("#logout");

// Check if the logout button exists before adding the event listener
if (logoutButton) {
  logoutButton.addEventListener("click", (event) => {
    event.preventDefault();
    logout();
  });
}

// Function to handle the logout process
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // Redirect to the homepage on success
    document.location.replace("/");
  } else {
    // Alert on failure
    alert("Failed to log out.");
  }
};