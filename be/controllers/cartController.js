// Dummy in-memory cart (replace with DB logic in production)
let cart = [];

// 📌 Get cart items
const getCart = (req, res) => {
    res.json(cart);
};

// 📌 Add to cart
const addToCart = (req, res) => {
    const { productId, quantity } = req.body;
    cart.push({ productId, quantity });
    res.status(201).json({ message: "Product added to cart" });
};

// 📌 Remove from cart
const removeFromCart = (req, res) => {
    cart = cart.filter(item => item.productId !== req.params.productId);
    res.json({ message: "Product removed from cart" });
};

module.exports = {
    getCart,
    addToCart,
    removeFromCart
};
