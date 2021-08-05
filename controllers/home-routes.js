const router = require('express').Router();
const { Recipe } = require('../models');
const withAuth = require('../utils/auth')

// DASHBOARD page aka user custom page where user can see nav bar, saved recipes, grocery list
router.get('/dashboard/:id', async(req, res) => {
    // if (!req.session.loggedIn) {
    //     res.redirect('/login');
    // } else {
    //     // If the user is logged in, allow them to view the painting
    //     try {
    //         const dbRecipeData = await Recipe.findByPk(req.params.id);

    //         const painting = dbPaintingData.get({ plain: true });

    //         res.render('painting', { painting, loggedIn: req.session.loggedIn });
    //     } catch (err) {
    //         console.log(err);
    //         res.status(500).json(err);
    //     }
    // }

    // ----------------- trying two diff get for dashboard by id --------------------------------
    // const recipeData = await Recipe.findAll().catch((err) => {
    //     res.json(err);
    // });
    // const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    // console.log(recipeData);
    // res.render('all', {
    //     recipes,
    //     loggedIn: req.session.loggedIn,
    // });
});

// ALL RECIPES LIBRARY page aka where user can see nav bar, list of all recipes to click on and save to dashboard
router.get('/allrecipes', async(req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        const recipeData = await Recipe.findAll().catch((err) => {
            res.json(err);
        });
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
        console.log(recipeData);
        res.render('all-recipes', {
            recipes,
            loggedIn: req.session.loggedIn,
        });
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// WELCOME page aka home where user can see nav bar, jumbotron, about, and login
router.get('/', async(req, res) => {

    // const recipeData = await Recipe.findAll().catch((err) => {
    //     res.json(err);
    // });
    // const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    // console.log(recipeData);
    res.render('homepage', {
        // recipes
        loggedIn: req.session.loggedIn
    });
});
// router.get('/', withAuth, async(req, res) => {
//     // check if user doesn't exist and if they don't res.redirect('/login') else do the next stuff
//     // We find all dishes in the db and set the data equal to dishData
//     const recipeData = await Recipe.findAll().catch((err) => {
//         res.json(err);
//     });
//     // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
//     const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
//     // We render the template, 'all', passing in dishes, a new array of serialized objects.
//     console.log(recipeData);
//     console.log(req.session)
//     res.render('all', { recipes, loggedIn: req.session.loggedIn, username: req.session.userName });
// });

module.exports = router;

// // GET one painting
// router.get('/painting/:id', async(req, res) => {
//     // If the user is not logged in, redirect the user to the login page
//     if (!req.session.loggedIn) {
//         res.redirect('/login');
//     } else {
//         // If the user is logged in, allow them to view the painting
//         try {
//             const dbPaintingData = await Painting.findByPk(req.params.id);

//             const painting = dbPaintingData.get({ plain: true });

//             res.render('painting', { painting, loggedIn: req.session.loggedIn });
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     }
// });



// const { Gallery, Painting } = require('../models');

// // GET all galleries for homepage
// router.get('/', async(req, res) => {
//     try {
//         const dbGalleryData = await Gallery.findAll({
//             include: [{
//                 model: Painting,
//                 attributes: ['filename', 'description'],
//             }, ],
//         });

//         const galleries = dbGalleryData.map((gallery) =>
//             gallery.get({ plain: true })
//         );

//         res.render('homepage', {
//             galleries,
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // GET one gallery
// router.get('/gallery/:id', async(req, res) => {
//     // If the user is not logged in, redirect the user to the login page
//     if (!req.session.loggedIn) {
//         res.redirect('/login');
//     } else {
//         // If the user is logged in, allow them to view the gallery
//         try {
//             const dbGalleryData = await Gallery.findByPk(req.params.id, {
//                 include: [{
//                     model: Painting,
//                     attributes: [
//                         'id',
//                         'title',
//                         'artist',
//                         'exhibition_date',
//                         'filename',
//                         'description',
//                     ],
//                 }, ],
//             });
//             const gallery = dbGalleryData.get({ plain: true });
//             res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     }
// });

// // GET one painting
// router.get('/painting/:id', async(req, res) => {
//     // If the user is not logged in, redirect the user to the login page
//     if (!req.session.loggedIn) {
//         res.redirect('/login');
//     } else {
//         // If the user is logged in, allow them to view the painting
//         try {
//             const dbPaintingData = await Painting.findByPk(req.params.id);

//             const painting = dbPaintingData.get({ plain: true });

//             res.render('painting', { painting, loggedIn: req.session.loggedIn });
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     }
// });

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');
// });





