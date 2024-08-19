document.addEventListener("DOMContentLoaded", () => {
  const newPostBtn = document.querySelector(".new-post-btn");
  const newPostForm = document.querySelector("#new-post-form");

  if (newPostBtn && newPostForm) {
    // Show the form when "New Post" is clicked
    newPostBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      newPostForm.style.display = "block"; // Show the form
      newPostBtn.style.display = "none"; // Hide the "New Post" button
    });

    // Handle the form submission
    newPostForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form submission

      const title = document.querySelector("#post-title").value.trim();
      const content = document.querySelector("#post-content").value.trim();

      if (title && content) {
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
  }
});
