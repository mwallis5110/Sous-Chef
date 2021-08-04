const { Recipe } = require('../models');

const recipeData = [{
    title: 'PB and J',
    ingredients: 'peanut butter, jelly, bread',
    directions: 'step1, step2, step3',
}]
const seedRecipes = () => Recipe.bulkCreate(recipeData);
module.exports = seedRecipes;