const User = require('../models/User')
const router = require('express').Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJS = require("crypto-js");

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {

    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
})

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const user = await User.findById(req.params.id);

        // res.status(200).json(user);   // remember user is sending all information of the user to prevent this i'm just gonna destructure my other properties so i can see password and others and it's gonna send only others. KUL MILAKAR PASSWORD KISI KO REVEAL NAHI KRNA EVEN ADMIN KO BHI

        const { password, ...others } = user._doc;  // mongodb stores our documents inside "_doc" but we are passing user directly, i know it's a little bit weird but you should write here user._doc
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    const query = req.query.new;   // 'new' is the name of our query in url

    try {
        // const users = await User.find(); // await User.find() This will find every user

        // but i'm gonna show you something else here we can use any query in our url, url is http://localhost:5000/api/users?new=true and Query is new=true 
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();  // if query is there then return 5 users, sort with _id: -1 helps us to show the latest user and if no query then find every user

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;