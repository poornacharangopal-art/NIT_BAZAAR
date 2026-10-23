const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const MongoStore = require("connect-mongo");
const path = require("path");

dotenv.config();

const connectDB = require("./connectDB");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// EJS configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Session configuration
app.use(
session({
secret: process.env.SESSION_SECRET,
resave: false,
saveUninitialized: false,
store: MongoStore.create({
mongoUrl: process.env.MONGO_URI
}),
cookie: {
maxAge: 1000 * 60 * 60 * 24
}
})
);

// Routes
app.use(authRoutes);
app.use(productRoutes);

// Connect to MongoDB
connectDB()
.then(() => {
console.log("Database ready");
})
.catch((err) => {
console.error("Database connection failed:", err.message);
});

// Start a server locally; export the app for Vercel
if (require.main === module) {
app.listen(process.env.PORT || 3000, () => {
console.log("Server started");
});
}

module.exports = app;
