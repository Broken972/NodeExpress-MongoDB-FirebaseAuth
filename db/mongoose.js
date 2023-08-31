// Importing the mongoose module for MongoDB database management
const mongoose = require("mongoose");

// Checking the server environment (online or local)
if (process.env.SERVER === "online") {
    // Constructing the URI for connecting to online MongoDB using environment variables
    const uri = `mongodb+srv://${process.env.MONGO_ONLINE_USER}:${process.env.MONGO_ONLINE_PASSWORD}@***.***.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

    // Attempting to connect to online MongoDB
    mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            // Logging a message on successful connection
            console.log("Successfully connected to online MongoDB!");
        })
        .catch((error) => {
            // Logging an error message on connection failure
            console.log("Unable to connect to online MongoDB!");
            console.error(error);
        });
} else if (process.env.SERVER === "local") {
    // Constructing the URI for connecting to local MongoDB using environment variables
    let conn = `mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
    console.log(conn);

    // Attempting to connect to local MongoDB
    mongoose
        .connect(conn, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            // Logging a message on successful connection
            console.log("Successfully connected to local MongoDB!");
        })
        .catch((error) => {
            // Logging an error message on connection failure
            console.log("Unable to connect to local MongoDB!");
            console.error(error);
        });
} else {
    // Logging a message if no server configuration is set
    console.log("No database connection");
}

// Exporting the mongoose module to be used in other parts of the application
module.exports = mongoose;
