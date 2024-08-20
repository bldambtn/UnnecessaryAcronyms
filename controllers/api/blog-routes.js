const router = require("express").Router();
const { Blog, User, Comment } = require("../../models"); // Import User and Comment models
const authMiddleware = require("../../utils/auth");

// Route to create a new blog post
router.post("/", authMiddleware, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to fetch a single blog post by ID
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          include: [User], // Ensure comments are included with associated user
        },
      ],
    });

    if (!blogData) {
      res.status(404).json({ message: "No blog found with this id!" });
      return;
    }

    const blog = blogData.get({ plain: true });

    res.render("blog", {
      blog,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error("Error fetching blog post:", err);
    res.status(500).json(err);
  }
});

// Route to delete a blog post by ID
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: "No blog found with this id!" });
      return;
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;