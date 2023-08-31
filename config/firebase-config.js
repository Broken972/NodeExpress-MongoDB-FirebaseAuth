// Importing necessary modules from firebase-admin
const { initializeApp } = require("firebase-admin/app");
const admin = require("firebase-admin");

// Path to the service account credentials
const serviceAccount = require("./serviceAccountKey.json");

// Initializing the Firebase app with the service account credentials
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Exporting the admin module to be used in other parts of the application
module.exports = admin;
