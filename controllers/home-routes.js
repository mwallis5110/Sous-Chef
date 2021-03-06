const router = require("express").Router();
const { Recipe, SavedRecipe } = require("../models");
const withAuth = require("../utils/auth");
// DASHBOARD page aka user custom page where user can see nav bar, saved recipes, grocery list
// router.get("/dashboard/:id", async(req, res) => {
// });
// ALL RECIPES LIBRARY page aka where user can see nav bar, list of all recipes to click on and save to dashboard
router.get("/allrecipes", async(req, res) => {
    if (!req.session.loggedIn) {
        res.redirect("/login");
    } else {
        const recipeData = await Recipe.findAll().catch((err) => {
            res.json(err);
        });
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
        // console.log(recipeData);
        res.render("all-recipes", {
            recipes,
            loggedIn: req.session.loggedIn,
        });
    }
});


router.get("/myrecipes", async(req, res) => {
    if (!req.session.loggedIn) {
        res.redirect("/login");
    } else {
        const recipeData = await SavedRecipe.findAll({
            where: { user_id: req.session.user_id },
        }).catch((err) => {
            res.json(err);
        });
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
        console.log(recipeData);
        res.render("my-recipes", {
            recipes,
            loggedIn: req.session.loggedIn,
            username: req.session.userName,
        });
        for (let i = 0; i < recipes.length; i++) {
            console.log("Ingreidesn array", recipes[i].ingredients.split(","));
            recipes[i].ingredients = recipes[i].ingredients.split(",");
        }
        console.log("my recipes", recipes);
        for (let i = 0; i < recipes.length; i++) {
            console.log("Directions array", recipes[i].directions.split(","));
            recipes[i].directions = recipes[i].directions.split(",");
        }
        console.log("my recipes", recipes);
    }
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render("login");
});
// WELCOME page aka home where user can see nav bar, jumbotron, about, and login
router.get("/", async(req, res) => {
    const recipeData = await Recipe.findAll().catch((err) => {
        res.json(err);
    });
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    for (let i = 0; i < recipes.length; i++) {
        console.log("Ingreidesn array", recipes[i].ingredients.split(","));
        recipes[i].ingredients = recipes[i].ingredients.split(",");

    }
    console.log("All recipes", recipes);
    for (let i = 0; i < recipes.length; i++) {
        console.log("Directions array", recipes[i].directions.split("."));
        recipes[i].directions = recipes[i].directions.split(".");
    }
    console.log("All recipes", recipes);
    res.render("homepage", {
        loggedIn: req.session.loggedIn,
        username: req.session.userName,
        recipes: recipes,
    });
});

module.exports = router;