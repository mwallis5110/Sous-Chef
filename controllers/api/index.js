const router = require('express').Router();

const userRoutes = require('./user-routes');
const savedRecipeRoutes = require('./savedRecipe-routes');
const recipeRoutes = require('./recipe.js');

router.use('/users', userRoutes);
router.use('/savedrecipes', savedRecipeRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;