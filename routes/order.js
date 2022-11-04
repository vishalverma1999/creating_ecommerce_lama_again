const router = require('express').Router();
const Order = require('../models/Order');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

// CREATE ORDER - any looged in user can create order
router.post('/', verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);   //req.body only beacuse we will send everything in the body that is present in Order Model
    newOrder.userId = req.user.id;    // ya to token se hi directly userId provide kara sakte ho jo token mein mili hai, wrna thunderclient mein manually daalni padegi
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Update ORDER, Only ADMIN Can update this
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {      // HERE id is the id of order

    try {
        console.log("1")
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {

            $set: req.body
        }, { new: true })
        console.log("2")
        res.status(200).json(updatedOrder);

    } catch (error) {
        console.log("3`")
        res.status(500).json(error);
    }
})

// DELETE Only ADMIN Can delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {        // HERE id is the id of order

    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET USER ORDERS
router.get("/fetchUserOrders/:id", verifyTokenAndAuthorization, async (req, res) => {   // /find/:id --- THIS IS USERID and NoT Order ID

    try {
        const orders = await Order.find({ userId: req.params.id });   // we will use find() and won't use findOne() because users can have more than one order

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET ALL ORDERS, it's gonna be just main url and only admin can reach this data because we are going to see all orders of all users 
router.get("/fetchAllOrders", verifyTokenAndAdmin, async (req, res) => {

    try {
        const orders = await Order.find();
        res.status(200).json(orders);

    } catch (error) {
        res.status(500).json(err);
    }
});

// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {

    //i'm gonna do this similar thing that we have done for users remember every user per month but this time i'm gonna use only this month and previous month only september and august that because we are gonna compare our incomes
    const date = new Date();  // if it's first september today
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));   // it's gonna be first august 
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));  // it's gonna be first july

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },   // conditin of aggregate function, greter than previous month, means last two months will be taken in consideration
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",    // remember in our order model we have userid, products and amount we are gonna take this amount and after when we group our elements we are gonna sum all these amounts per month
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        // income.sort(function (a, b) { return a._id - b._id })      // sorting function if needed
        res.status(200).json(income);
    } catch (error) {

        res.status(500).json(error);
    }
})



module.exports = router;