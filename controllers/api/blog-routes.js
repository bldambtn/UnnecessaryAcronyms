const router = require("express").Router();
const { Blog } = require("../../models");
const authMiddleware = require("../../utils/auth");

// Route to create a new blog post
router.post("/", authMiddleware, async (req, res) => {
  try {
    // Create a new blog post with data from the request body and associate it with the logged-in user
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // Respond with the created blog post
    res.status(200).json(newBlog);
  } catch (err) {
    // Respond with an error if creation fails
    res.status(400).json(err);
  }
});

// Route to update an existing blog post by ID
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    // Update the blog post with the given ID if it belongs to the logged-in user
    const updatedBlog = await Blog.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    // If no blog post is found with the given ID, respond with a 404 error
    if (!updatedBlog[0]) {
      res.status(404).json({ message: "No blog found with this id!" });
      return;
    }

    // Respond with the updated blog post
    res.status(200).json(updatedBlog);
  } catch (err) {
    // Respond with a server error if update fails
    res.status(500).json(err);
  }
});

// controllers/api/blog-routes.js
router.get("/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.render("blog", {
      blog,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Route to delete a blog post by ID
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    // Delete the blog post with the given ID if it belongs to the logged-in user
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    // If no blog post is found with the given ID, respond with a 404 error
    if (!blogData) {
      res.status(404).json({ message: "No blog found with this id!" });
      return;
    }

    // Respond with a success message
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    // Respond with a server error if deletion fails
    res.status(500).json(err);
  }
});

module.exports = router;