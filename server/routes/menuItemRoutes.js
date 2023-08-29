// Import Express and create a new Router instance
const express = require('express');
const router = express.Router();

// Import the platosController
const platosController = require('../controllers/menuItemController');

// Define the routes for the Platos model
router.get('/restaurantes/:id', platosController.getAll);
router.post('/', platosController.create);
router.put('/:id', platosController.update);
router.delete('/:id', platosController.delete);

// Export the router so it can be used in other parts of the application
module.exports = router;

