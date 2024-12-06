const express = require("express");
const {
  createToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/todoCtrl");

const router = express.Router();

// Define routes
router.post("/add", createToDo);
router.get("/getall", getAllToDo);
router.put("/updateToDo/:id", updateToDo);
router.delete("/deleteToDo/:id", deleteToDo);

module.exports = router;
