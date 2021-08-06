const router = require("express").Router();
const { User, SavedRecipe, Recipe, Recipe_db } = require("../../models");
const withAuth = require("../../utils/auth");
//POST will create and save recipe
//Leaving as / because it will assign id when you create new saved recipes table
router.post("/", withAuth, async(req, res) => {
    console.log("WE HIT THE SAVE RECIPE ROUTE!!!!!!!!!");

    try {
        const user_id = req.session.user_id


        console.log('SESSION data', req.session)
        const savedrecipeData = await SavedRecipe.create({
            title: req.body.title,
            ingredients: req.body.ingredients,
            directions: req.body.directions,
            filename: req.body.filename,
            user_id: user_id,
        });
        console.log("new recipe we saved", savedrecipeData);
        res.status(200).json(savedrecipeData.get({ plain: true }));
    } catch (error) {
        console.log("ERRRRR", error);
        res.status(500).json(error);
    }
});
router.delete("/:id", withAuth, async(req, res) => {
    try {
        const SavedRecipe = await SavedRecipe.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!SavedRecipe) {
            res.status(404).json({ message: "No recipe found!" });
            return;
        }
        res.status(200).json(SavedRecipe);
    } catch (error) {
        res.status(500).json(error);
    }
});
module.exports = router;