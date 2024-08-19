// Create a new router instance
const router = require("express").Router();

// Import the User model
const { User } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    // Create a new user with the data from the request body
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Save session and set loggedIn to true
    req.session.save(() => {
      req.session.loggedIn = true;

      // Respond with the newly created user data
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err); // Log any errors
    res.status(500).json(err); // Respond with a server error
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.get("/logout", (req, res) => {
  // Check if the user is logged in
  if (req.session.loggedIn) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to log out." }); // Handle potential errors during session destruction
      }
      res.redirect("/"); // Redirect to homepage on successful logout
    });
  } else {
    res.status(404).json({ error: "User not logged in." }); // Respond with not found if not logged in
  }
});

// Export the router
module.exports = router;
