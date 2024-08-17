// Import the Sequelize library, which is an ORM (Object-Relational Mapping) tool
// for interacting with relational databases using JavaScript.
const Sequelize = require("sequelize");

// Load environment variables from a .env file into process.env.
// This allows sensitive information like database credentials to be stored securely.
require("dotenv").config();

// Create a Sequelize instance for connecting to the database.
// Check if the environment variable `DB_URL` is defined.
// This is typically used for connecting to a database via a single connection URL (e.g., in production environments).

const sequelize = process.env.DB_URL
  ? // If `DB_URL` exists, use it to establish the database connection.
    new Sequelize(process.env.DB_URL)
  : // If `DB_URL` is not defined, fall back to using individual environment variables
    // for database name, username, and password. This is more common in development environments.
    new Sequelize(
      process.env.DB_NAME, // The name of the database to connect to.
      process.env.DB_USER, // The database username.
      process.env.DB_PASSWORD, // The password for the database user.
      {
        // Additional configuration options for the Sequelize instance.
        host: "localhost", // The host where the database server is running (commonly "localhost" for local development).
        dialect: "postgres", // The type of database being used, in this case, PostgreSQL.
      }
    );

// Export the Sequelize instance for use in other parts of the application.
// This allows other modules to use the established database connection.
module.exports = sequelize;
