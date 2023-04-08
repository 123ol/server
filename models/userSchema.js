const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    Lifem: {
        type: String,
        required: true
    },
    Healthplan: {
        type: String,
        required: true,
    },
    mealplans: {
        type: String,
        required: true
    },
    Sst: {
        type: String,
        required: true,
    },
    gymworkouts: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const users = new mongoose.model("users",userSchema);


module.exports = users;