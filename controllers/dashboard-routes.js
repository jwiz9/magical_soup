const router = require('express').Router();
const { User, Post } = require('../models/');
const withAuth = require('../utils/auth');
// Find all posts and join with user data
router.get('/', withAuth, async (req, res) => { 
  try {
    console.log('dashboard');
    const postData = await Post.findAll({ 
      where: { 
        user_id: req.session.userId
      }  ,   
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
     
    // Serialize data before passing to template
    const posts = postData.map((post) => post.get({ plain: true }));

    // Fill in the view to be rendered
    res.render('homepage', {
      layout : 'dashboard',
      posts,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.redirect('login');
  }

});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
    user_id: req.session.userId
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk();

    if (postData) {
      // Serializing the data
      const post = postData.get({ plain: true });
      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;