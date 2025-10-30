const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String }, // Path to local image
    inStockQuantity: { type: Number, required: true, default: 0 } // Stock quantity
});

module.exports = mongoose.model("Product", productSchema);
