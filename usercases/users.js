// Importing the User model
const User = require("../models/user");

// Function to create a new user
const createUser = async (data) => {
    console.log("Data received for user creation: ", data);
    try {
        let user = new User(data);
        await user.save();
        console.log("User successfully created: ", user);
        return {
            error: null,
            user: user,
        };
    } catch (error) {
        console.error("Error during user creation: ", error);
        return {
            error: error,
            user: null,
        };
    }
};

// Function to retrieve all users
const getAllUsers = async () => {
    console.log("Fetching all users");
    try {
        let users = await User.find();
        console.log("Users successfully fetched: ", users);
        return {
            error: null,
            users: users,
        };
    } catch (error) {
        console.error("Error fetching users: ", error);
        return {
            error: error,
            users: null,
        };
    }
};

// Function to retrieve a user by their Firebase UID
const getUserByUID = async (uid) => {
    console.log("Fetching user by UID: ", uid);
    try {
        let user = await User.findOne({ fireId: uid });
        if (user) {
            console.log("User successfully fetched: ", user);
            return {
                error: null,
                user: user,
            };
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error fetching user by UID: ", error);
        return {
            error: error,
            user: null,
        };
    }
};

// Function to update a user's pseudonym by their Firebase UID
const updateUser = async (uid, pseudo) => {
    console.log("Updating user by UID: ", uid, " with pseudonym: ", pseudo);
    try {
        let user = await User.findOneAndUpdate(
            { fireId: uid },
            { pseudo: pseudo },
            { new: true }
        );
        if (user) {
            console.log("User successfully updated: ", user);
            return {
                error: null,
                user: user,
            };
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error updating user: ", error);
        return {
            error: error,
            user: null,
        };
    }
};

// Function to delete a user by their Firebase UID
const deleteUser = async (uid) => {
    console.log("Deleting user by UID: ", uid);
    try {
        let user = await User.findOneAndRemove({ fireId: uid });
        if (user) {
            console.log("User successfully deleted: ", user);
            return {
                error: null,
                user: user,
            };
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error deleting user: ", error);
        return {
            error: error,
            user: null,
        };
    }
};

// Exporting the functions for use in other parts of the application
module.exports = {
    createUser,
    getUserByUID,
    getAllUsers,
    updateUser,
    deleteUser,
};
