require("dotenv").config();
const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
  family: 4,
});

        isConnected = true;

        console.log("MongoDB Connected");
        console.log("Ready State:", mongoose.connection.readyState);

    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        throw err;
    }
};

module.exports = connectDB;
