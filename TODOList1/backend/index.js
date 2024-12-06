const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); 
app.use(express.json());

// Routes
app.use("/api/todo", todoRoutes); // Update route prefix to /api/todo

// Database connection and server start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((error) => console.error("Failed to connect to MongoDB:", error));
