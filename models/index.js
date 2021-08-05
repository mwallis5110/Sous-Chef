const User = require('./User');
const Recipe = require('./Recipe');
const SavedRecipe = require('./Savedrecipe');

SavedRecipe.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(SavedRecipe, {
    foreignKey: 'user_id',
    onDelete:'CASCADE'
});

User.hasMany(SavedRecipe, {
    foreignKey: 'user_id',
    onDelete:'CASCADE'
});

// SavedRecipe.hasMany(User, {
//     foreignKey: 'savedrecipe_id',
//     onDelete:'CASCADE'
// });

//Don't need since Revipes don't belong to a user until they are saved
// Recipe.belongsTo(User, {
//     foreignKey: 'user_id',
// });

module.exports = { User, Recipe, SavedRecipe };