// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the elements
  const newPostBtn = document.querySelector(".new-post-btn");
  const newPostForm = document.querySelector("#new-post-form");

  // Show the form when "New Post" is clicked
  newPostBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    newPostForm.style.display = "block"; // Show the form
    newPostBtn.style.display = "none"; // Hide the "New Post" button
  });

  // Handle the form submission
  newPostForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get the form data
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();

    if (title && content) {
      // Send POST request to create a new blog post
      const response = await fetch("/api/blogs", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.reload(); // Reload the page to display the new post
      } else {
        alert("Failed to create post.");
      }
    }
  });
});
