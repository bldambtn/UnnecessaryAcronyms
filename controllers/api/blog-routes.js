// Create a new router instance
const router = require("express").Router();

// Import the Blog model
const { Blog } = require("../../models");

// Import authentication middleware
const authMiddleware = require("../../utils/auth");

// Apply authentication middleware to all routes
router.use(authMiddleware);

// Route to create a new blog post
router.post("/", async (req, res) => {
  try {
    // Use data from the request body and associate post with the logged-in user
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // Respond with the created blog post
    res.status(200).json(newBlog);
  } catch (err) {
    // Respond with error if creation fails
    res.status(400).json(err);
  }
});

// Route to delete a blog post by ID
router.delete("/:id", async (req, res) => {
  try {
    // Find post by ID and ensure user owns the post
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    // Respond if no post found
    if (!blogData) {
      res.status(404).json({ message: "No blog found with this id!" });
      return;
    }
    // Respond with success message
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    // Respond with error if deletion fails
    res.status(500).json(err);
  }
});

// Export the router
module.exports = router;