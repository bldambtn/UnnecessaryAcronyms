// Create a new router instance
const router = require("express").Router();

// Import user-related routes
const userRoutes = require("./user-routes");

// Import blog-related routes
const blogRoutes = require("./blog-routes");

// Use the user routes for the "/users" path
router.use("/users", userRoutes);

// Use the blog routes for the "/blogs" path
router.use("/blogs", blogRoutes);

// Export the router
module.exports = router;
