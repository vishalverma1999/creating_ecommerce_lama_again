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

// GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {

    const date = new Date();  // creates current date
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));   // will generate last year today

    try {
        // as i said i run a user statistics per month to do that i should group my items and for this we can use mongodb aggregate 
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },   //  match is gonna try to match my condition. what's my condition it's gonna be createdAt date because remember every user has createdAt and i will say it's gonna be less than today and greater than last year basically i will just say greater than last year
            {
                // okay and i wanna take month numbers. To do that i will use project and month and it's going to be $month and my createdAt inside my db. We just create month variable here and we set- take the month number from inside my createdAt date what i mean by that for example this user has been created at 2021-09-18 it's gonna take this number which is nine(september) and it's gonna assign to the month variable, it's that easy if you say year it's gonna just return 2021.
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                // After this project i can group my items my users. I will say group and you should write here id first it should be unique so i can choose my month variable here for september it's going to be 9 for august it's going to be 8 something like that and also i need total user number so i will say total and i can use sum method here and if i say just one it's gonna sum every registered user
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ])

        res.status(200).json(data);
    } 
    catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;