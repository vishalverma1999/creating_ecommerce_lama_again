const router = require("express").Router();
const User = require("../models/User");    // importing the User model
const CryptoJS = require("crypto-js");   // importing crypto library to encrypt password, to add package use yarn add crypto-js 
// const jwt = require("jsonwebtoken");   // importing jwt library

// REGISTER- it is a post request because the user is gonna send us username password and other information
router.post("/register", async (req, res) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),   // SECRET_PASSWORD is needed when we want to decrypt the password
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }

});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("wrong credentials");

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json("Wrong Credentials");

        const { password, ...others } = user._doc;    // never reveal your password, even if it is in encrypted form, hence take out password from the user object and put remaining things in 'others' object using spread operator.

        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;