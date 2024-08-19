// Handle user logout
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/"); // Redirect to the homepage on success
  } else {
    alert("Failed to log out."); // Alert on failure
  }
};

// Add event listener for logout link
document.querySelector("#logout").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default anchor behavior
  logout(); // Call the logout function
});
