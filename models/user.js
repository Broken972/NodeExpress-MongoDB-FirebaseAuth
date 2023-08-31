// Importing the mongoose module
const mongoose = require("mongoose");

// Defining the user schema
const userSchema = new mongoose.Schema({
    // Firebase user ID - make it unique and immutable
    fireId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        immutable: true,
    },

    // User email
    email: {
        type: String,
        required: true,
        trim: true,
    },

    // User pseudonym or nickname
    pseudo: {
        type: String,
        required: false,
        trim: true,
        unique: false,
    },

    // User age
    age: {
        type: Number,
        required: false,
        trim: true,
        unique: false,
    },

    // User description or bio
    description: {
        type: String,
        required: false,
        trim: true,
        unique: false,
    },
});

// Creating a User model based on the user schema
const User = mongoose.model("user", userSchema);

// Exporting the User model for use in other parts of the application
module.exports = User;
