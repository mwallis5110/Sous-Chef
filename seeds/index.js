const sequelize = require('../config/connection');
// const seedGallery = require('./galleryData');
// const seedPaintings = require('./paintingData');
const seedRecipes = require('./recipeData');
const seedUsers = require('./userData')

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    // await seedGallery();

    // await seedPaintings();

    await seedRecipes();

    process.exit(0);
};

seedAll();