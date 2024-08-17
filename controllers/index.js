// Import the Express library's Router object to create a new router instance.
// This instance will be used to handle the routing for this module.
const router = require("express").Router();

// Import the API routes from the './api' directory.
// These routes typically handle the application's backend API requests.
const apiRoutes = require("./api");

// Import the home routes from the './home-routes.js' file.
// These routes usually manage the main pages of the application, such as the homepage and other static content pages.
const homeRoutes = require("./home-routes.js");

// Use the home routes for the root path ("/").
// This means any requests to the root URL ("/") will be handled by `homeRoutes`.
router.use("/", homeRoutes);

// Use the API routes for any paths starting with "/api".
// Requests that begin with "/api" will be forwarded to the `apiRoutes`,
// which handle backend functionality like CRUD operations on data.
router.use("/api", apiRoutes);

// Export the router object so that it can be used in other parts of the application.
// This allows the routes defined here to be incorporated into the main application,
// usually by mounting them in the primary application file (e.g., `app.js`).
module.exports = router;
