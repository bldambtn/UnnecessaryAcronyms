// controllers/api/comment-routes.js
const router = require("express").Router();
const { Comment } = require("../../models");
const authMiddleware = require("../../utils/auth");

// Route to create a new comment
router.post("/", authMiddleware, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      blog_id: req.body.blog_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
