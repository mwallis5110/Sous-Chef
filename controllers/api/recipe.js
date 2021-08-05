const router = require('express').Router();
const { User, Recipe, Recipe_db } = require('../../models');
router.get("/find-recipes/", async(req, res) => {
    const recipeData = await Recipe.findAll().catch((err) => {
        res.json(err);
    });
    // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.status(200).json(recipes)
})
router.post('/save-recipe', async(req, res) => {
        const user_id = req.session.user_id
        req.body.user_id = user_id
        const response = await Recipe.create(req.body)
        try {
            // const user_id = req.session.user_id
            // req.body.user_id = user_id
            const response = await Recipe.create(req.body)
            res.status(200).json(response.get({ plain: true }))
        } catch (error) {
            res.status(500).json(error)
        }
    })
    // router.get('/mysavedRecipes', (req, res) => {
    //     Recipe.findAll(where: {
    //         user_id: req.body.user_id
    //     })
    // })
module.exports = router
    // GET all blogs for homepage
    // router.get('/', async(req, res) => {
    //     try {
    //         const dbBlogData = await Blog.findAll({
    //             include: [{
    //                 model: Comment,
    //                 attributes: ['filename', 'description'],
    //             }, ],
    //         });
    //         const blogs = dbBlogData.map((blog) =>
    //             blog.get({ plain: true })
    //         );
    //         res.render('homepage', {
    //             blogs,
    //             loggedIn: req.session.loggedIn,
    //         });
    //     } catch (err) {
    //         console.log(err);
    //         res.status(500).json(err);
    //     }
    // });