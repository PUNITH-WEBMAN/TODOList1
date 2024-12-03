require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/todoRoutes");
const { config } = require('dotenv');

const app = express();
const port = process.env.PORT||3000

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/todolist", router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
