const User = require('./User');
const Recipe = require('./Recipe');
const SavedRecipe = require('./Savedrecipe');

SavedRecipe.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(SavedRecipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});



module.exports = { User, Recipe, SavedRecipe };