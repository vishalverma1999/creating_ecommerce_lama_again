const mongoose = require('mongoose');   // importing mongoose

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array },           //we can have more than one category so i will write here array so basically we can put any category names inside this array 
        size: { type: Array },
        color: { type: Array },
        price: { type: Number, required: true },
        inStock : {type: Boolean, default: true}
    },
    { timestamps: true }  
);

module.exports = mongoose.model("Product", ProductSchema)