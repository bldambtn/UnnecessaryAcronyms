// Import the User model from the './User' file.
// This model represents the User table in the database and includes the schema,
// as well as any associated methods for interacting with user data.
const User = require("./User");

// Export an object containing the User model.
// This allows other parts of the application to easily import and use the User model.
// By exporting it as an object, you can add more models in the future
// and include them in this export, keeping your imports organized and scalable.
module.exports = { User };
