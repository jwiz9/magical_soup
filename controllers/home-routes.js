const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const  withAuth = require('../utils/auth');

// Get all posts for homepage
router.get('/', async (req, res) => {
  console.log('homepage', req.session);
  try {
    // Get all Posts and include the User 
    const postData = await Post.findAll({      
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    // Serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { 
      posts,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      // Serialize the data
      const post = postData.get({ plain: true });
      
      let view;
      if (post.user_id === req.session.userId ){
        view = 'edit-post';
      } else {
        view = 'single-post';
      }
      res.render(view, { 
        post,
        loggedIn: req.session.loggedIn
       });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//  Login and Signup route 
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});
  
module.exports = router;