const User = require("./User");
const Blog = require("./blog");
const Comment = require("./comments");

// Create a relationship where a User has many Blog posts
User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// A Blog post belongs to a User
Blog.belongsTo(User, {
  foreignKey: "user_id",
});

// A Blog post has many Comments
Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

// A Comment belongs to a Blog post
Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

module.exports = { User, Blog, Comment };