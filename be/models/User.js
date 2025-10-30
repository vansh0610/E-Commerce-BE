const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    hassloggedinbefore: { type: Boolean, default: false },
    role: { type: String, enum: ["admin", "user"], default: "user" } // <-- added role
});

module.exports = mongoose.model("User", userSchema);
