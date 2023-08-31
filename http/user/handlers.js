// Importing user-related functions from the usercases module
let {
    createUser,
    getUserByUID,
    getAllUsers,
    updateUser,
    deleteUser,
} = require("../../usercases/users");

// Function to create a new user
let CreateUser = async (req, res) => {
    // Create a user object with data from the request: req.user.uid, req.body.email, and req.body.pseudo and if you want req.body.age and req.body.description
    const userReq = {
        fireId: req.user.uid,
        email: req.user.email,
        // pseudo: req.body.pseudo,
        // age: req.body.age,
        // description: req.body.description,
    };

    const { user, error } = await createUser(userReq);
    if (error != null) {
        res.status(400).send({ error: error });
        return;
    }
    console.log("CreateUser OK!");
    res.status(200).send({ user: user });
};

// Function to retrieve a user by their Firebase UID
let GetUserByUID = async (req, res) => {
    const { user, error } = await getUserByUID(req.user.uid);
    if (error != null) {
        res.status(404).send({ error: error });
        return;
    }
    console.log("GetUserByUID OK!");
    res.status(200).send({ user: user });
};

// Function to retrieve all users
let GetAllUsers = async (req, res) => {
    const { users, error } = await getAllUsers();
    if (error != null) {
        res.status(404).send({ error: error });
        return;
    }
    console.log("GetAllUsers OK!");
    res.status(200).send({ users: users });
};

// Function to update a user's pseudonym by their Firebase UID
let UpdateUser = async (req, res) => {
    const { user, error } = await updateUser(req.user.uid, req.body.pseudo);
    if (error != null) {
        res.status(404).send({ error: error });
        return;
    }
    console.log("UpdateUser OK!");
    res.status(200).send({ user: user });
};

// Function to delete a user by their Firebase UID
let DeleteUser = async (req, res) => {
    const { user, error } = await deleteUser(req.user.uid);
    if (error != null) {
        res.status(404).send({ error: error });
        return;
    }
    console.log("DeleteUser OK!");
    res.status(200).send({ user: user });
};

// Exporting the functions for use in other parts of the application
module.exports = {
    CreateUser,
    GetUserByUID,
    GetAllUsers,
    UpdateUser,
    DeleteUser,
};
