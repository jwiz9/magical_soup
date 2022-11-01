const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');
// Creates new post
router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({ 
      title: req.body.title, 
      content: req.body.body,
      userId: req.session.userId 
    });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Allows user to edit post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// Allows user to delete post
router.delete('/:id', withAuth, async (req, res) => {
   Post.destroy({
      where: {
        id: req.params.id,
      }
    })

    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;