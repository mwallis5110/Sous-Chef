const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SavedRecipe extends Model {}

Recipe.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    directions: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "user",
            key: "id"
        }
    }

}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
});

module.exports = SavedRecipe;