// Dependencies
// Import the Express framework for building web applications.
const express = require("express");
// Import the express-session middleware for managing sessions.
const session = require("express-session");
// Import the express-handlebars template engine for rendering HTML views.
const exphbs = require("express-handlebars");
// Import the path module, which provides utilities for working with file and directory paths.
const path = require("path");
// Create an instance of express-handlebars with default settings.
const hbs = exphbs.create({});
// Import the Sequelize instance to handle database connections.
const sequelize = require("./config/connection");

// Sets up the Express App
// Create an Express application instance.
const app = express();
// Define the port on which the server will listen. It uses the environment variable `PORT` if available, otherwise defaults to 3001.
const PORT = process.env.PORT || 3001;

// Configure session settings, including a secret key, and disabling automatic session resaving and initialization.
const sess = {
  secret: "Super secret secret", // A secret key used to sign the session ID cookie.
  resave: false, // Prevents the session from being saved back to the session store if it wasn't modified during the request.
  saveUninitialized: false, // Prevents uninitialized sessions from being saved to the session store.
};

// Apply the session middleware to the Express app, enabling session management.
app.use(session(sess));

// Serve static files from the "public" directory. This makes files like images, CSS, and JavaScript available to the client.
app.use(express.static(path.join(__dirname, "public")));
// Serve static files from the "views" directory. This could be used for serving additional assets like partials or templates.
app.use(express.static(path.join(__dirname, "views")));

// Set up Handlebars as the template engine for the app.
app.engine("handlebars", hbs.engine);
// Set the default view engine to Handlebars, so that files with the ".handlebars" extension will be rendered using this engine.
app.set("view engine", "handlebars");

// Use the routes defined in the "home-routes" controller.
app.use(require("./controllers/home-routes"));

// Starts the server to begin listening
// Sync the Sequelize models with the database. The `force: false` option prevents dropping and recreating tables.
sequelize.sync({ force: false }).then(() => {
  // Start the Express server and listen on the specified port.
  app.listen(PORT, () =>
    console.log("Server listening on: http://localhost:" + PORT)
  );
});