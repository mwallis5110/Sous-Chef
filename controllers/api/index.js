const router = require('express').Router();
const userRoutes = require('./user-routes');
const savedRecipeRoutes = require('./savedRecipe-routes');
router.use('/users', userRoutes);
router.use('/savedrecipes', savedRecipeRoutes);


module.exports = router;