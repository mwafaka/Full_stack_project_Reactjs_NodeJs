const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");
const fileUpload = require("express-fileupload");
// connet Database
connectDB();

// Init Middleware

app.use(express.json({ extended: false }));
app.use(fileUpload());

console.log(process.env.NODE_ENV);

app.use("/uploads", express.static(__dirname + "uploads"));

// Define route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//Set static folder

app.use(express.static("client/build"));
app.get("*", (rea, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

module.exports = app;
