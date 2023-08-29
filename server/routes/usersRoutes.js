// Import the required libraries and modules
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Define the route for getting all users
router.get('/', usersController.getAllUsers);

// Define the route for getting a single user by ID
router.get('/:id', usersController.getUserById);

// Define the route for creating a new user
router.post('/', usersController.createUser);

// Define the route for updating a user by ID
router.put('/:id', usersController.updateUser);

// Define the route for deleting a user by ID
router.delete('/:id', usersController.deleteUser);

// Export the router so it can be used in other parts of the application
module.exports = router;
