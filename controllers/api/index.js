// Import necessary modules and routes
const router = require("express").Router();
const userRoutes = require("./user-routes");
const blogRoutes = require("./blog-routes");
const commentRoutes = require("./comment-routes");

// Define route paths and associate them with the corresponding route handlers
router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);

// Export the configured router
module.exports = router;
