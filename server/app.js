require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/db');


// Import the routers
const usersRouter = require('./routes/usersRoutes');
const restaurantesRouter = require('./routes/restaurantesRoutes');
const menuItemRouter = require('./routes/menuItemRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());
app.use(cors({
  origin: '*'  
}))

// Use the routers as middleware
app.use('/users', usersRouter);
app.use('/restaurantes', restaurantesRouter);
app.use('/menuItem', menuItemRouter);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