// testing split and map over ingredients -----------------------

// // route to get all dishes
// router.get('/', async(req, res) => {
//     // We find all dishes in the db and set the data equal to dishData
//     const recipeData = await Recipe.findAll().catch((err) => {
//         res.json(err);
//     });
//     // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
//     const recipes = recipeData.map((recipe) => {
//         // const ingredient = recipe.ingredients.split(',')
//         recipe.get({
//                 plain: true
//             })
//             // console.log(`INGREDIENT ------ ${ingredient}`)
//             // return ingredient
//     });

// // make sure this is still an array?
// const finalRecipes = recipes.map((recipe) => {
//         const ingredient = recipe.ingredients.split(' ,');
//         console.log(` line 18 ${ingredient}`)
//         return ingredient;
//     })
//     // We render the template, 'all', passing in dishes, a new array of serialized objects.
// console.log(`line 14 here ${finalRecipes}`);
// const ingredientList = finalRecipes.map((recipe) => {
//         return recipe;

//     })
//     res.render('all', { recipes });
//     console.log(`TEST --- ${recipes}`)
// });


// GET all galleries for homepage
// router.get('/', async(req, res) => {
//     try {
//         const dbRecipeData = await Recipe.findAll({
//             include: [{
//                 model: Recipe,
//                 attributes: ['title', 'ingredients', 'directions', 'filename'],
//             }, ],
//         });

//         res.render('homepage', {
//             recipes,
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // GET one gallery
// router.get('/gallery/:id', async(req, res) => {
//     // If the user is not logged in, redirect the user to the login page
//     if (!req.session.loggedIn) {
//         res.redirect('/login');
//     } else {
//         // If the user is logged in, allow them to view the gallery
//         try {
//             const dbGalleryData = await Gallery.findByPk(req.params.id, {
//                 include: [{
//                     model: Painting,
//                     attributes: [
//                         'id',
//                         'title',
//                         'artist',
//                         'exhibition_date',
//                         'filename',
//                         'description',
//                     ],
//                 }, ],
//             });
//             const gallery = dbGalleryData.get({ plain: true });
//             res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     }
// });

// GET one painting
// router.get('/painting/:id', async(req, res) => {
//     // If the user is not logged in, redirect the user to the login page
//     if (!req.session.loggedIn) {
//         res.redirect('/login');
//     } else {
//         // If the user is logged in, allow them to view the painting
//         try {
//             const dbPaintingData = await Painting.findByPk(req.params.id);

//             const painting = dbPaintingData.get({ plain: true });

//             res.render('painting', { painting, loggedIn: req.session.loggedIn });
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     }
// });

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');
// });

// module.exports = router;



// const { Gallery, Painting } = require('../models');

// // GET all galleries for homepage
// router.get('/', async(req, res) => {
//     try {
//         const dbGalleryData = await Gallery.findAll({
//             include: [{
//                 model: Painting,
//                 attributes: ['filename', 'description'],
//             }, ],
//         });

//         const galleries = dbGalleryData.map((gallery) =>
//             gallery.get({ plain: true })
//         );

//         res.render('homepage', {
//             galleries,
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // GET one gallery
// router.get('/gallery/:id', async(req, res) => {
//     // If the user is not logged in, redirect the user to the login page
//     if (!req.session.loggedIn) {
//         res.redirect('/login');
//     } else {
//         // If the user is logged in, allow them to view the gallery
//         try {
//             const dbGalleryData = await Gallery.findByPk(req.params.id, {
//                 include: [{
//                     model: Painting,
//                     attributes: [
//                         'id',
//                         'title',
//                         'artist',
//                         'exhibition_date',
//                         'filename',
//                         'description',
//                     ],
//                 }, ],
//             });
//             const gallery = dbGalleryData.get({ plain: true });
//             res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     }
// });

// // GET one painting
// router.get('/painting/:id', async(req, res) => {
//     // If the user is not logged in, redirect the user to the login page
//     if (!req.session.loggedIn) {
//         res.redirect('/login');
//     } else {
//         // If the user is logged in, allow them to view the painting
//         try {
//             const dbPaintingData = await Painting.findByPk(req.params.id);

//             const painting = dbPaintingData.get({ plain: true });

//             res.render('painting', { painting, loggedIn: req.session.loggedIn });
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     }
// });

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');
// });