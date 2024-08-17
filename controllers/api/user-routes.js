// Import the Express library's Router object to create modular, mountable route handlers.
const router = require("express").Router();
// Import the User model from the models directory. This will be used to interact with the user data in the database.
const { User } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    // Create a new user in the database using the data provided in the request body.
    // The `User.create` method will insert a new record into the users table with the
    // username, email, and password provided in the request.
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // After successfully creating the user, set up a session and save it.
    // The session variable `loggedIn` is set to `true` to indicate that the user is logged in.
    req.session.save(() => {
      req.session.loggedIn = true;

      // Respond with the newly created user data in JSON format and a 200 status code.
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    // If an error occurs during the user creation process, log the error to the console
    // and send a 500 status code with the error details as a JSON response.
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    // Attempt to find a user in the database that matches the provided email address.
    // The `findOne` method searches for a single record where the email matches the request body.
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // If no user is found with the provided email, respond with a 400 status code and an error message.
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    // Check if the provided password matches the stored password using the `checkPassword` method.
    // This method should be defined in the User model to compare the hashed password.
    const validPassword = await dbUserData.checkPassword(req.body.password);

    // If the password is incorrect, respond with a 400 status code and an error message.
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    // If the user credentials are valid, set up a session and save it.
    // The session variable `loggedIn` is set to `true` to indicate that the user is logged in.
    req.session.save(() => {
      req.session.loggedIn = true;

      // Respond with the user data and a success message in JSON format and a 200 status code.
      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    // If an error occurs during the login process, log the error to the console
    // and send a 500 status code with the error details as a JSON response.
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout route
router.post("/logout", (req, res) => {
  // If the user is logged in (i.e., the session variable `loggedIn` is `true`),
  // destroy the session to log the user out.
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      // Respond with a 204 status code indicating that the logout was successful,
      // but no content is returned.
      res.status(204).end();
    });
  } else {
    // If the user is not logged in, respond with a 404 status code indicating that the
    // requested resource (logout) was not found or is not applicable.
    res.status(404).end();
  }
});

// Export the router object so that it can be used in other parts of the application.
// Typically, this router would be imported in the main application file (e.g., `app.js`)
// to add the user-related routes to the overall application routing system.
module.exports = router;
