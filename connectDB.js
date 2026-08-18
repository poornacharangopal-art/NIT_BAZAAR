require("dotenv").config();
const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);

        isConnected = true;

        console.log("MongoDB Connected");
        console.log("Ready State:", mongoose.connection.readyState);

    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        throw err;
    }
};

module.exports = connectDB;
