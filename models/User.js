const { Schema, model } = require("mongoose");

const User = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: false },
    message: { type: String, required: true },
});


module.exports = model("User", User);