const { Router } = require('express'); // Destructure Router from express
const { getAllToDo, createToDo, updateToDo, deleteToDo } = require('../controllers/todoCtrl');

const router = Router(); // Use Router to create a new router instance

// Define Routes
// GET -> Read
router.get('/getall', getAllToDo);

// POST -> Create
router.post('/', createToDo);

// PUT -> Update
router.put('/updateToDo/:id', updateToDo);

// DELETE -> Delete
router.delete('/deleteToDo/:id', deleteToDo);

// Export the router
module.exports = router;

app.get('/api/todo', (req, res) => {
    res.send('Todo endpoint works!');
});

