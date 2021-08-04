const router = require('express').Router();
const { User, Recipe, Recipe_db } = require('../../models');
const { findAll } = require('../../models/User');

router.get("/find-recipes/", async(req, res) => {
        Recipe.findAll().then(allrecipes => console.log('recipe-page', allrecipes))

    })
    // router.post('/save-recipe', (req, res) => {
    //     Recipe.create(req.body) { user_id: }
    // })

// router.get('/mysavedRecipes', (req, res) => {
//     Recipe.findAll(where: {
//         user_id: req.body.user_id
//     })
// })

module.exports = router


// GET all blogs for homepage
router.get('/', async(req, res) => {
    try {
        const dbBlogData = await Blog.findAll({
            include: [{
                model: Comment,
                attributes: ['filename', 'description'],
            }, ],
        });
        const blogs = dbBlogData.map((blog) =>
            blog.get({ plain: true })
        );
        res.render('homepage', {
            blogs,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});