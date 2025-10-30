// In-memory orders (replace with DB later)
let orders = [];

// 📌 Get all orders
const getOrders = (req, res) => {
    res.json(orders);
};

// 📌 Place an order
const placeOrder = (req, res) => {
    const order = {
        id: orders.length + 1,
        items: req.body.items,
        total: req.body.total,
        date: new Date()
    };
    orders.push(order);
    res.status(201).json({ message: "Order placed successfully", order });
};

module.exports = {
    getOrders,
    placeOrder
};
