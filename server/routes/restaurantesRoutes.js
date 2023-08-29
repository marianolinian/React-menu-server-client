// // Import Express and create a new Router instance
// const express = require('express');
// const router = express.Router();

// // Import the restaurantesController
// const restaurantesController = require('../controllers/restaurantesController');

// // Define the routes for the Restaurantes model
// router.get('/restaurantes', restaurantesController.getAll);
// router.post('/restaurantes', restaurantesController.create);
// router.put('/restaurantes/:id', restaurantesController.update);
// router.delete('/restaurantes/:id', restaurantesController.delete);

// // Export the router so it can be used in other parts of the application
// module.exports = router;

const express = require('express');
const router = express.Router();
const restaurantesController = require('../controllers/restaurantesController');

router.get('/', restaurantesController.getAll);
router.post('/', restaurantesController.create);
router.put('/:id', restaurantesController.update);
router.delete('/:id', restaurantesController.delete);

module.exports = router;
