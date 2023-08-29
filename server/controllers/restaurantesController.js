// Import the db object
const db = require('../config/db');

// Define the restaurantesController object
const restaurantesController = {
  // Get all restaurantes
  async getAll(req, res) {
    try {
      const restaurantes = await db.any('SELECT * FROM restaurantes');
      res.status(200).json(restaurantes);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while fetching the restaurantes', error });
    }
  },

// Create a new restaurante
async create(req, res) {
  try {
    const { nombre, direccion, telefono } = req.body;
    const newRestaurante = await db.one(
      'INSERT INTO restaurantes (nombre, direccion, telefono) VALUES ($1, $2, $3) RETURNING *',
      [nombre, direccion, telefono]
    );
    res.status(201).json(newRestaurante);
  } catch (error) {
    console.error(error); // Log the error to the console for debugging
    res.status(500).json({ message: 'An error occurred while creating the restaurante', error, detail: error.message });
  }
},

  // Update a restaurante
  async update(req, res) {
    try {
      const restaurante_id = req.params.id;
      const { nombre, direccion, telefono } = req.body;
      await db.none(
        'UPDATE restaurantes SET nombre = $1, direccion = $2, telefono = $3 WHERE id = $4',
        [nombre, direccion, telefono, restaurante_id]
      );
      res.status(200).json({ message: 'Restaurante updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while updating the restaurante', error });
    }
  },

  // Delete a restaurante
  async delete(req, res) {
    try {
      const restaurante_id = req.params.id;
      await db.none('DELETE FROM restaurantes WHERE id = $1', [restaurante_id]);
      res.status(200).json({ message: 'Restaurante deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while deleting the restaurante', error });
    }
  },
};

module.exports = restaurantesController;

