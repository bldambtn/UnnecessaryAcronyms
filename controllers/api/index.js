// Import the Express library's Router object, which is used to create modular,
// mountable route handlers. A Router instance is a complete middleware and
// routing system; for this file, it will be used to handle user-related routes.
const router = require("express").Router();

// Import the user routes from the `user-routes.js` file.
// This file is expected to contain specific route definitions for user-related operations,
// such as creating, reading, updating, or deleting user information.
const userRoutes = require("./user-routes");

// Mount the `userRoutes` on the "/users" path.
// This means that any route defined in `user-routes.js` will be prefixed with "/users".
// For example, if `user-routes.js` defines a route for getting a user at "/",
// it would be accessible as "/users/" in the main application.
router.use("/users", userRoutes);

// Export the router object so that it can be used in other parts of the application.
// Typically, this router would be imported and used in the main application file (e.g., `app.js`)
// to add the user-related routes to the overall application routing system.
module.exports = router;
