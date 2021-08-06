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
    //Moved to savedRecipe

module.exports = router