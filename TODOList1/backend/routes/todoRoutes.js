const express = require('express');
const {
  createToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
} = require('../controllers/todoCtrl');
const router = express.Router();

// Route definitions
router.post('/add', createToDo);         // Route to create a new todo
router.get('/getall', getAllToDo);       // Route to fetch all todos
router.put('/updateToDo/:id', updateToDo); // Route to update a todo
router.delete('/deleteToDo/:id', deleteToDo); // Route to delete a todo

module.exports = router;
