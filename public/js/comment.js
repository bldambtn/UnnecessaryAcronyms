document
  .querySelector("#comment-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const comment_text = document.querySelector("#comment-text").value.trim();
    const blog_id = window.location.pathname.split("/").pop();

    if (comment_text) {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ comment_text, blog_id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.statusText); // Log the response status

      if (response.ok) {
        document.location.reload(); // Reload the page to display the new comment
        console.log("Comment added successfully!");
      } else {
        alert("Failed to add comment.");
      }
    }
  });