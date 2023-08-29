// Import the db object
const db = require('../config/db');

// Define the menuItemController object
const menuItemController = {
  // Get all menuItem for a specific restaurante
  async getAll(req, res) {
    console.log("req.params.id");
    try {
      const restaurante_id = req.params.id;
      const menuItem = await db.any(
        'SELECT * FROM menuItem WHERE restaurante_id = $1 ORDER BY categoria',
        [restaurante_id]
      );
      res.status(200).json(menuItem);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while fetching the menuItem', error });
    }
  },
  

// Create a new plato
async create(req, res) {
  try {
    const { nombre, descripcion, precio, archivo_glbf, categoria, restaurante_id, habilitado, featured } = req.body;
    const newPlato = await db.one(
      'INSERT INTO menuItem (nombre, descripcion, precio, archivo_glbf, categoria, restaurante_id, habilitado, featured) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [nombre, descripcion, precio, archivo_glbf, categoria, restaurante_id, habilitado, featured]
    );
    res.status(201).json(newPlato);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while creating the Menu Item', error });
  }
},


// Update a plato
async update(req, res) {
  try {
    const plato_id = req.params.id;
    const { nombre, descripcion, precio, restaurante_id, habilitado, featured } = req.body;
    await db.none(
      'UPDATE menuItem SET nombre = $1, descripcion = $2, precio = $3, restaurante_id = $4, habilitado = $5, featured = $6 WHERE id = $7',
      [nombre, descripcion, precio, restaurante_id, habilitado, featured, plato_id]
    );
    res.status(200).json({ message: 'Menu item updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while updating the menu item', error });
  }
},


  // Delete a plato
  async delete(req, res) {
    try {
      const plato_id = req.params.id;
      await db.none('DELETE FROM menuItem WHERE id = $1', [plato_id]);
      res.status(200).json({ message: 'Plato deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while deleting the plato', error });
    }
  },
};

module.exports = menuItemController;

