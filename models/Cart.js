const mongoose = require('mongoose');   // importing mongoose

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        //it's going to be type string. Actually after purchasing the stripe library is going to return us an object so we can use it, that's why type is object, that because it's going to contain line one xyz, line two city, then  country and other informations so we can write here object.
        products: [
            {
                productId: { type: String },
                quantity: { type: Number, default: 1 },   //by default when we create any product inside our cart it's gonna be just one and user can increase and decrease this number 
            }
        ],
    },
    { timestamps: true }   // This will create createdAt and updatedAt time both
);

module.exports = mongoose.model("Cart", CartSchema)