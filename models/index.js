// Import the User model
const User = require("./User");

// Import the Blog model
const Blog = require("./Blog");

// Define the relationship where a User can have many Blog posts
User.hasMany(Blog, {
  foreignKey: "user_id", // Foreign key in the Blog model that references the User
  onDelete: "CASCADE", // Delete all associated blogs if the user is deleted
});

// Define the relationship where a Blog belongs to a User
Blog.belongsTo(User, {
  foreignKey: "user_id", // Foreign key in the Blog model that references the User
});

// Export the User and Blog models for use in other parts of the application
module.exports = { User, Blog };
