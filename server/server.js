const express = require("express");
const cors = require("cors");
const db_connect = require("./config/db_connect");
const path = require("path"); // Import path module
require("dotenv").config();
const app = express();

// Connect to database
db_connect();
app.use(express.json({ limit: "10000mb" })); // Set the limit for JSON payloads

// Add CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*", // Set specific origins if needed
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

// Define our routes
app.use("/user", require("./routes/userRoute"));
app.use("/pack", require("./routes/packRoute"));
app.use("/cours", require("./routes/coursRoute"));
app.use("/lessons", require("./routes/lessonsRoute"));
app.use("/file", require("./routes/fileRoute"));
app.use("/rating", require("./routes/ratingRoutes"));
app.use("/quizz", require("./routes/QuizzRoute"));
app.use("/question", require("./routes/Question_QuizzRoute"));
app.use("/answer", require("./routes/answerRoute"));
app.use("/answerstudent", require("./routes/answerStudentRoute"));
app.use("/Meet", require("./routes/meetRoute"));

// Get port from .env
const PORT = process.env.PORT || 5000;

// GET home page
app.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Serve static files from React app
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Test our server
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
