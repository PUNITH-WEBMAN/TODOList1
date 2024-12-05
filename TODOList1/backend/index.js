// Required dependencies
require('dotenv').config();  // Loads environment variables from a .env file
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const todoRoutes = require("./routes/todoRoutes");  // Importing routes for to-do operations

// Initialize the app
const app = express();
const port = process.env.PORT || 5000;  // Port can be set in .env or defaults to 5000

// Middleware
app.use(express.json());  // Allows parsing of JSON in incoming requests

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",  // Allow frontend to communicate
  methods: ["GET", "POST", "PUT", "DELETE"],  // Supported methods
}));

// Static file serving (for production, serving built React files)
app.use(express.static(path.join(__dirname, 'public')));  // Serves static files from the "public" directory

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/todolist", todoRoutes);  // Handles all to-do related operations

// Catch-all route for serving the React app in production
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
