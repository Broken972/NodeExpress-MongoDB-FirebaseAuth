// Importing necessary modules
const express = require("express");
const router = express.Router();

// Importing user-related handlers
const {
    CreateUser,
    GetUserByUID,
    GetAllUsers,
    UpdateUser,
    DeleteUser,
} = require("./handlers");

// Importing the authentication middleware
let { isAuth } = require("../../middleware/AuthMiddleware");

// Route to create a new user. Uses the authentication middleware.
router.post("/createUser", isAuth, CreateUser);

// Route to retrieve a user by their Firebase UID. Uses the authentication middleware.
router.get("/getUserByUID", isAuth, GetUserByUID);

// Route to retrieve all users. Uses the authentication middleware.
router.get("/getAllUsers", isAuth, GetAllUsers);

// Route to update a user's pseudonym by their Firebase UID. Uses the authentication middleware.
router.put("/updateUserByUID", isAuth, UpdateUser);

// Route to delete a user by their Firebase UID. Uses the authentication middleware.
router.delete("/deleteUserByUID", isAuth, DeleteUser);

// Exporting the router for use in other parts of the application
module.exports = router;
