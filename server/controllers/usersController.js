// Import the db object
const db = require('../config/db');

// Define a method for getting all users
const getAllUsers = async (req, res) => {
  try {
    const users = await db.any('SELECT * FROM users');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error getting all users', error });
  }
};

// Define a method for getting a single user by ID
const getUserById = async (req, res) => {
  try {
    const usuario = await db.oneOrNone('SELECT * FROM users WHERE id = $1', [req.params.id]);
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error getting users', error });
  }
};

// Define a method for creating a new user
const createUser = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const usuario = await db.one(
      'INSERT INTO users (nombre, email, password) VALUES ($1, $2, $3) RETURNING *',
      [nombre, email, password]
    );
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

// Define a method for updating a user by ID
const updateUser = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const updated = await db.result(
      'UPDATE users SET nombre = $1, email = $2, password = $3 WHERE id = $4',
      [nombre, email, password, req.params.id]
    );
    if (updated.rowCount === 1) {
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Define a method for deleting a user by ID
const deleteUser = async (req, res) => {
  try {
    const deleted = await db.result('DELETE FROM users WHERE id = $1', [req.params.id]);
    if (deleted.rowCount === 1) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

// Export the methods to be used in the routes
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};

