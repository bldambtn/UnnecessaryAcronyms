document.addEventListener("DOMContentLoaded", () => {
  const newPostBtn = document.querySelector(".new-post-btn");
  const newPostForm = document.querySelector("#new-post-form");
  const editPostForm = document.querySelector("#edit-post-form");

  // Handle the new post button
  if (newPostBtn && newPostForm) {
    newPostBtn.addEventListener("click", (event) => {
      event.preventDefault();
      newPostForm.style.display = "block";
      editPostForm.style.display = "none";
      newPostBtn.style.display = "none";
    });

    newPostForm.addEventListener("submit", async (event) => {
      event.preventDefault();

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
          document.location.reload();
        } else {
          alert("Failed to create post.");
        }
      }
    });
  }

  // Handle the edit post link
  document.querySelectorAll(".edit-post-link").forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();

      const postId = event.target.getAttribute("data-id");

      // Fetch the post data to populate the form
      try {
        const response = await fetch(`/api/blogs/${postId}`);
        if (response.ok) {
          const data = await response.json();

          // Populate the form with the post data
          document.querySelector("#edit-post-title").value = data.title;
          document.querySelector("#edit-post-content").value = data.content;

          // Show the form
          editPostForm.style.display = "block";
          newPostForm.style.display = "none";

          // Handle update post
          document.querySelector("#update-post-btn").onclick = async () => {
            const updatedTitle = document
              .querySelector("#edit-post-title")
              .value.trim();
            const updatedContent = document
              .querySelector("#edit-post-content")
              .value.trim();

            if (updatedTitle && updatedContent) {
              const updateResponse = await fetch(`/api/blogs/${postId}`, {
                method: "PUT",
                body: JSON.stringify({
                  title: updatedTitle,
                  content: updatedContent,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              });

              if (updateResponse.ok) {
                document.location.reload();
              } else {
                alert("Failed to update post.");
              }
            }
          };

          // Handle delete post
          document.querySelector("#delete-post-btn").onclick = async () => {
            const deleteResponse = await fetch(`/api/blogs/${postId}`, {
              method: "DELETE",
            });

            if (deleteResponse.ok) {
              document.location.reload();
            } else {
              alert("Failed to delete post.");
            }
          };
        } else {
          console.error("Failed to fetch post data. Response not OK.");
          alert("Failed to fetch post data.");
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
        alert("An error occurred while fetching post data.");
      }
    });
  });
});
