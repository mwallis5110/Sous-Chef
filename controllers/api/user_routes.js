const router = require("express").Router();
const { User } = require("../../models");
router.post("/", async, (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        console.error("Failed to connect");
        res.status(500).json(err);
    }
});
router.post("/login", (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.email,
            },
        });
        if (!userData) {
            res
                .status(400)
                .json({ message: "Please double check your username and try again" });
            return;
        }
        const correctPassword = await userData.checkPassword(req.body.password);
        if (!correctPassword) {
            res
                .status(400)
                .json({ message: "Please double check your password and try again" });
            return;
        }
        req.session.save(() => {
            req.session.login = true;
            res.status(200).json({ user: userData, message: "You are logged in" });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});
//Log Out
router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
module.exports = router;