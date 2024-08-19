// Create a new router instance
const router = require("express").Router();

// Import the Blog and User models
const { Blog, User } = require("../models");

// Route to get all blog posts and render the homepage
router.get("/", async (req, res) => {
  try {
    // Retrieve all blog posts, including the username of the post creator
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // Serialize the data to make it easier to pass to the template
    const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));

    // Render the homepage template, passing in the blogs and login status
    res.render("homepage", {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err); // Log any errors
    res.status(500).json(err); // Respond with a server error
  }
});

// Route to get blog posts by id and render the homepage
router.get("/blog/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
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
    res.status(500).json(err);
  }
});

// Route to render the dashboard
router.get("/dashboard", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      return res.redirect("/login");
    }

    if (!req.session.user_id) {
      throw new Error("User ID is not defined in the session.");
    }

    const dbBlogData = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));

    res.render("dashboard", {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});


// Route to render the login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});


router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to log out." });
      }
      res.redirect("/"); // Redirect to homepage
    });
  } else {
    res.status(404).json({ error: "User not logged in." });
  }
});

// Export the router
module.exports = router;
