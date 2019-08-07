const express = require("express");
const connectDB = require("./config/db");
const app = express();
const fileUpload = require("express-fileupload");
// connect Database
connectDB();

// Init Middleware

app.use(express.json({ extended: false }));
app.use(fileUpload());

app.use("/api/uploads", express.static(__dirname + "uploads"));

// Define route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

module.exports = app;
