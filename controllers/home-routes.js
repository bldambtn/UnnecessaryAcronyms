// Import the Express library's Router object, which allows the creation of modular,
// mountable route handlers. This router will handle the routes for this module.
const router = require("express").Router();

// Route to handle the root path ("/"), typically the homepage or a main listing page.
router.get("/", async (req, res) => {
  try {
    // Attempt to render the 'all' template, passing along the loggedIn session variable.
    // The 'loggedIn' variable is used to determine if the user is logged in and can be
    // utilized within the template to display different content or options based on the user's status.
    res.render("all", { loggedIn: req.session.loggedIn });
  } catch (err) {
    // If an error occurs during the rendering process, log the error to the console.
    console.error(err);
    // Respond with a 500 status code, indicating a server error,
    // and send a JSON response with an error message.
    res
      .status(500)
      .json({ message: "An error occurred while loading the page." });
  }
});

// Route to handle the "/login" path, used to display the login page.
router.get("/login", (req, res) => {
  // Check if the user is already logged in by verifying the `loggedIn` session variable.
  if (req.session.loggedIn) {
    // If the user is logged in, redirect them to the homepage or the main page ("/").
    res.redirect("/");
    return;
  }
  // If the user is not logged in, render the 'login' template.
  // This will display the login form for the user to enter their credentials.
  res.render("login");
});

// Export the router object so that it can be used in other parts of the application.
// This allows the defined routes to be integrated into the main application routing system.
module.exports = router;
