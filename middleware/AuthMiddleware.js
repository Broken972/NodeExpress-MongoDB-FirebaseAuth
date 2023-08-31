// Import necessary modules
const e = require("express");
const { use } = require("../app");
const admin = require("../firebase/firebase-config");

// Middleware to verify if the user is authenticated with Firebase
const isAuth = async (req, res, next) => {
    try {
        // For testing with Postman, you can set the "passAdminApi" header to bypass authentication verification
        if (req.headers.authorization.split(" ")[1] === "AdminPassAPI") {
            decodedToken = {
                uid: "AdminPassAPI",
                email: "AdminPassAPI@gmail.com",
            };
            req.user = decodedToken;
            console.log("isAuth OK!");
            next();
        } else {
            // Extract the token from the authorization header
            const token = req.headers.authorization.split(" ")[1];

            // Verify the token using Firebase Admin SDK
            const decodedToken = await admin.auth().verifyIdToken(token);

            // Attach the decoded token to the request object
            req.user = decodedToken;
            console.log("isAuth OK!");

            // Move to the next middleware or route handler
            next();
        }
    } catch (error) {
        // Send a 401 Unauthorized response if authentication fails
        res.status(401).send({ error: "Unauthorized" });
    }
};

// Export the middleware for use in other parts of the application
module.exports = { isAuth };
