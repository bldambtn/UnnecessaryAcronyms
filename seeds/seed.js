const sequelize = require("../config/connection");
const { Blog, Comment } = require("../models");

const blogData = [
  {
    title: "Understanding JavaScript Closures",
    content: "Closures are a fundamental concept in JavaScript...",
    username: "js_guru",
    date_created: new Date(),
  },
  {
    title: "Sequelize ORM: A Comprehensive Guide",
    content: "Sequelize is a promise-based Node.js ORM...",
    username: "dev_master",
    date_created: new Date(),
  },
];

const commentData = [
  {
    content: "Great explanation! Closures are indeed powerful.",
    username: "code_fanatic",
    date_created: new Date(),
    blog_id: 1, // Assuming this comment is for the first blog post
  },
  {
    content: "Thanks for the Sequelize guide, very helpful!",
    username: "sql_pro",
    date_created: new Date(),
    blog_id: 2, // Assuming this comment is for the second blog post
  },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const blogs = await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
