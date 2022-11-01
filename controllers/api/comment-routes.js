const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');
// Allows creation of comment
router.post('/', withAuth, async (req, res) => {
  console.log("req.body", req.body)
  try {
    const newComment = await Comment.create({
      post_id: req.body.postId,
      comment_text: req.body.body,
      user_id: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;