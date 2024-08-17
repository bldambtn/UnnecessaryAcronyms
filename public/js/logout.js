// Function to handle the user logout process
const logout = async () => {
  // Send a POST request to the server to log out the user
  const response = await fetch("/api/users/logout", {
    method: "POST", // Use the POST method to initiate the logout process on the server
    headers: { "Content-Type": "application/json" }, // Set the content type to JSON
  });

  // If the server responds with a status of 200 (OK), redirect the user to the homepage
  if (response.ok) {
    document.location.replace("/"); // Redirect to the homepage after successful logout
  } else {
    // If the response is not OK, display an alert to the user indicating the logout attempt failed
    alert("Failed to log out.");
  }
};

// Add an event listener to the element with the ID 'logout' that triggers the logout function
// when the element is clicked. This is typically a logout button or link on the page.
document.querySelector("#logout").addEventListener("click", logout);
