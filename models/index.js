// Import models
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

// Set up model associations
User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

// Export the models with their associations
module.exports = { User, Blog, Comment };
